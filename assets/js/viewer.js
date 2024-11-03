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
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

var gltfLoader, cyberHomeGltf, cyberHomeScene, cyberHomeScene2, loadingManager;
var renderer, canvas, camControls;
/**
 * @type {THREE.EffectComposer}
 */
var btnComposer, mainComposer;
/**
 * @type {THREE.Scene}
 */
var mainScene, btnsScene, textScene;
/**
 * @type {THREE.Mesh}
 */
var projectsButton, projectsLineText;
/**
 * @type {THREE.Clock}
 */
var clock;
/**
 * @type {THREE.Camera}
 */
var camera;

// Create a Raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(); // Normalized mouse coordinates

const stats = new Stats();

const sceneScale = 3;

var bGoingToComputer = false,
  bReturnToScene = false,
  bViewingComputer = false,
  camPrevLocation = new THREE.Vector3(),
  camPrevRotation = new THREE.Quaternion();
var camProgress = 0;

var cameraComputerLocation = new THREE.Vector3(1.5, 10.5, 1.1);
var cameraComputerLookLocation = new THREE.Vector3(0, 10.5, 1.1);

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

async function initGltfModel() {
  gltfLoader = new GLTFLoader(loadingManager);
  cyberHomeGltf = await gltfLoader.loadAsync(
    "assets/models/gltf/cyberpunk_micro-apartments/scene.gltf"
  );
  cyberHomeScene = cyberHomeGltf.scene;
  cyberHomeScene2 = deepClone(cyberHomeScene);
}

function initLoadScreen() {
  // Loading Screen HTML and CSS setup
  const loadingScreen = document.createElement("div");
  loadingScreen.style.position = "fixed";
  loadingScreen.style.width = "100%";
  loadingScreen.style.height = "100%";
  loadingScreen.style.backgroundColor = "#000";
  loadingScreen.style.display = "flex";
  loadingScreen.style.justifyContent = "center";
  loadingScreen.style.alignItems = "center";
  loadingScreen.style.color = "#fff";
  loadingScreen.style.fontSize = "24px";
  loadingScreen.innerHTML = "Loading... 0%";
  document.body.appendChild(loadingScreen);

  // Loading Manager
  loadingManager = new THREE.LoadingManager();

  // Update the loading screen as assets load
  loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
    const progress = Math.round((itemsLoaded / itemsTotal) * 100);
    loadingScreen.innerHTML = `Loading... ${progress}%`;
  };

  // Remove the loading screen when all assets are loaded
  loadingManager.onLoad = () => {
    loadingScreen.style.display = "none";
  };
}

function createTextMesh(textString, parent) {
  // Load the font and create 3D text
  const loader = new FontLoader(loadingManager);
  loader.load(
    "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
    function (font) {
      const color = 0xffffff;

      const matDark = new THREE.LineBasicMaterial({
        color: color,
        side: THREE.DoubleSide,
      });

      const matLite = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide,
      });

      const message = textString;

      const shapes = font.generateShapes(message, 0.25);

      const geometry = new THREE.ShapeGeometry(shapes);

      geometry.computeBoundingBox();

      const xMid =
        -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

      geometry.translate(xMid, 0, 0);

      // make line shape ( N.B. edge view remains visible )

      const holeShapes = [];

      for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];

        if (shape.holes && shape.holes.length > 0) {
          for (let j = 0; j < shape.holes.length; j++) {
            const hole = shape.holes[j];
            holeShapes.push(hole);
          }
        }
      }

      shapes.push.apply(shapes, holeShapes);

      const lineText = new THREE.Object3D();

      for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];

        const points = shape.getPoints();
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        geometry.translate(xMid, 0, 0);

        const lineMesh = new THREE.Line(geometry, matDark);
        lineText.add(lineMesh);
      }

      lineText.position.x += 0.1;
      lineText.position.y -= 0.125;
      lineText.rotation.y = Math.PI * 0.5;

      projectsLineText = lineText;
      parent.add(lineText);
      return lineText;
    }
  ); //end load function
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

class ThreeJSTemplate {
  constructor() {
    initLoadScreen();

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

    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initLights();
    this.initMesh();
    this.initControls();
    this.addEventListeners();
    this.initMirrorComposer();
    this.initBtnComposer();
    this.initMainComposer();

    renderer.autoClear = false;

    mainScene.scale.set(sceneScale, sceneScale, sceneScale);
    btnsScene.scale.set(sceneScale, sceneScale, sceneScale);

    this.animate();

    //   const gui = new GUI();
    //   // Parameters object to control via GUI
    //   const params = {
    //     targetObjectLookX: cameraComputerLookLocation.x,
    //     targetObjectLookY: cameraComputerLookLocation.y,
    //     targetObjectLookZ: cameraComputerLookLocation.z,
    // };

    // // Camera position controls
    //   gui.add(params, 'targetObjectLookX', -50, 50).onChange(value => cameraComputerLookLocation.x = value);
    //   gui.add(params, 'targetObjectLookY', -50, 50).onChange(value => cameraComputerLookLocation.y = value);
    //   gui.add(params, 'targetObjectLookZ', -50, 50).onChange(value => cameraComputerLookLocation.z = value);
    //   gui.open();
    //   document.body.appendChild(stats.dom);
  }

  initMirrorComposer() {
    this.mirrorComposer = new EffectComposer(renderer);

    const mirrorrp = new RenderPass(this.mirrorScene, camera);
    this.mirrorComposer.addPass(mirrorrp);

    this.hBlur = new ShaderPass(HorizontalBlurShader);
    this.vBlur = new ShaderPass(VerticalBlurShader);
    this.hBlur.uniforms.h.value = (1 / window.innerWidth) * 2;
    this.vBlur.uniforms.v.value = (1 / window.innerHeight) * 2;
    this.mirrorComposer.addPass(this.hBlur);
    this.mirrorComposer.addPass(this.vBlur);

    // Add the ShaderPass for the heat wave effect
    const glitchPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.5,
      0.2,
      0.95
    );
    this.mirrorComposer.addPass(glitchPass);

    const op0 = new OutputPass();
    this.mirrorComposer.addPass(op0);
    this.mirrorComposer.renderToScreen = true;
  }

  initBtnComposer() {
    btnComposer = new EffectComposer(renderer);
    const btnrp = new RenderPass(btnsScene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.15,
      0.4,
      0.05
    );
    const fxaaPass = new ShaderPass(FXAAShader);
    const op = new OutputPass();

    btnComposer.renderToScreen = true;
    btnComposer.addPass(btnrp);
    btnComposer.addPass(fxaaPass);
    btnComposer.addPass(bloomPass);
    btnComposer.addPass(op);
  }

  initMainComposer() {
    mainComposer = new EffectComposer(renderer);
    const mainrp = new RenderPass(mainScene, camera);
    mainrp.autoClear = false;
    const fxaaPass = new ShaderPass(FXAAShader);
    const op = new OutputPass();

    mainComposer.autoClear = false;
    mainComposer.renderToScreen = true;
    mainComposer.addPass(mainrp);
    mainComposer.addPass(fxaaPass);
    mainComposer.addPass(op);
  }

  initScene() {
    mainScene = new THREE.Scene();
    btnsScene = new THREE.Scene();
    this.mirrorScene = new THREE.Scene();
    clock = new THREE.Clock();
  }

  initCamera() {
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    camera = new THREE.PerspectiveCamera(
      75,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    );

    camera.position.x = 25;
    camera.position.y = 12.5;
    camera.position.z = 0.5;
    camera.lookAt(0, 0, 0);

    mainScene.add(camera);
    this.mirrorScene.add(camera);
  }

  initRenderer() {
    canvas = document.querySelector("canvas.webgl");
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
    });
    renderer.setSize(this.sizes.width, this.sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000);
  }

  initLights() {
    const ambientLight = new THREE.AmbientLight(0x2e2e2e);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

    RectAreaLightUniformsLib.init();

    const pl0 = new THREE.PointLight(
      0x11ffff,
      250 * sceneScale,
      1000 * sceneScale
    );
    pl0.position.y = 1;

    mainScene.add(ambientLight, pl0);
  }

  async initMesh() {
    await initGltfModel();
    mainScene.add(cyberHomeScene);
    this.mirrorScene.add(cyberHomeScene2);

    const textureLoader = new THREE.TextureLoader(loadingManager);
    const texture = textureLoader.load(
      "assets/models/gltf/cyberpunk_micro-apartments/textures/painted_concrete_02_diff_1k.jpg"
    );

    // Add Ground Plane
    const plane = new THREE.CircleGeometry(20, 128);
    this.mirror = new Reflector(plane, {
      color: new THREE.Color(0xffffff), // Color tint for the mirror
      textureWidth: window.innerWidth * 2,
      textureHeight: window.innerHeight * 2,
      clipBias: 0.003, // Small offset to reduce clipping artifacts
    });
    this.mirror.position.y = 0.04;
    this.mirror.rotateX(-Math.PI / 2);
    this.mirrorScene.add(this.mirror);

    const material0 = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xffffff),
      map: texture,
      opacity: 0.1,
      transparent: true,
    });
    this.groundPlane = new THREE.Mesh(plane, material0);
    this.groundPlane.position.y = 0.05;
    this.groundPlane.rotateX(-Math.PI / 2);
    mainScene.add(this.groundPlane);

    const buttonMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0xff00ff),
    });
    const textMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const buttonMesh = new THREE.BoxGeometry(0.1, 0.5, 1.5);
    projectsButton = new THREE.Mesh(buttonMesh, buttonMaterial);

    btnsScene.add(projectsButton);
    createTextMesh("Projects", projectsButton);

    projectsButton.position.x = 2.5;
    projectsButton.position.y = -0.5;
    projectsButton.rotation.z = Math.PI * 0.25;
  }

  initControls() {
    camControls = new OrbitControls(camera, canvas);
    camControls.enableDamping = true;
    camControls.maxDistance = 40;
    camControls.minPolarAngle = Math.PI * 0.25; // minimum angle in radians (0 is directly above)
    camControls.maxPolarAngle = Math.PI * 0.49; // maximum angle in radians (PI is directly below)
    camControls.enablePan = false;
    camControls.rotateSpeed = 0.5;
    camControls.zoomSpeed = 0.5;
  }

  addEventListeners() {
    window.addEventListener("resize", () => this.onResize());
  }

  onResize() {
    this.sizes.width = window.innerWidth;
    this.sizes.height = window.innerHeight;

    camera.aspect = this.sizes.width / this.sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(this.sizes.width, this.sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.mirrorComposer.setSize(this.sizes.width, this.sizes.height);
    this.mirrorComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    btnComposer.setSize(this.sizes.width, this.sizes.height);
    btnComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.hBlur.uniforms.h.value = (1 / window.innerWidth) * 2;
    this.vBlur.uniforms.v.value = (1 / window.innerHeight) * 2;
  }

  animate() {
    const cForwardVector = new THREE.Vector3();
    camera.getWorldDirection(cForwardVector);
    if (projectsButton != null) {
      if (cForwardVector.dot(new THREE.Vector3(1, 0, 0)) <= 0) {
        projectsButton.visible = true;
      } else {
        projectsButton.visible = false;
      }
    }

    if (bGoingToComputer) {
      // Define where to position the camera to focus nicely on the target
      camera.position.lerp(cameraComputerLocation, 0.05); // Smoothly interpolate the position

      // Create a temporary camera to calculate target quaternion
      const tempCamera = camera.clone();
      tempCamera.lookAt(cameraComputerLookLocation);

      // Smoothly interpolate the camera rotation
      camera.quaternion.slerp(tempCamera.quaternion, 0.05);

      const l = Math.abs(
        new THREE.Vector3()
          .subVectors(cameraComputerLocation, camera.position)
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
      camera.position.lerp(camPrevLocation, 0.05); // Smoothly interpolate the position
      camera.quaternion.slerp(camPrevRotation, 0.05);

      const l = Math.abs(
        new THREE.Vector3()
          .subVectors(camPrevLocation, camera.position)
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

    // Render
    stats.update();

    stats.begin();
    renderer.clear();
    //this.mirrorComposer.render();
    //renderer.clearDepth();
    btnComposer.render();
    renderer.clearDepth();
    renderer.render(mainScene, camera);
    stats.end();
    // Call animate again on the next frame
    window.requestAnimationFrame(() => this.animate());
  }
}

/**
 * @type {THREE.Object3D<THREE.Object3DEventMap>}
 */
var cIntersectedObject;
var bMouseDown, bIsHovering;

function OnHoverStart() {
  cIntersectedObject.material.color.set(0x00ffff); // Change color to pink
  cIntersectedObject.scale.x = 1.15;
  cIntersectedObject.scale.y = 1.15;
  cIntersectedObject.scale.z = 1.15;
}

function OnHoverEnd() {
  cIntersectedObject.material.color.set(0xff00ff); // Change color to pink
  camControls.rotateSpeed = 0.25;
  cIntersectedObject.scale.x = 1;
  cIntersectedObject.scale.y = 1;
  cIntersectedObject.scale.z = 1;
}

function OnMouseDown() {
  cIntersectedObject.material.color.set(0x00ff00); // Change color to pink
  camControls.rotateSpeed = 0.0;

  camPrevLocation.copy(camera.position);
  camPrevRotation.copy(camera.quaternion);
  bGoingToComputer = true;
  camProgress = 0;
}

function OnMouseUp() {
  cIntersectedObject.material.color.set(0xff00ff); // Change color to pink
  camControls.rotateSpeed = 0.25;
}
function OnMouseMove() {
  const intersected = raycaster.intersectObject(btnsScene);

  const collidableObjects = intersected.filter((intersect) => {
    return intersect.object.id == projectsButton.id;
  });

  if (collidableObjects.length > 0) {
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
    }
  } else if (cIntersectedObject != null) {
    // Hover End
    OnHoverEnd(cIntersectedObject);
    cIntersectedObject = null;
    bIsHovering = false;
  }
}
window.addEventListener("mousemove", (event) => {
  // Convert mouse position to normalized device coordinates (-1 to +1)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Update the raycaster with the camera and mouse position
  raycaster.setFromCamera(mouse, camera);
  OnMouseMove();
});
window.addEventListener("mousedown", (event) => {
  // Check if the ray intersects with the cube
  if (cIntersectedObject != null) {
    OnMouseDown();
  }
  bMouseDown = true;
});
window.addEventListener("mouseup", (event) => {
  // Check if the ray intersects with the cube
  if (cIntersectedObject != null) {
    OnMouseUp();
  }
  bMouseDown = false;
});

// function onTouch(event) {
//   event.preventDefault();
//   // Calculate touch position in normalized device coordinates
//   // mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
//   // mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
//   // // Update the raycaster with the touch position
//   // raycaster.setFromCamera(mouse, camera);
//   // OnMouseMove();
// };
// window.addEventListener("touchstart", function(event) {
//   event.preventDefault();
//   OnMouseDown();
// }, false);
window.addEventListener("click", function() {
  alert("Screen tapped or clicked!");
  cIntersectedObject = projectsButton;
  OnMouseDown();
});

// Initialize the template
new ThreeJSTemplate();
