import "../css/main.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

var gltf, mixer, model;
async function initGltfModel() {
  gltf = await new GLTFLoader().loadAsync(
    "assets/models/gltf/cyberpunk_micro-apartments/scene.gltf"
  );

  model = gltf.scene;
  //   mixer = new THREE.AnimationMixer( model );
  //   const clip = gltf.animations[ 0 ];
  //   mixer.clipAction( clip.optimize() ).play();
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

    const params = {
      threshold: 0,
      strength: 1,
      radius: 0,
      exposure: 1,
    };

    this.renderScene = new RenderPass(this.scene, this.camera);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = params.threshold;
    bloomPass.strength = params.strength;
    bloomPass.radius = params.radius;

    const outputPass = new OutputPass();

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(this.renderScene);
    //this.composer.addPass( bloomPass );
    this.composer.addPass(outputPass);

    this.animate();
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
  }

  initLights() {
    const ambientLight = new THREE.AmbientLight(0x404040);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    const hemisphereLight = new THREE.HemisphereLight(0x7444ff, 0xff00bb, 0.5);
    const pointLight = new THREE.PointLight(0x7444ff, 1, 100);
    pointLight.position.set(0, 3, 4);

    this.scene.add(ambientLight, directionalLight, hemisphereLight, pointLight);
  }

  initMesh() {
    this.scene.add(model);
  }

  initControls() {
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
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
    const delta = this.clock.getDelta();

    // Update controls
    this.controls.update();

    // mixer.update(delta);

    // Render
    this.composer.render();

    // Call animate again on the next frame
    window.requestAnimationFrame(() => this.animate());
  }
}

await initGltfModel();
// Initialize the template
new ThreeJSTemplate();
