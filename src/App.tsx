import "./App.css";
import MainPageCardsDiv from "./main-page/main-page";
import { Route, Routes } from "react-router";
import { Canvas } from "@react-three/fiber";
import { proxy } from "valtio";
import { lazy, Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import WorkSelectionItemsPage from "./work-selection-page/work-selection-page";
import { SoftShadows, useHelper } from "@react-three/drei";
// const WorkSelectionItemsPages = lazy(
//   () => import("./work-selection-page/work-selection-page")
// );

type StateType = {
  clicked: number | null;
  urls: string[];
};

const state = proxy<StateType>({
  clicked: null,
  urls: [1, 2, 3, 4].map((u) => `/${u}.jpg`),
});

const degToRad = (deg: number) => (deg * Math.PI) / 180;

function Lights() {
  const lightRef = useRef<THREE.DirectionalLight>(null!);

  useEffect(() => {
    if (lightRef.current) {
      if (!lightRef.current) return;

      const shadow = lightRef.current.shadow;
      shadow.bias = -0.001; // prevent shadow acne
      shadow.normalBias = 0.02; // help soften contact

      // Widen the camera frustum significantly
      const cam = shadow.camera as THREE.OrthographicCamera;
      cam.left = -1000;
      cam.right = 1000;
      cam.top = 100;
      cam.bottom = -100;
      cam.near = 0.5;
      cam.far = 5000;
      cam.updateProjectionMatrix();
    }
  }, []);

  useHelper(lightRef as React.MutableRefObject<THREE.DirectionalLight>, THREE.CameraHelper);
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[100, 100, 100]}
        rotation={[-degToRad(10), degToRad(0), degToRad(0)]}
        intensity={10}
      />
    </>
  );
}

function App() {
  console.log("Rendering MainPageCardsDiv");
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas
          shadows
          gl={{ antialias: true }}
          dpr={[1, 1.5]}
          onPointerMissed={() => (state.clicked = null)}
          style={{ background: "lightblue" }}
        >
          <Lights />
          <SoftShadows size={30} samples={16} focus={10} />
          <mesh
            receiveShadow
            rotation={[-degToRad(10), degToRad(0), degToRad(0)]}
            position={[0, 0, -0.6]}
          >
            <planeGeometry args={[100, 100]} />
            <shadowMaterial opacity={0.3} color={"red"} />
          </mesh>
          {location.pathname === "/" && <MainPageCardsDiv />}
        </Canvas>
      </Suspense>

      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/work-selection" element={<div />} />
      </Routes>
    </div>
  );
}

export default App;
