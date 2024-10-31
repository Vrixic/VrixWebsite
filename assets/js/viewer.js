import "../css/main.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

import { Reflector } from "three/examples/jsm/objects/Reflector.js";

import { RectAreaLightHelper } from "three/addons/helpers/RectAreaLightHelper.js";
import { RectAreaLightUniformsLib } from "three/addons/lights/RectAreaLightUniformsLib.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";

var gltfLoader, cyberHomeGltf, cyberHomeScene;
async function initGltfModel() {
  gltfLoader = new GLTFLoader();
  cyberHomeGltf = await gltfLoader.loadAsync(
    "assets/models/gltf/cyberpunk_micro-apartments/scene.gltf"
  );
  cyberHomeScene = cyberHomeGltf.scene;
}

class ThreeJSTemplate {
  constructor() {
    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initLights();
    this.initMesh();
    this.initControls();
    this.addEventListeners();

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));

    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);

    this.animate();

    const gui = new GUI();

    gui.open();
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();
  }

  initCamera() {
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    );

    this.camera.position.x = -10;
    this.camera.position.y = 7.5;
    this.camera.position.z = 15;
    this.camera.lookAt(0, 0, 0);

    this.scene.add(this.camera);
  }

  initRenderer() {
    this.canvas = document.querySelector("canvas.webgl");
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
    });
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000);

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  }

  initLights() {
    const ambientLight = new THREE.AmbientLight(0x2e2e2e);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

    RectAreaLightUniformsLib.init();

    // this.rectLight1 = new THREE.RectAreaLight(0xff00ff, 20, 1, 7);
    // this.rectLight1.position.set(-3.75, -0.75, -0.13);
    // this.rectLight1.rotation.x = -Math.PI * 0.5;
    // this.rectLight1.rotation.y = Math.PI * 0.5;
    // //this.scene.add(this.rectLight1);

    // this.rectLight2 = new THREE.RectAreaLight(0xffffff, 20, 1, 9.1);
    // this.rectLight2.position.set(0.9, -0.75, 3.36);
    // this.rectLight2.rotation.z = Math.PI * 0.5;
    // this.rectLight2.rotation.y = Math.PI;
    // //this.scene.add(this.rectLight2);

    // this.rectLight3 = new THREE.RectAreaLight(0xffffff, 10, 1, 8.65);
    // this.rectLight3.position.set(5.555, -0.75, -0.95);
    // this.rectLight3.rotation.x = -Math.PI * 0.5;
    // this.rectLight3.rotation.y = -Math.PI * 0.5;
    //this.scene.add(this.rectLight3);

    //this.scene.add( new RectAreaLightHelper( rectLight1 ) );
    //this.scene.add(new RectAreaLightHelper(this.rectLight2));
    //this.scene.add(new RectAreaLightHelper(this.rectLight3));

    const pl0 = new THREE.PointLight(0x11ffff, 100, 10000);
    pl0.position.y = 1;

    this.scene.add(ambientLight, pl0);
  }

  async initMesh() {
    await initGltfModel();
    cyberHomeScene.castShadow = true;
    this.scene.add(cyberHomeScene);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(
      "assets/models/gltf/cyberpunk_micro-apartments/textures/painted_concrete_02_diff_1k.jpg",
      () => {
        console.log("Texture loaded");
      }
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

    this.scene.add(this.mirror);

    const material0 = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x000000),
      map: texture,
      opacity: 0.9,
      transparent: true
    });
    this.groundPlane = new THREE.Mesh(plane, material0);
    this.groundPlane.position.y = 0.05;
    this.groundPlane.rotateX(-Math.PI / 2);
    this.scene.add(this.groundPlane);

    // const smat = new THREE.MeshStandardMaterial({ color: "#ff0000" });
    // const sg1 = new THREE.SphereGeometry(0.25, 32, 32);
    // const sm1 = new THREE.Mesh(sg1, smat);
    // sm1.position.set(5, 4.75, 3.75);
    // this.scene.add(sm1);
  }

  initControls() {
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.maxDistance = 40;
    this.controls.minPolarAngle = Math.PI * 0.25; // minimum angle in radians (0 is directly above)
    this.controls.maxPolarAngle = Math.PI * 0.425; // maximum angle in radians (PI is directly below)
  }

  addEventListeners() {
    window.addEventListener("resize", () => this.onResize());
  }

  onResize() {
    this.sizes.width = window.innerWidth;
    this.sizes.height = window.innerHeight;

    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.composer.setSize(this.sizes.width, this.sizes.height);
    this.composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  animate() {
    // Update controls
    this.controls.update();

    // Render
    this.composer.render();

    // Call animate again on the next frame
    window.requestAnimationFrame(() => this.animate());
  }
}

// Initialize the template
new ThreeJSTemplate();
