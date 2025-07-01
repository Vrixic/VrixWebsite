import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
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

function Minimap() {
  const ref = useRef<THREE.Group>(null!);
  const scroll = useScroll();
  const { urls } = useSnapshot(state);
  const { height } = useThree((state) => state.viewport);
  useFrame((_state, delta) => {
    if (!ref.current || ref.current.children.length === 0) return;
    ref.current.children.forEach((child, index) => {
      // Give me a value between 0 and 1
      //   starting at the position of my item
      //   ranging across 4 / total length
      //   make it a sine, so the value goes from 0 to 1 to 0.
      const y = scroll.curve(
        index / urls.length - 1.5 / urls.length,
        4 / urls.length
      );
      easing.damp(child.scale, "y", 0.15 + y / 6, 0.15, delta);
    });
  });
  return (
    <group ref={ref}>
      {urls.map((_, i) => (
        <primitive
          key={i}
          object={new THREE.Line(geometry, material)}
          position={[i * 0.06 - urls.length * 0.03, -height / 2 + 0.6, 0]}
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
  const [hovered, hover] = useState(false);
  const click = () => (state.clicked = index === clicked ? null : index);
  const over = () => hover(true);
  const out = () => hover(false);
  useFrame((_state, delta) => {
    if (!ref.current || !scale) return;

    const y = scroll.curve(
      index / urls.length - 1.5 / urls.length,
      4 / urls.length
    );
    easing.damp3(
      ref.current.scale,
      [clicked === index ? 4.7 : scale[0], clicked === index ? 5 : 4 + y, 1],
      0.15,
      delta
    );
    ref.current.material.scale[0] = ref.current.scale.x;
    ref.current.material.scale[1] = ref.current.scale.y;
    if (clicked !== null && index < clicked)
      easing.damp(ref.current.position, "x", position[0] - 2, 0.15, delta);
    if (clicked !== null && index > clicked)
      easing.damp(ref.current.position, "x", position[0] + 2, 0.15, delta);
    if (clicked === null || clicked === index)
      easing.damp(ref.current.position, "x", position[0], 0.15, delta);
    easing.damp(
      ref.current.material,
      "grayscale",
      hovered || clicked === index ? 0 : Math.max(0, 1 - y),
      0.15,
      delta
    );
    easing.dampC(
      ref.current.material.color,
      hovered || clicked === index ? "white" : "#aaa",
      hovered ? 0.3 : 0.15,
      delta
    );
  });
  return (
    <Image
      ref={ref}
      {...props}
      position={position}
      scale={scale}
      onClick={click}
      onPointerOver={over}
      onPointerOut={out}
      url={url}
    />
  );
}


function ScrollToCenter({ itemWidth, itemCount, gap }: { itemWidth: number, itemCount: number, gap: number}) {
  const scroll = useScroll()
  const { size } = useThree()

  useEffect(() => {
    if (!scroll.el) return

    const scrollToCenter = () => {
      if (scroll.el.scrollWidth > scroll.el.clientWidth) {
        // Calculate the center position of the scrollable content
        const maxScrollLeft = scroll.el.scrollWidth - scroll.el.clientWidth
        const centerScrollLeft = maxScrollLeft / 2
        
        scroll.el.scrollLeft = centerScrollLeft
      }
    }

    // Use a small delay to ensure content is rendered
    const timer = setTimeout(scrollToCenter, 50)
    
    return () => clearTimeout(timer)
  }, [scroll.el, itemCount, itemWidth, gap, size.width])

  return null
}

function WorkSelectionItems({ w = 1.25, gap = 0.25 }) {
  const { urls } = useSnapshot(state);
  const { width } = useThree((state) => state.viewport);
  const xW = w + gap;
  const pages = (width - xW + urls.length * xW) / width;

  return (
    <ScrollControls
      horizontal
      damping={0.1}
      pages={pages}
      >
      <Minimap />
      <Scroll>
        {
          urls.map((url, i) => <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4]} url={url} />) /* prettier-ignore */
        }
      </Scroll>
      <ScrollToCenter itemWidth={w} itemCount={urls.length} gap={gap} />
    </ScrollControls>
  );
}

function WorkSelectionItemsPage() {
  return (
    <Canvas
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      onPointerMissed={() => (state.clicked = null)}
    >
      <WorkSelectionItems />
    </Canvas>
  );
}

export default WorkSelectionItemsPage;
