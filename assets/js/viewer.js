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

import Stats from "three/addons/libs/stats.module.js";

import { Reflector } from "three/examples/jsm/objects/Reflector.js";

import { RectAreaLightHelper } from "three/addons/helpers/RectAreaLightHelper.js";
import { RectAreaLightUniformsLib } from "three/addons/lights/RectAreaLightUniformsLib.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";

var gltfLoader, cyberHomeGltf, cyberHomeScene, cyberHomeScene2, loadingManager;
var renderer, canvas, camera;
/**
 * @type {THREE.Mesh} 
 */
var projectsButton;

const stats = new Stats();

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

class ThreeJSTemplate {
  constructor() {
    initLoadScreen();

    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initLights();
    this.initMesh();
    this.initControls();
    this.addEventListeners();

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

    renderer.autoClear = false;

    this.animate();

    // const gui = new GUI();
    // gui.open();
    document.body.appendChild(stats.dom);
  }

  initScene() {
    this.mainScene = new THREE.Scene();
    this.mirrorScene = new THREE.Scene();
    this.clock = new THREE.Clock();
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

    camera.position.x = 15;
    camera.position.y = 6;
    camera.position.z = 0.5;
    camera.lookAt(0, 0, 0);

    // Create an orthographic camera
    const aspectRatio = window.innerWidth / window.innerHeight;
    const viewSize = 2; // Size of the view (2x2)
    this.orthoCamera = new THREE.OrthographicCamera(
      (-viewSize * aspectRatio) / 2, // left
      (viewSize * aspectRatio) / 2, // right
      viewSize / 2, // top
      -viewSize / 2, // bottom
      0.1, // near plane
      100 // far plane
    );

    this.mainScene.add(camera);
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

    const pl0 = new THREE.PointLight(0x11ffff, 250, 1000);
    pl0.position.y = 1;

    this.mainScene.add(ambientLight, pl0);
  }

  async initMesh() {
    await initGltfModel();
    this.mainScene.add(cyberHomeScene);
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
    this.mainScene.add(this.groundPlane);

    const buttonMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0xff00ff),
    });
    const buttonMesh = new THREE.BoxGeometry(0.1, 0.5, 1.5);
    projectsButton = new THREE.Mesh(buttonMesh, buttonMaterial);
    projectsButton.position.x = 2.5;
    projectsButton.position.y = -0.5;
    projectsButton.rotation.z = Math.PI * 0.25;
    this.mainScene.add(projectsButton);
  }

  initControls() {
    this.controls = new OrbitControls(camera, canvas);
    this.controls.enableDamping = true;
    this.controls.maxDistance = 40;
    this.controls.minPolarAngle = Math.PI * 0.25; // minimum angle in radians (0 is directly above)
    this.controls.maxPolarAngle = Math.PI * 0.49; // maximum angle in radians (PI is directly below)
    this.controls.enablePan = false;
    this.controls.rotateSpeed = 0.25;
    this.controls.zoomSpeed = 0.25;
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

    this.hBlur.uniforms.h.value = (1 / window.innerWidth) * 2;
    this.vBlur.uniforms.v.value = (1 / window.innerHeight) * 2;
  }

  animate() {
    // Update controls
    this.controls.update();

    const cForwardVector = new THREE.Vector3();
    camera.getWorldDirection(cForwardVector);
    if (projectsButton != null) {
      if (cForwardVector.dot(new THREE.Vector3(1, 0, 0)) <= 0) {
        projectsButton.visible = true;
      } else {
        projectsButton.visible = false;
      }
    }

    // Render
    stats.update();

    stats.begin();
    renderer.clear();
    //this.mirrorComposer.render();
    //renderer.clearDepth();
    renderer.render(this.mainScene, camera);
    stats.end();
    // Call animate again on the next frame
    window.requestAnimationFrame(() => this.animate());
  }
}

// Initialize the template
new ThreeJSTemplate();
