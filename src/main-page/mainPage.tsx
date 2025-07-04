import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { generate } from "random-words";

const createTextTexture = (text: string) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  // Set canvas size
  canvas.width = 512;
  canvas.height = 128;

  if (context !== null) {
    // Style the text
    context.fillStyle = "rgba(0, 0, 0, 0)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#ffffff";
    context.font = "bold 48px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";

    // Add glow effect
    context.shadowColor = "#4a90e2";
    context.shadowBlur = 2;
    context.fillText(text, canvas.width / 2, canvas.height / 2);
  }

  // Create texture
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          generate(1),
        ]);
    return temp;
  }, [count, radius]);
  return words;
}

const WordSphere = () => {
  const mountRef = useRef<any>(null);
  const sceneRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const frameRef = useRef<any>(null);

  const sphereRadius = 5;
  const words: [THREE.Vector3, string[]][] = Cloud({
    count: 10,
    radius: sphereRadius,
  }) as [THREE.Vector3, string[]][];

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xff2558); // Pure black background
    sceneRef.current = scene;

    // Add fog: (color should match or complement background)
    scene.fog = new THREE.Fog(0xff2558, 5, 15);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      90,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create word meshes
    const wordMeshes: THREE.Object3D<THREE.Object3DEventMap>[] = [];

    const getRandomLightColor = (): string => {
      const hue = Math.floor(Math.random() * 360); // Full color spectrum
      const saturation = Math.floor(Math.random() * 30) + 40; // 40% to 70% saturation (not too dull)
      const lightness = Math.floor(Math.random() * 20) + 75; // 75% to 95% lightness for light colors

      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    // Position words on sphere surface using Fibonacci spiral
    words.forEach(([position, wordArr], index) => {
      const word = wordArr[0];
      const texture = createTextTexture(word);

      // Create material
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.1,
        side: THREE.DoubleSide,
        color: "white",
        // opacity: 0.9,
      });

      // Create geometry
      const geometry = new THREE.PlaneGeometry(4, 1);
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.copy(position);

      // Make text face outward from sphere center
      mesh.lookAt(camera.position.clone().multiplyScalar(2));

      // Store original position and rotation for animation
      mesh.userData = {
        originalPosition: mesh.position.clone(),
        originalRotation: mesh.rotation.clone(),
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        floatSpeed: (Math.random() - 0.5) * 0.01,
      };

      scene.add(mesh);
      wordMeshes.push(mesh);
    });

    // Mouse/Touch interaction for rotation
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const rotationState = {
      isRotating: false,
      previousMousePosition: { x: 0, y: 0 },
      rotationSpeed: 0.005,
    };

    const target = new THREE.Vector3(0, 0, 0); // Center of sphere
    const spherical = new THREE.Spherical();
    spherical.radius = 8;
    spherical.theta = 0;
    spherical.phi = Math.PI / 2;

    const onMouseMove = (event: { clientX: number; clientY: number }) => {
      const rect = mountRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      if (rotationState.isRotating) {
        const deltaMove = {
          x: event.clientX - rotationState.previousMousePosition.x,
          y: event.clientY - rotationState.previousMousePosition.y,
        };

        spherical.theta -= deltaMove.x * rotationState.rotationSpeed;
        spherical.phi -= deltaMove.y * rotationState.rotationSpeed;

        // Clamp phi to prevent camera flipping over poles
        const EPS = 0.01;
        spherical.phi = Math.max(EPS, Math.min(Math.PI - EPS, spherical.phi));

        // theta wraps around naturally, so no clamp needed for theta

        rotationState.previousMousePosition = {
          x: event.clientX,
          y: event.clientY,
        };
      }
    };

    const onMouseDown = (event: { clientX: any; clientY: any }) => {
      rotationState.isRotating = true;
      rotationState.previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
      mountRef.current.style.cursor = "grabbing";
    };

    const onMouseUp = () => {
      rotationState.isRotating = false;
      mountRef.current.style.cursor = "grab";
    };

    const onMouseClick = () => {
      if (!rotationState.isRotating) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(wordMeshes);

        if (intersects.length > 0) {
          const clickedMesh = intersects[0].object;
          // Animate clicked word
          clickedMesh.scale.set(1.2, 1.2, 1.2);
          setTimeout(() => {
            clickedMesh.scale.set(1, 1, 1);
          }, 200);
        }
      }
    };

    // Touch events for mobile
    const onTouchStart = (event: {
      preventDefault: () => void;
      touches: any[];
    }) => {
      event.preventDefault();
      const touch = event.touches[0];
      rotationState.isRotating = true;
      rotationState.previousMousePosition = {
        x: touch.clientX,
        y: touch.clientY,
      };
    };

    const onTouchMove = (event: {
      preventDefault: () => void;
      touches: string | any[];
    }) => {
      event.preventDefault();
      if (rotationState.isRotating && event.touches.length === 1) {
        const touch = event.touches[0];
        const deltaMove = {
          x: touch.clientX - rotationState.previousMousePosition.x,
          y: touch.clientY - rotationState.previousMousePosition.y,
        };

        scene.rotation.y += deltaMove.x * rotationState.rotationSpeed;
        scene.rotation.x += deltaMove.y * rotationState.rotationSpeed;

        rotationState.previousMousePosition = {
          x: touch.clientX,
          y: touch.clientY,
        };
      }
    };

    const onTouchEnd = (event: { preventDefault: () => void }) => {
      event.preventDefault();
      rotationState.isRotating = false;
    };

    mountRef.current.addEventListener("mousemove", onMouseMove);
    mountRef.current.addEventListener("mousedown", onMouseDown);
    mountRef.current.addEventListener("mouseup", onMouseUp);
    mountRef.current.addEventListener("click", onMouseClick);
    mountRef.current.addEventListener("touchstart", onTouchStart);
    mountRef.current.addEventListener("touchmove", onTouchMove);
    mountRef.current.addEventListener("touchend", onTouchEnd);

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      // Convert spherical to Cartesian coordinates
      const newPosition = new THREE.Vector3().setFromSpherical(spherical);
      camera.position.copy(newPosition);
      camera.lookAt(target);

      // Animate individual words with subtle floating
      wordMeshes.forEach((mesh, index) => {
        // Subtle floating animation
        mesh.position.y =
          mesh.userData.originalPosition.y +
          Math.sin(Date.now() * 0.001 + index) * 0.1;

        // Slight rotation
        mesh.rotation.z =
          mesh.userData.originalRotation.z +
          Math.sin(Date.now() * 0.001 + index) * 0.1;

        // Always face the camera
        mesh.lookAt(camera.position);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;

      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      window.removeEventListener("resize", handleResize);

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeEventListener("mousemove", onMouseMove);
        mountRef.current.removeEventListener("mousedown", onMouseDown);
        mountRef.current.removeEventListener("mouseup", onMouseUp);
        mountRef.current.removeEventListener("click", onMouseClick);
        mountRef.current.removeEventListener("touchstart", onTouchStart);
        mountRef.current.removeEventListener("touchmove", onTouchMove);
        mountRef.current.removeEventListener("touchend", onTouchEnd);
        mountRef.current.removeChild(renderer.domElement);
      }

      // Dispose of Three.js objects
      scene.traverse((object) => {
        if ((object as THREE.Mesh).isMesh) {
          const mesh = object as THREE.Mesh;
          if (mesh.geometry) mesh.geometry.dispose();
          if (mesh.material) {
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((material) => {
                if ((material as any).map) (material as any).map.dispose();
                material.dispose();
              });
            } else {
              if ((mesh.material as any).map)
                (mesh.material as any).map.dispose();
              mesh.material.dispose();
            }
          }
        }
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-screen"
      style={{ cursor: "grab" }}
    />
  );
};

export default WordSphere;
