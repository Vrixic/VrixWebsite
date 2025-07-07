import { useState } from "react";
import {
  useSprings,
  animated,
  to as interpolate,
  useSpring,
  SpringValue,
  SpringRef,
} from "@react-spring/web";

import styles from "../main-page/main-page.module.css";
import { useDrag } from "@use-gesture/react";
import { Canvas } from "@react-three/fiber";
import {
  Card,
  CardDeckProps,
  GLOBAL_FONT_SCALE,
  VP_ASPECT_RATIO,
} from "../generic/global-properties";

let elementKeys: number = 10;
const globalCardScaling = 0.5;

let enableDragging = true;

const redColor = "#ff2558";

const gBackgroundColor2 = redColor;
const gTextColor = "#ffffff";
const gBackgroundColor1 = redColor;

function Deck({
  onSwipeRight,
  cards,
}: {
  onSwipeRight?: (cardIndex: number) => void;
  cards: Card[];
}) {
  // These two are just helpers, they curate spring data, values that are later being interpolated into css
  const to = (i: number) => ({
    x: 0,
    y: i * -4,
    scale: 1.5,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
  });
  const from = (_i: number) => ({ x: 0, rot: 0, scale: 2, y: -1000 });
  // This is being used down there in the view, it interpolates rotation and scale into a css transform
  const trans = (r: number, s: number) =>
    `perspective(1500px) rotateX(30deg) rotateY(${
      r / 10
    }deg) rotateZ(${r}deg) scale(${s * VP_ASPECT_RATIO * globalCardScaling})`;

  const toTitle = (i: number) => ({
    x: 0,
    title: cards[i].title,
    config: { mass: 5, tension: 1000, friction: 50, precision: 0.0001 },
  });

  const fromTitle = (_i: number) => ({
    x: 0,
    title: "",
  });

  const toLetters = (_i: number) => ({
    t: 0,
    letter: "",
    r: Math.random(),
    config: { mass: 5, tension: 1000, friction: 50, precision: 0.0001 },
  });

  const fromLetters = (_i: number) => ({
    t: 0,
    r: 0,
    letter: "",
  });

  // Start of deck function..
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above

  const [props2, api2] = useSprings(cards.length, (i: number) => ({
    ...toTitle(i),
    from: fromTitle(i),
  }));

  let cardTitleLettersSprings: Array<
    [
      {
        t: SpringValue<number>;
        letter: SpringValue<string>;
        r: SpringValue<number>;
      }[],
      SpringRef<{
        t: number;
        letter: string;
        r: number;
      }>
    ]
  > = [];
  cards.map((card) => {
    cardTitleLettersSprings.push(
      useSprings(card.title.length, (i: number) => ({
        ...toLetters(i),
        from: fromLetters(i),
      }))
    );
  });

  let cardBelowTitleLettersSprings: Array<
    [
      {
        t: SpringValue<number>;
        letter: SpringValue<string>;
        r: SpringValue<number>;
      }[],
      SpringRef<{
        t: number;
        letter: string;
        r: number;
      }>
    ]
  > = [];
  cards.map((card) => {
    cardBelowTitleLettersSprings.push(
      useSprings(card.belowTitle.length, (i: number) => ({
        ...toLetters(i),
        from: fromLetters(i),
      }))
    );
  });

  const [toturialSpring, toturialSpringApi] = useSpring(() => ({
    to: {
      x: 1,
      config: { mass: 5, tension: 1000, friction: 50, precision: 0.0001 },
    },
    from: {
      x: 0,
    },
  }));

  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], velocity }) => {
    if (!enableDragging) return; // Disable dragging if needed

    const trigger = velocity.length > 0.2; // If you flick hard enough it should trigger the card to fly out
    const dir = mx < 0 ? -1 : 1; // Direction should either point left or right
    if (!down && trigger && Math.abs(mx) > 100 * VP_ASPECT_RATIO) {
      gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      // Call the callback when swiped right (dir > 0)
      if (dir > 0 && onSwipeRight) {
        onSwipeRight(index);
      }
    }

    api.start((i) => {
      if (index !== i) return; // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity.length : 0); // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.75 : 1.5; // Active cards lift up a bit
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      };
    });

    if (!down && gone.size === cards.length)
      setTimeout(() => {
        gone.clear();
        api.start((i) => to(i));
        api2.start(() => ({
          x: 0,
          title: "",
        }));
        toturialSpringApi.start(() => ({
          x: 1,
        }));
      }, 500);
  });

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      <div>
        <animated.div
          key={elementKeys++}
          className={styles.deck}
          style={{
            opacity: toturialSpring.x.to([0, 1], [0, 1]),
            zIndex: 0,
          }}
        >
          <animated.span
            key={elementKeys++}
            style={{
              transform: toturialSpring.x.to(
                (value) =>
                  `translate3d(${-150 * value * VP_ASPECT_RATIO}px, ${
                    -100 * value * VP_ASPECT_RATIO
                  }px, 0px) rotate3d(0, 1, 1, -55deg)`
              ),
              fontSize: toturialSpring.x.to(
                [0, 1],
                [0, GLOBAL_FONT_SCALE * 0.3 * globalCardScaling]
              ),
              color: gTextColor,
              willChange: "transform",
              opacity: toturialSpring.x.to([0, 1], [0, 1]),
            }}
          >
            {"Swipe"}
          </animated.span>
        </animated.div>
        {props2.map(({ x }, i) => (
          <animated.div
            key={elementKeys++}
            className={styles.deck}
            style={{
              backgroundColor: x.to(
                [0, 1],
                [gBackgroundColor1, gBackgroundColor2]
              ),
              color: x.to([0, 1], [gBackgroundColor1, gTextColor]),
              opacity: x.to([0, 1], [0, 1]),
              zIndex: 0,
            }}
          >
            {cardTitleLettersSprings[i][0].map(
              ({ t, letter, r }, _j: number) => (
                <animated.span
                  key={elementKeys++}
                  style={{
                    transform: t.to(
                      (value) =>
                        `translate3d(${0 * value * VP_ASPECT_RATIO}px, ${
                          window.innerHeight * value * -0.3
                        }px, 0px) rotate3d(1, 0, 0, 55deg)rotate3d(0, 0, 1, ${
                          r.get() * 5
                        }deg)`
                    ),
                    fontSize: t.to(
                      [0, 1],
                      [
                        0,
                        Math.min(window.innerWidth, window.innerHeight) *
                          0.3 *
                          globalCardScaling,
                      ]
                    ),
                    willChange: "transform",
                    // top: "-37.5%",
                    opacity: t.to([0, 1], [0, 1]),
                  }}
                >
                  {letter}
                </animated.span>
              )
            )}
            {cardBelowTitleLettersSprings[i][0].map(
              ({ t, letter, r }, _j: number) => (
                <animated.span
                  key={elementKeys++}
                  style={{
                    transform: t.to(
                      (value) =>
                        `translate3d(${0 * value * VP_ASPECT_RATIO}px, ${
                          window.innerHeight * value * 0.3
                        }px, 0px) rotate3d(1, 0, 0, 55deg)rotate3d(0, 0, 1, ${
                          r.get() * 5
                        }deg)`
                    ),
                    fontSize: t.to(
                      [0, 1],
                      [
                        0,
                        Math.min(window.innerWidth, window.innerHeight) *
                          0.3 *
                          globalCardScaling,
                      ]
                    ),
                    willChange: "transform",
                    // top: "-37.5%",
                    opacity: t.to([0, 1], [0, 1]),
                  }}
                >
                  {letter}
                </animated.span>
              )
            )}
          </animated.div>
        ))}
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div className={styles.deck} key={i} style={{ x, y }}>
            {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
            <animated.div
              {...bind(i)}
              onMouseDown={() => {
                if (!enableDragging) return; // Disable dragging if needed
                api2.start((ci) => ({
                  x: ci == i ? 1 : 0,
                  title: cards[i].title,
                }));
                cardTitleLettersSprings[i][1].start((li) => ({
                  t: 1,
                  letter: cards[i].title[li],
                }));
                cardBelowTitleLettersSprings[i][1].start((li) => ({
                  t: 1,
                  letter: cards[i].belowTitle[li],
                }));

                toturialSpringApi.start(() => ({
                  x: 0,
                }));
              }}
              onMouseUp={() => {
                api2.start(() => ({
                  x: 0,
                  title: "",
                }));
                cardTitleLettersSprings[i][1].start(() => ({
                  t: 0,
                  letter: "",
                }));
                cardBelowTitleLettersSprings[i][1].start(() => ({
                  t: 0,
                  letter: "",
                }));

                toturialSpringApi.start(() => ({
                  x: 1,
                }));
                enableDragging = false;

                setTimeout(() => {
                  enableDragging = true;
                }, 100);
              }}
              style={{
                transform: interpolate([rot, scale], trans),
                backgroundImage: `url(${cards[i].url})`,

                touchAction: "auto",

                backgroundColor: "white",
                backgroundSize: "auto 85%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "60%", // or use px if preferred
                maxWidth: "150px",
                maxHeight: "285px",
                aspectRatio: "45 / 85", // keeps consistent height/width ratio
                willChange: "transform",
                borderRadius: "10px",
                boxShadow:
                  "0 12.5px 100px -10px rgba(255, 255, 255, 0.1), 0 10px 10px -10px rgba(255, 255, 255, 0.05)",
                zIndex: 0,
              }}
            />
          </animated.div>
        ))}
      </div>
    </>
  );
}

function CardDeck(
  {cards, routeProps}: CardDeckProps,
) {
  const handleSwipeRight = (cardIndex: number) => {
    console.log(`Liked card ${cardIndex} with url ${cards[cardIndex].url}!`);
    // Hide the deck using state
    setTimeout(() => {
      routeProps.navigate(cards[cardIndex].route, {
        state: {
          cardIndex,
          action: "liked",
        },
      });
    }, 100);
  };
  return (
    <div className={styles.container}>
      <Canvas children={undefined}></Canvas>
      <Deck key={Math.random()} onSwipeRight={handleSwipeRight} cards={cards} />
    </div>
  );
}

export default CardDeck;
