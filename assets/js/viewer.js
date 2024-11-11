import "../css/main.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { GlitchPass } from "three/addons/postprocessing/GlitchPass.js";
import { HorizontalBlurShader } from "three/examples/jsm/shaders/HorizontalBlurShader.js";
import { VerticalBlurShader } from "three/examples/jsm/shaders/VerticalBlurShader.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { FXAAShader } from "three/addons/shaders/FXAAShader.js";

import Stats from "three/addons/libs/stats.module.js";

import { Reflector } from "three/examples/jsm/objects/Reflector.js";

import { RectAreaLightHelper } from "three/addons/helpers/RectAreaLightHelper.js";
import { RectAreaLightUniformsLib } from "three/addons/lights/RectAreaLightUniformsLib.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { FXAAEffect } from "postprocessing";

import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

import { MeshLine, MeshLineMaterial } from "three.meshline";

import LineGenerator from "./objects/LineGenerator.js";
import Stars from "./objects/Stars.js";

import getRandomFloat from "./utils/getRandomFloat.js";
import getRandomItem from "./utils/getRandomItem.js";
import AppCanvas from "./graphics/AppCanvas.js";
import PlaneTextButton3D from "./graphics/PlaneTextButton3D.js";

var gltfLoader, spaceStationScene, cyberHomeScene, loadingManager;
/**
 * @type {THREE.AnimationMixer}
 */
var spaceStationSceneMixer;
/**
 * @type {THREE.OrbitControls}
 */
var camControls;
/**
 * @type {THREE.RenderPass}
 */
var mainSceneRP, btnsSceneRP;
/**
 * @type {THREE.EffectComposer}
 */
var btnComposer, mainComposer;
/**
 * @type {THREE.Mesh}
 */
var groundPlane;
/**
 * @type {THREE.Scene}
 */
var mainScene, btnsScene, loadingScene;
/**
 * @type {THREE.Clock}
 */
var clock;
/**
 * @type {THREE.Camera}
 */
var mainCamera, loadingCamera;

var canvas = document.querySelector("canvas.webgl");
/**
 * @type {AppCanvas}
 */
var gAppCanvas = new AppCanvas(canvas);

// Create a Raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(); // Normalized mouse coordinates

const stats = new Stats();

const sceneScale = 1;

var bGoingToComputer = false,
  bReturnToScene = false,
  bViewingComputer = false,
  camPrevLocation = new THREE.Vector3(),
  camPrevRotation = new THREE.Quaternion();
var camProgress = 0;

var cameraComputerLocation = new THREE.Vector3(1.5, 10.5, 1.1);
var cameraComputerLookLocation = new THREE.Vector3(0, 10.5, 1.1);

var deltaTime = 0.0;

var botHead;
var botHeadMixer;
var botHeadEyeBlinkAction;

var botHeadCursor;
var botHeadCursorEyeLeft;
var botHeadCursorEyeRight;

var botHeadCursorMeshLeft;
var botHeadCursorMeshRight;

var botHeadCursorMeshLineLeft;
var botHeadCursorMeshLineRight;

var botHeadCursorMeshLineMaterial;

/**
 * @type {THREE.Points}
 */
var particleSystem;
/**
 * @type {THREE.Scene}
 */
var particlesScene;

/**
 * @type {HTMLDivElement}
 */
var loadingScreen;

const particles = [];
const particleCount = 200;

/**
 * * *******************
 * * Lines
 * * *******************
 */
const RADIUS_START = 0.3;
const RADIUS_START_MIN = 0.1;
const Z_MIN = -1;

const Z_INCREMENT = 0.08;
const ANGLE_INCREMENT = 0.025;
const RADIUS_INCREMENT = 0.02;

const COLORS = ["#ee3227", "#134a7c", "#ffffff"].map(
  (col) => new THREE.Color(col)
);
const STATIC_PROPS = {
  transformLineMethod: (p) => p * 1.5,
};

const position = { x: 0, y: 0, z: 0 };
class CustomLineGenerator extends LineGenerator {
  addLine() {
    if (this.lines.length > 400) return;

    let z = Z_MIN;
    let radius = Math.random() > 0.8 ? RADIUS_START_MIN : RADIUS_START;
    let angle = getRandomFloat(0, Math.PI * 2);

    const points = [];
    while (z < mainCamera.position.z) {
      position.x = Math.cos(angle) * radius;
      position.y = Math.sin(angle) * radius;
      position.z = z;

      // incrementation
      z += Z_INCREMENT;
      angle += ANGLE_INCREMENT;
      radius += RADIUS_INCREMENT;

      // push
      points.push(new THREE.Vector3(position.x, position.y, position.z));
    }

    // Low lines
    super.addLine({
      visibleLength: getRandomFloat(0.1, 0.4),
      // visibleLength: 1,
      points,
      // speed: getRandomFloat(0.001, 0.002),
      speed: getRandomFloat(0.002, 0.01),
      color: getRandomItem(COLORS),
      width: getRandomFloat(0.01, 0.06),
    });
  }
}
/**
 * @type {CustomLineGenerator}
 */
var lineGenerator;

// Deep clone function
function deepClone(object) {
  const clone = object.clone();

  // Recursively clone geometry and material for each mesh
  clone.traverse((node) => {
    if (node.isMesh) {
      node.geometry = node.geometry.clone();
      node.material = node.material.clone();
    }
  });

  return clone;
}

function blinkEyesLoop(action) {
  const secs = Math.random() * 10000 + 1000;
  setTimeout(() => {
    action.reset();
    action.play();
    blinkEyesLoop(action);
  }, secs);
}

function initMeshes() {
  gltfLoader = new GLTFLoader(loadingManager);
  gltfLoader
    .loadAsync("assets/models/gltf/cyberpunk_micro-apartments/scene.gltf")
    .then(function (gltf) {
      cyberHomeScene = gltf.scene;

      gltf.scene.children.forEach((child) => {
        if (child.name == "RootBot") {
          child.scale.set(0.5, 0.5, 0.5);
        }
      });

      mainScene.add(gltf.scene);
    });

  gltfLoader
    .loadAsync("assets/models/gltf/SM_Bottington_V.glb")
    .then(function (gltf) {
      const rootBot = gltf.scene.getObjectByName("RootBot");
      rootBot.scale.set(0.5, 0.5, 0.5);

      botHead = rootBot.getObjectByName("SM_Bottington002");

      botHeadMixer = new THREE.AnimationMixer(gltf.scene);
      botHeadEyeBlinkAction = botHeadMixer.clipAction(gltf.animations[0]);
      botHeadEyeBlinkAction.setLoop(THREE.LoopOnce);
      botHeadEyeBlinkAction.clampWhenFinished = true;
      botHeadEyeBlinkAction.timeScale = 10;

      blinkEyesLoop(botHeadEyeBlinkAction);

      gltf.scene.position.z = 4.5;
      mainScene.add(gltf.scene);

      // Bot Head that follows cursor
      var copyScene = deepClone(gltf.scene);
      copyScene.position.z = -4;

      const rootBotCursor = copyScene.getObjectByName("RootBot");
      botHeadCursor = rootBotCursor.getObjectByName("SM_Bottington002");
      botHeadCursorEyeLeft = botHeadCursor.getObjectByName("EyeLeft");
      botHeadCursorEyeRight = botHeadCursor.getObjectByName("EyeRight");

      mainScene.add(copyScene);
    });
}

const gFirefliesFlockRadius = 50.0;
const gFirefliesMinHeight = 0;
const gFirefliesMaxHeight = 65;

function flerp(a, b, t) {
  return a + t * (b - a);
}
function blendColors(hex1, hex2, t) {
  // Ensure t is between 0 and 1
  t = Math.max(0, Math.min(1, t));

  // Extract RGB components from hex codes
  const r1 = (hex1 >> 16) & 0xff;
  const g1 = (hex1 >> 8) & 0xff;
  const b1 = hex1 & 0xff;

  const r2 = (hex2 >> 16) & 0xff;
  const g2 = (hex2 >> 8) & 0xff;
  const b2 = hex2 & 0xff;

  // Interpolate each color component
  const r = Math.round(r1 + t * (r2 - r1));
  const g = Math.round(g1 + t * (g2 - g1));
  const b = Math.round(b1 + t * (b2 - b1));

  // Convert back to hex
  return (r << 16) + (g << 8) + b;
}

class Particle {
  constructor() {
    // Initialize position, velocity, and acceleration
    this.position = new THREE.Vector3(
      (Math.random() - 0.5) * 50,
      Math.random() * 20,
      (Math.random() - 0.5) * 50
    );

    // Optional properties like lifespan for fading effects
    this.lifespan = Math.random();
    this.decay = Math.random() * 0.005; // Decay rate

    this.gFirefliesElevationSpeed = 0.125 * (Math.random() - 0.5);
    this.gFirefliesWhirlSpeed = 0.0625 * (Math.random() - 0.5);

    this.gFirefliesWhirlAngle = 5 * (Math.random() - 0.5);
    this.gFirefliesElevationT = 5 * (Math.random() - 0.5);
    this.elevationDirection = 1;

    this.cr = 0;
    this.cg = 1;
    this.cb = 1;
  }

  // Update particle position and velocity
  update() {
    // this.lifespan -= this.decay; // Reduce lifespan
    // this.lifespan = Math.max(this.lifespan, 0); // Clamp lifespan to 0

    const firefliesX =
      Math.cos(this.gFirefliesWhirlAngle) * gFirefliesFlockRadius;
    const firefliesZ =
      6.0 + Math.sin(this.gFirefliesWhirlAngle) * gFirefliesFlockRadius;

    const firefliesY = flerp(
      gFirefliesMinHeight,
      gFirefliesMaxHeight,
      (Math.sin(this.gFirefliesElevationT) + 1.0) * 0.5
    );

    this.gFirefliesWhirlAngle += deltaTime * this.gFirefliesWhirlSpeed;
    this.gFirefliesElevationT +=
      deltaTime * this.gFirefliesElevationSpeed * this.elevationDirection;
    if (
      (this.gFirefliesElevationT >= 1.0 && this.elevationDirection == 1) ||
      (this.gFirefliesElevationT <= 0.0 && this.elevationDirection == -1)
    ) {
      this.elevationDirection *= -1;
    }

    const val = firefliesY / gFirefliesMaxHeight;
    this.cr = flerp(0, 1, val);
    this.cg = flerp(1, 165.0 / 255.0, val);
    this.cb = flerp(1, 0.0, val);

    this.position.set(firefliesX, firefliesY, firefliesZ); // Update position based on velocity
  }
}

var bAssetsLoadCompleted = false;

function OnAssetLoadCompleted() {
  setTimeout(() => {
    bAssetsLoadCompleted = true;
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
      animate();
    }, 500);
  }, 1500);
}
function initLoadScreen() {
  // Loading Screen HTML and CSS setup
  loadingScreen = document.createElement("div");
  loadingScreen.style.position = "fixed";
  loadingScreen.style.width = "100%";
  loadingScreen.style.height = "100%";
  loadingScreen.style.backgroundColor = "rgba(0,0,0,1)";
  loadingScreen.style.display = "flex";
  loadingScreen.style.justifyContent = "center";
  loadingScreen.style.alignItems = "center";
  loadingScreen.style.color = "#ffffff";
  loadingScreen.style.fontSize = "24px";

  // Set initial opacity to 0 for fade-in effect
  loadingScreen.style.opacity = "0";
  loadingScreen.style.transition = "opacity 0.5s ease"; // Adjust duration as needed

  loadingScreen.innerHTML = "Loading...";

  document.body.appendChild(loadingScreen);

  const width = loadingScreen.offsetWidth;
  const height = loadingScreen.offsetHeight;

  // Set font size as a percentage of width or height
  const fontSize = Math.min(width, height) * 0.075; // Adjust the multiplier as needed
  loadingScreen.style.fontSize = `${fontSize}px`;

  // Loading Manager
  loadingManager = new THREE.LoadingManager();

  // Remove the loading screen when all assets are loaded
  loadingManager.onLoad = () => {
    OnAssetLoadCompleted();
  };

  loadingScene = new THREE.Scene();
  loadingCamera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    500
  );
  loadingCamera.position.x = 0.75;
  loadingCamera.lookAt(0, 0, 0);

  //
  lineGenerator = new CustomLineGenerator(
    {
      frequency: 0.5,
    },
    STATIC_PROPS
  );
  //loadingScene.add(lineGenerator);

  lineGenerator.rotation.y = Math.PI * 0.5;
  lineGenerator.start();

  // Trigger the fade-in effect after appending
  setTimeout(() => {
    loadingScreen.style.opacity = "1";
  }, 100); // Small delay to ensure the transition applies
}

function OnExitButtonClick() {
  if (!bReturnToScene) {
    bReturnToScene = true;

    const elementWithClass = document.querySelector("div#wrapper");
    if (elementWithClass) {
      elementWithClass.style.display = "none";
    }
  }
}

// Define Exit Buttin
const exitButton = document.querySelector(".returnToScene");
// Check if the element exists, then add the onclick event
if (exitButton) {
  exitButton.onclick = function () {
    OnExitButtonClick();
  };
  exitButton.addEventListener("touchstart", function () {
    OnExitButtonClick();
  });
} else {
  console.error("Element with class 'returnToScene' not found.");
}

function initBtnComposer() {
  btnComposer = new EffectComposer(gAppCanvas.Renderer);
  btnsSceneRP = new RenderPass(btnsScene, mainCamera);
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.15,
    0.4,
    0.05
  );
  //const fxaaPass = new ShaderPass(FXAAShader);
  const op = new OutputPass();

  btnComposer.addPass(btnsSceneRP);
  //btnComposer.addPass(fxaaPass);
  btnComposer.addPass(bloomPass);
  btnComposer.addPass(op);

  btnComposer.renderToScreen = true;
  //btnsSceneRP.clear = false;
}

function initMainComposer() {
  mainComposer = new EffectComposer(gAppCanvas.Renderer);
  mainSceneRP = new RenderPass(mainScene, mainCamera);
  const fxaaPass = new ShaderPass(FXAAShader);
  const op = new OutputPass();

  mainComposer.addPass(mainSceneRP);
  mainComposer.addPass(fxaaPass);
  mainComposer.addPass(op);

  mainComposer.renderToScreen = true;
  //mainSceneRP.autoClear = false;
}

function initScenes() {
  mainScene = new THREE.Scene();
  mainScene.scale.set(sceneScale, sceneScale, sceneScale);

  btnsScene = new THREE.Scene();
  btnsScene.scale.set(sceneScale, sceneScale, sceneScale);

  clock = new THREE.Clock();

  addMainSceneObjects();
  addBtnSceneObjects();
}

function initCamera() {
  mainCamera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    500
  );

  mainCamera.position.x = 8;
  mainCamera.position.y = 5;
  mainCamera.position.z = 0;
  mainCamera.lookAt(0, 0, 0);
}

function initLights() {
  const ambientLight = new THREE.AmbientLight(0xffffff);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

  const pl0 = new THREE.PointLight(
    0xff0000,
    250000 * sceneScale,
    1000000 * sceneScale
  );
  pl0.position.y = -5;

  mainScene.add(ambientLight, directionalLight);

  const ambientLight2 = new THREE.AmbientLight(0xffffff);
  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
  btnsScene.add(ambientLight2, directionalLight2, pl0);
}

function initControls() {
  camControls = new OrbitControls(mainCamera, canvas);
  camControls.enableDamping = true;
  camControls.maxDistance = 40;
  camControls.minPolarAngle = Math.PI * 0.25; // minimum angle in radians (0 is directly above)
  camControls.maxPolarAngle = Math.PI * 0.49; // maximum angle in radians (PI is directly below)
  camControls.enablePan = false;
  camControls.rotateSpeed = 0.5;
  camControls.zoomSpeed = 0.5;
}

function addEventListeners() {
  window.addEventListener("resize", () => onResize());
}

function onResize() {
  mainCamera.aspect = window.innerWidth / window.innerHeight;
  mainCamera.updateProjectionMatrix();

  gAppCanvas.OnResize();

  btnComposer.setSize(window.innerWidth, window.innerHeight);
  btnComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

/**
 * @type {THREE.Object3D<THREE.Object3DEventMap>}
 */
var cIntersectedObject;
var bMouseDown, bIsHovering;

function GenerateMeshLinePoints(startPoint, endPoint) {
  const direction = new THREE.Vector3().subVectors(endPoint, startPoint);

  let points = [];
  const numPoints = 20;
  for (let i = 0; i <= numPoints; i++) {
    points.push(startPoint.clone().addScaledVector(direction, i / numPoints));
    if (i > 0 && i < numPoints) {
      points[i].y +=
        Math.sin(i + clock.getElapsedTime() * (bMouseDown ? 10 : 5)) * 0.0105;
    }
  }

  return points;
}
function UpdateBotHeadCursorEyesMeshLine() {
  if (botHeadCursorMeshLeft) {
    botHeadCursorMeshLeft.visible = false;
  }
  if (botHeadCursorMeshRight) {
    botHeadCursorMeshRight.visible = false;
  }
  if ((!bIsHovering && !bMouseDown) || !botHeadCursorEyeLeft || !botHeadCursorEyeRight) {
    return;
  }

  const startPoint = new THREE.Vector3();
  const endPoint = new THREE.Vector3();
  botHeadCursorEyeLeft.getWorldPosition(startPoint);

  const planeZ = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  raycaster.ray.intersectPlane(planeZ, endPoint);

  endPoint.x += 0.05;

  // Create MeshLine geometries
  if (!botHeadCursorMeshLineLeft) {
    botHeadCursorMeshLineLeft = new MeshLine();
  }
  if (!botHeadCursorMeshLineRight) {
    botHeadCursorMeshLineRight = new MeshLine();
  }

  // Create a mesh with MeshLine geometry and material
  const leftPoints = GenerateMeshLinePoints(startPoint, endPoint);

  botHeadCursorEyeRight.getWorldPosition(startPoint);
  const rightPoints = GenerateMeshLinePoints(startPoint, endPoint);

  // Convert points array to a flat array
  const linePointsLeft = leftPoints.flatMap((p) => [p.x, p.y, p.z]);
  botHeadCursorMeshLineLeft.setPoints(linePointsLeft);

  const linePointsRight = rightPoints.flatMap((p) => [p.x, p.y, p.z]);
  botHeadCursorMeshLineRight.setPoints(linePointsRight);

  // Create MeshLine material with desired width
  botHeadCursorMeshLineMaterial = new MeshLineMaterial({
    color: bMouseDown ? 0x00ff00 : 0xff0000, // Line color
    lineWidth: 0.1, // Line width in world units
    resolution: new THREE.Vector2(window.innerWidth, window.innerHeight), // Required for sizing
    sizeAttenuation: true, // Makes the line width perspective-correct
  });

  if (!botHeadCursorMeshLeft) {
    botHeadCursorMeshLeft = new THREE.Mesh(
      botHeadCursorMeshLineLeft,
      botHeadCursorMeshLineMaterial
    );
    mainScene.add(botHeadCursorMeshLeft);
  } else {
    botHeadCursorMeshLeft.visible = true;
  }

  if (!botHeadCursorMeshRight) {
    botHeadCursorMeshRight = new THREE.Mesh(
      botHeadCursorMeshLineRight,
      botHeadCursorMeshLineMaterial
    );
    mainScene.add(botHeadCursorMeshRight);
  } else {
    botHeadCursorMeshRight.visible = true;
  }

  botHeadCursorMeshLeft.material = botHeadCursorMeshLineMaterial;
  botHeadCursorMeshRight.material = botHeadCursorMeshLineMaterial;
}

function OnHoverStart(btn) {
  if (btn.OnHoverStart) {
    btn.OnHoverStart(btn);
  }
}
function OnHoverEnd(btn) {
  if (btn.OnHoverEnd) {
    btn.OnHoverEnd(btn);
  }
}

function OnMouseDown() {
  bMouseDown = true;

  if (cIntersectedObject != null && cIntersectedObject.OnMouseDown) {
    camControls.rotateSpeed = 0.0;

    cIntersectedObject.OnMouseDown(cIntersectedObject);
  }

  // camPrevLocation.copy(mainCamera.position);
  // camPrevRotation.copy(mainCamera.quaternion);
  // bGoingToComputer = true;
  // camProgress = 0;
}
function OnMouseUp() {
  bMouseDown = false;

  if (cIntersectedObject != null && cIntersectedObject.OnMouseUp) {
    cIntersectedObject.OnMouseUp(cIntersectedObject);
  }

  camControls.rotateSpeed = 0.25;
}
function OnMouseMove(bNoHoverEvents = true) {
  const intersected = raycaster.intersectObject(btnsScene);

  const collidableObjects = intersected.filter((intersect) => {
    return intersect.object instanceof PlaneTextButton3D;
  });

  if (collidableObjects.length > 0) {
    if (bNoHoverEvents) {
      if (!bMouseDown) {
        // Hover End
        if (
          cIntersectedObject != collidableObjects[0].object &&
          cIntersectedObject != null
        ) {
          OnHoverEnd(cIntersectedObject);
        }

        // Hover Start
        if (!bIsHovering) {
          cIntersectedObject = collidableObjects[0].object;
          OnHoverStart(cIntersectedObject);
          bIsHovering = true;
        }
      } else if (cIntersectedObject != null) {
        // Hover End
        OnHoverEnd(cIntersectedObject);
        cIntersectedObject = null;
        bIsHovering = false;
      }
    } else {
      cIntersectedObject = collidableObjects[0].object;
    }
  }
}

window.addEventListener("mousemove", (event) => {
  // Convert mouse position to normalized device coordinates (-1 to +1)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Update the raycaster with the mainCamera and mouse position
  raycaster.setFromCamera(mouse, mainCamera);
  OnMouseMove(false);
});
window.addEventListener("mousedown", (event) => {
  OnMouseDown();
});
window.addEventListener("mouseup", (event) => {
  OnMouseUp();
});

function addMainSceneObjects() {
  // Add Ground Plane
  const plane = new THREE.CircleGeometry(5, 16);
  const gpmat = new THREE.ShaderMaterial({
    uniforms: {
      uRadius: { value: 1 }, // Radius of the circle (relative to the plane)
      uEdgeFade: { value: 1.5 }, // Distance over which to fade out
      uColor: { value: new THREE.Color(0xffffff) }, // Color of the plane
    },
    vertexShader: /* glsl */ `
          varying vec2 vUv;
          void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
      `,
    fragmentShader: /* glsl */ `
          uniform float uRadius;
          uniform float uEdgeFade;
          uniform vec3 uColor;
          varying vec2 vUv;
          void main() {
              // Calculate distance from the center of the plane
              float dist = length(vUv - vec2(0.5, 0.5)) * 2.0;

              // Calculate the alpha based on distance from the center
              float alpha = 1.0 - smoothstep(uRadius- uEdgeFade, uRadius , dist);

              // Apply the color and fade out the edges
              gl_FragColor = vec4(uColor, alpha * 0.25f);
          }
      `,
    transparent: true, // Enable transparency for fade-out effect
  });
  groundPlane = new THREE.Mesh(plane, gpmat);
  groundPlane.position.y = 0.05;
  groundPlane.rotateX(-Math.PI / 2);
  mainScene.add(groundPlane);
}

async function addBtnSceneObjects() {
  const textParentObj = new THREE.Group();
  textParentObj.position.x = 2.5;
  textParentObj.position.y = 0.075;

  textParentObj.rotation.x = -Math.PI * 0.5;
  textParentObj.rotation.z = Math.PI * 0.5;
  btnsScene.add(textParentObj);

  const textureLoader = new THREE.TextureLoader(loadingManager);
  textureLoader
    .loadAsync("assets/textures/ProjectsText.png")
    .then(function (texture) {
      const projectsTextPlane = new PlaneTextButton3D(texture);
      textParentObj.add(projectsTextPlane);
    });
  textureLoader
    .loadAsync("assets/textures/AboutMeText.png")
    .then(function (texture) {
      const aboutMeTextPlane = new PlaneTextButton3D(texture);
      textParentObj.add(aboutMeTextPlane);

      aboutMeTextPlane.position.y = -1;
    });
  textureLoader
    .loadAsync("assets/textures/ResumeText.png")
    .then(function (texture) {
      const resumeTextPlane = new PlaneTextButton3D(texture);
      textParentObj.add(resumeTextPlane);
      resumeTextPlane.position.y = -2;
    });
}

function initParticles() {
  particlesScene = new THREE.Scene();

  // Initialize particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Create geometry and material for particle system
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  // Initialize position and alpha arrays
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = particles[i].position.x;
    positions[i * 3 + 1] = particles[i].position.y;
    positions[i * 3 + 2] = particles[i].position.z;

    colors[i * 3] = 0;
    colors[i * 3 + 1] = 1;
    colors[i * 3 + 2] = 1;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  // Particle material
  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.025,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    vertexColors: true,
  });

  // Create Points object
  particleSystem = new THREE.Points(geometry, material);
  particlesScene.add(particleSystem);
}
// Update particle positions and alpha
function updateParticles() {
  const positions = particleSystem.geometry.attributes.position.array;
  const colors = particleSystem.geometry.attributes.color.array;

  particles.forEach((particle, i) => {
    particle.update(); // Update each particle's position and lifespan

    // Update positions in the buffer geometry
    positions[i * 3] = particle.position.x;
    positions[i * 3 + 1] = particle.position.y;
    positions[i * 3 + 2] = particle.position.z;

    colors[i * 3] = particle.cr;
    colors[i * 3 + 1] = particle.cg;
    colors[i * 3 + 2] = particle.cb;
  });

  particleSystem.geometry.attributes.position.needsUpdate = true;
  particleSystem.geometry.attributes.color.needsUpdate = true;
}

function update() {
  if (botHeadMixer) {
    botHeadMixer.update(deltaTime);
  }

  UpdateBotHeadCursorEyesMeshLine();

  const lagFactor = 0.05; // Adjust this value for more or less lag

  // Compute the target quaternion for looking at the camera's position
  const targetQuaternion = new THREE.Quaternion();
  const currentQuat = new THREE.Quaternion();

  if (botHead) {
    // Clone the camera position and zero out the Y-axis for restricted rotation
    const targetPosition = mainCamera.position.clone();
    targetPosition.y = botHead.position.y;

    currentQuat.copy(botHead.quaternion);
    botHead.lookAt(targetPosition);
    targetQuaternion.copy(botHead.quaternion);

    // Smoothly interpolate the object's current quaternion towards the target quaternion
    botHead.quaternion.copy(currentQuat);
    botHead.quaternion.slerp(targetQuaternion, lagFactor);
  }

  if (botHeadCursor) {
    // Define a plane or objects where you want to project the ray
    const planeZ = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const targetPosition = new THREE.Vector3();

    // Intersect the ray with the plane to get the 3D world position
    raycaster.ray.intersectPlane(planeZ, targetPosition);

    // Clone the camera position and zero out the Y-axis for restricted rotation
    targetPosition.y = botHeadCursor.position.y;

    currentQuat.copy(botHeadCursor.quaternion);
    botHeadCursor.lookAt(targetPosition);
    targetQuaternion.copy(botHeadCursor.quaternion);

    // Smoothly interpolate the object's current quaternion towards the target quaternion
    botHeadCursor.quaternion.copy(currentQuat);
    botHeadCursor.quaternion.slerp(targetQuaternion, lagFactor);
  }

  if (bGoingToComputer) {
    // Define where to position the mainCamera to focus nicely on the target
    mainCamera.position.lerp(cameraComputerLocation, 0.05); // Smoothly interpolate the position

    // Create a temporary mainCamera to calculate target quaternion
    const tempCamera = mainCamera.clone();
    tempCamera.lookAt(cameraComputerLookLocation);

    // Smoothly interpolate the mainCamera rotation
    mainCamera.quaternion.slerp(tempCamera.quaternion, 0.05);

    const l = Math.abs(
      new THREE.Vector3()
        .subVectors(cameraComputerLocation, mainCamera.position)
        .length()
    );
    if (l < 0.01) {
      bGoingToComputer = false;
      bViewingComputer = true;

      camControls.target.copy(cameraComputerLookLocation);
      camControls.saveState();
      camControls.reset();

      const elementWithClass = document.querySelector("div#wrapper");
      if (elementWithClass) {
        elementWithClass.style.display = "";
      }
    }
  }

  if (bReturnToScene) {
    mainCamera.position.lerp(camPrevLocation, 0.05); // Smoothly interpolate the position
    mainCamera.quaternion.slerp(camPrevRotation, 0.05);

    const l = Math.abs(
      new THREE.Vector3()
        .subVectors(camPrevLocation, mainCamera.position)
        .length()
    );
    if (l < 0.01) {
      bReturnToScene = false;
      bViewingComputer = false;

      camControls.target.set(0, 0, 0);
      camControls.saveState();
      camControls.reset();
    }
  }

  camControls.enabled =
    !bViewingComputer && !bGoingToComputer && !bReturnToScene;

  // Update controls
  if (camControls.enabled) {
    camControls.update();
  }

  if (particleSystem) {
    updateParticles();
  }

  // Render
  stats.update();

  if (spaceStationSceneMixer) {
    spaceStationSceneMixer.update(deltaTime);
  }
}
function render() {
  stats.begin();
  gAppCanvas.Renderer.clear();
  btnComposer.render();
  gAppCanvas.Renderer.clearDepth();
  gAppCanvas.Renderer.render(mainScene, mainCamera);
  gAppCanvas.Renderer.render(particlesScene, mainCamera);
  stats.end();
}

async function preLoadAnimate() {
  deltaTime = clock.getDelta();

  if (bAssetsLoadCompleted == false) {
    if (lineGenerator) {
      lineGenerator.update();
    }

    gAppCanvas.Renderer.clear();
    gAppCanvas.Renderer.render(loadingScene, loadingCamera);

    // Call animate again on the next frame
    window.requestAnimationFrame(() => preLoadAnimate());
  }
}
function animate() {
  deltaTime = clock.getDelta();

  update();
  render();

  // Call animate again on the next frame
  window.requestAnimationFrame(() => animate());
}

class MainEntry {
  constructor() {
    this.OnAppStart();
  }

  async OnAppStart() {
    // Initialize the template
    initMeshes();

    initLoadScreen();
    initScenes();
    initCamera();
    initLights();
    initControls();
    addEventListeners();
    initBtnComposer();
    initMainComposer();

    await initParticles();

    document.body.appendChild(stats.domElement);

    if (gAppCanvas.Renderer) {
      gAppCanvas.Renderer.domElement.addEventListener(
        "touchmove",
        function (event) {
          event.preventDefault();
          // Calculate touch position in normalized device coordinates
          mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
          // Update the raycaster with the touch position
          raycaster.setFromCamera(mouse, mainCamera);
          OnMouseMove(false);
        }
      );
      gAppCanvas.Renderer.domElement.addEventListener(
        "touchstart",
        function (event) {
          event.preventDefault();
          // Calculate touch position in normalized device coordinates
          mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
          // Update the raycaster with the touch position
          raycaster.setFromCamera(mouse, mainCamera);
          OnMouseMove(false);
          OnMouseDown();
        }
      );
      gAppCanvas.Renderer.domElement.addEventListener(
        "touchend",
        function (event) {
          event.preventDefault();

          cIntersectedObject = null;
          OnMouseUp();
        }
      );
      gAppCanvas.Renderer.domElement.addEventListener(
        "touchcancel",
        function (event) {
          event.preventDefault();

          cIntersectedObject = null;
          OnMouseUp();
        }
      );
    }

    preLoadAnimate();
  }
}

new MainEntry();
