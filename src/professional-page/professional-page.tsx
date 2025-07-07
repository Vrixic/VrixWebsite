import { useEffect } from "react";
import NavDockComponent from "../components/nav/nav-component";
import { RouteInitProps } from "../generic/global-properties";
import { VscHome } from "react-icons/vsc";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useScroll,
  Text,
  Image,
  Scroll,
  Preload,
  ScrollControls,
} from "@react-three/drei";

export interface RotatingTextProps {
  texts: string[];
  loop?: boolean;
  onNext?: (index: number) => void;
}

function vw_scaling(width: number, x: number) {
  return (x / 10.504248108990096) * width;
}

function Images() {
  const group = useRef<any>(null);
  const data = useScroll();
  const { width, height } = useThree((state) => state.viewport);
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[3].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[5].material.grayscale =
      1 - data.range(1.6 / 3, 1 / 3);
    group.current.children[6].material.zoom =
      1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
  });
  return (
    <group ref={group}>
      <Image
        position={[vw_scaling(width, -2), 0, 0]}
        scale={[vw_scaling(width, 4), height]}
        url="/xbox-controller.jpg"
      />
      <Image
        position={[vw_scaling(width, 2), 0, 3]}
        scale={vw_scaling(width, 3)}
        url="/meta_quest.png"
      />
      <Image
        position={[vw_scaling(width, -2.05), -height, 6]}
        scale={[vw_scaling(width, 1), 3]}
        url="/shutdown_0.png"
      />
      <Image
        position={[vw_scaling(width, -0.6), -height, 9]}
        scale={[vw_scaling(width, 1), 2]}
        url="/shutdown_1.png"
      />
      <Image
        position={[vw_scaling(width, 0.75), -height, 10.5]}
        scale={[vw_scaling(width, 1.5), 1.5]}
        url="/shutdown_2.png"
      />
      <Image
        position={[0, -height * 1.5, 7.5]}
        scale={[1.5, 3]}
        url="/veccalogofinal.jpg"
      />
      <Image
        position={[0, -height * 2 - height / 4, 0]}
        scale={[width, height / 1.1]}
        url="/YUKAIMG.png"
      />
    </group>
  );
}

function Typography() {
  const state = useThree();
  const { width, height } = state.viewport.getCurrentViewport(
    state.camera,
    [0, 0, 12]
  );
  const shared = {
    font: "/Inter-Regular.woff",
    letterSpacing: -0.1,
    color: "gray",
  };
  const shared_dark_color = {
    font: "/Inter-Regular.woff",
    letterSpacing: -0.1,
    color: "black",
  };
  const scaleFactor = width / 5;
  function vw_scaling_(w: number, x: number) {
    return (w / w) * x;
  }

  return (
    <>
      <Text
        children="scroll down"
        anchorX="left"
        position={[vw_scaling_(width, 1 + height * 0.1), height / 2.5, 12]}
        fontSize={scaleFactor * 0.1}
        {...shared}
      />

      <Text
        children="meta"
        anchorX="left"
        position={[vw_scaling_(width, -1.68), -height / 10, 12]}
        fontSize={scaleFactor}
        {...shared}
      />
      <Text
        children="Performance Technical Artist V"
        anchorX="left"
        position={[vw_scaling_(width, -1.62), -height / 3.5, 12]}
        fontSize={scaleFactor * 0.1}
        {...shared_dark_color}
      />
      <Text
        children="Mar 2025 - PRESENT"
        anchorX="left"
        position={[vw_scaling_(width, -0.53), -height / 3.5, 12]}
        fontSize={scaleFactor * 0.075}
        {...shared_dark_color}
      />
      <Text
        children="to my"
        anchorX="right"
        position={[vw_scaling_(width, 1.68), -height * 2, 12]}
        fontSize={scaleFactor}
        {...shared}
      />
      <Text
        children="portfolio"
        position={[0, -height * 4.624, 12]}
        fontSize={scaleFactor}
        {...shared}
      />
    </>
  );
}

function ProcessionalPageDiv(_routeProps: RouteInitProps) {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = "";
    };
  }, []);

  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => {
        _routeProps.navigate("/");
      },
    },
  ];

  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 20], fov: 15 }}
        style={{ background: "white", zIndex: 0 }}
      >
        <ScrollControls damping={0.2} pages={3} distance={0.5}>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html>
            <div style={{ transform: "translate3d(65vw, 192vh, 0)" }}>
              vrixic
              <br />
              diamond, 38 cm
              <br />
            </div>
          </Scroll>
          {/** This is a helper that pre-emptively makes threejs aware of all geometries, textures etc
               By default threejs will only process objects if they are "seen" by the camera leading 
               to jank as you scroll down. With <Preload> that's solved.  */}
          <Preload />
        </ScrollControls>
      </Canvas>

      <NavDockComponent
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={80}
      />
    </>
  );
}

export default ProcessionalPageDiv;
