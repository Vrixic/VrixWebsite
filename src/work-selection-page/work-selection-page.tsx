import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Image, ScrollControls, Scroll, useScroll } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import { easing } from "maath";
import "./work-selection-page.css";

const material = new THREE.LineBasicMaterial({ color: "white" });
const geometry = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, -0.5, 0),
  new THREE.Vector3(0, 0.5, 0),
]);
type StateType = {
  clicked: number | null;
  urls: string[];
};

const state = proxy<StateType>({
  clicked: null,
  urls: [1, 2, 3, 4].map((u) => `/${u}.jpg`),
});

function Minimap({ viewportHeight }: { viewportHeight: number }) {
  const ref = useRef<THREE.Group>(null!);
  const scroll = useScroll();
  const { urls } = useSnapshot(state);

  const animate = () => {
    if (!ref.current) return;
    ref.current.children.forEach((child, index) => {
      const y = scroll.curve(
        index / urls.length - 1.5 / urls.length,
        4 / urls.length
      );
      easing.damp(child.scale, "y", 0.15 + y / 6, 0.15, 0.016);
    });
    requestAnimationFrame(animate);
  };

  animate();

  return (
    <group ref={ref}>
      {urls.map((_, i) => (
        <primitive
          key={i}
          object={new THREE.Line(geometry, material)}
          position={[
            i * 0.06 - urls.length * 0.03,
            -viewportHeight / 2 + 0.6,
            0,
          ]}
        />
      ))}
    </group>
  );
}

type ItemProps = {
  index: number;
  position: [number, number, number];
  scale: [number, number];
  url: string;
};

function Item({ index, position, scale, url, ...props }: ItemProps) {
  const ref = useRef<any>(null);
  const scroll = useScroll();
  const { clicked, urls } = useSnapshot(state);
  const [hovered, setHovered] = useState(false);

  const animate = () => {
    if (!ref.current) return;

    const y = scroll.curve(
      index / urls.length - 1.5 / urls.length,
      4 / urls.length
    );

    const targetScale = [
      clicked === index ? 4.7 : scale[0],
      clicked === index ? 5 : 4 + y,
      1,
    ];

    easing.damp3(
      ref.current.scale,
      targetScale as [number, number, number],
      0.15,
      0.016
    );
    ref.current.material.scale[0] = ref.current.scale.x;
    ref.current.material.scale[1] = ref.current.scale.y;

    const targetX =
      clicked === null || clicked === index
        ? position[0]
        : index < clicked
        ? position[0] - 2
        : position[0] + 2;

    easing.damp(ref.current.position, "x", targetX, 0.15, 0.016);
    easing.damp(
      ref.current.material,
      "grayscale",
      hovered || clicked === index ? 0 : Math.max(0, 1 - y),
      0.15,
      0.016
    );
    easing.dampC(
      ref.current.material.color,
      hovered || clicked === index ? "white" : "#aaa",
      hovered ? 0.3 : 0.15,
      0.016
    );

    requestAnimationFrame(animate);
  };

  const handleClick = () => {
    state.clicked = index === clicked ? null : index;
    animate();
  };

  const handlePointerOver = () => {
    setHovered(true);
    animate();
  };

  const handlePointerOut = () => {
    setHovered(false);
    animate();
  };

  return (
    <Image
      ref={ref}
      {...props}
      position={position}
      scale={scale}
      url={url}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  );
}

function ScrollToCenter({
  itemWidth,
  itemCount,
  gap,
  viewportWidth,
}: {
  itemWidth: number;
  itemCount: number;
  gap: number;
  viewportWidth: number;
}) {
  const scroll = useScroll();

  useEffect(() => {
    if (!scroll.el) return;

    const scrollToCenter = () => {
      if (scroll.el.scrollWidth > scroll.el.clientWidth) {
        const maxScrollLeft = scroll.el.scrollWidth - scroll.el.clientWidth;
        const centerScrollLeft = maxScrollLeft / 2;
        scroll.el.scrollLeft = centerScrollLeft;
      }
    };

    const timer = setTimeout(scrollToCenter, 50);
    return () => clearTimeout(timer);
  }, [scroll.el, itemCount, itemWidth, gap, viewportWidth]);

  return null;
}

function WorkSelectionItems({
  w = 1.25,
  gap = 0.25,
  viewportWidth = 10, // fallback value
  viewportHeight = 6, // pass this to Minimap
}: {
  w?: number;
  gap?: number;
  viewportWidth?: number;
  viewportHeight?: number;
}) {
  const { urls } = useSnapshot(state);
  const xW = w + gap;
  const pages = (viewportWidth - xW + urls.length * xW) / viewportWidth;

  return (
    <ScrollControls horizontal damping={0.1} pages={pages}>
      <Minimap viewportHeight={viewportHeight} />
      <Scroll>
        {urls.map((url, i) => (
          <Item
            key={i}
            index={i}
            position={[i * xW, 0, 0]}
            scale={[w, 4]}
            url={url}
          />
        ))}
      </Scroll>
      <ScrollToCenter
        itemWidth={w}
        itemCount={urls.length}
        gap={gap}
        viewportWidth={viewportWidth}
      />
    </ScrollControls>
  );
}

function WorkSelectionItemsPage() {
  return <WorkSelectionItems />;
}

export default WorkSelectionItemsPage;
