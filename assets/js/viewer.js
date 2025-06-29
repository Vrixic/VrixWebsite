import '../css/main.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js'

import Stats from 'three/addons/libs/stats.module.js'

import AppCanvas from './graphics/AppCanvas.js'

var gltfLoader, loadingManager

/**
 * @type {THREE.OrbitControls}
 */
var camControls
/**
 * @type {THREE.RenderPass}
 */
var mainSceneRP
/**
 * @type {THREE.EffectComposer}
 */
var mainComposer
/**
 * @type {THREE.FXAAShader}
 */
var mainComposerFxaa
/**
 * @type {THREE.Scene}
 */
var mainScene
/**
 * @type {THREE.Clock}
 */
var clock
/**
 * @type {THREE.Camera}
 */
var mainCamera

var canvas = document.querySelector('canvas.webgl')
/**
 * @type {AppCanvas}
 */
var gAppCanvas = new AppCanvas(canvas)

// Create a Raycaster
const mouse = new THREE.Vector2() // Normalized mouse coordinates

const stats = new Stats()

const sceneScale = 1

var deltaTime = 0.0

/**
 * @type {HTMLDivElement}
 */
var loadingScreen

var bAssetsLoadCompleted = false

const STATIC_PROPS = {
  transformLineMethod: p => p * 1.5
}

function initMeshes () {
  // Loading Manager
  loadingManager = new THREE.LoadingManager()

  // Remove the loading screen when all assets are loaded
  loadingManager.onLoad = () => {
    OnAssetLoadCompleted()
  }

  gltfLoader = new GLTFLoader(loadingManager)
  gltfLoader
    .loadAsync('assets/models/gltf/cyberpunk_micro-apartments/scene.gltf')
    .then(function (gltf) {
      mainScene.add(gltf.scene)
    })
}

function OnAssetLoadCompleted () {
  setTimeout(() => {
    bAssetsLoadCompleted = true
    loadingScreen.style.opacity = '0'
    setTimeout(() => { document.body.removeChild(loadingScreen); });

    const card = document.createElement('div')
    card.innerHTML = getCardHtml('Meta', 'Performance Technical Artist V', 'MAR 2025', '')
    card.style.transition = 'opacity 0.5s ease'
    // Append to the DOM
    document.body.appendChild(card)

    setTimeout(() => {
      loadingScreen.style.display = 'none'
      animate()
    }, 500)
  }, 1500)
}

async function initLoadScreen () {
  // Loading Screen HTML and CSS setup
  loadingScreen = document.createElement('div')

  // Insert your HTML into it
  loadingScreen.innerHTML = getLoadingScreenHtml()

  // Apply full-screen overlay styles
  loadingScreen.style.position = 'fixed'
  loadingScreen.style.width = '100%'
  loadingScreen.style.height = '100%'
  loadingScreen.style.backgroundColor = 'rgba(0, 0, 0, 1)'
  loadingScreen.style.display = 'flex'
  loadingScreen.style.justifyContent = 'center'
  loadingScreen.style.alignItems = 'center'
  loadingScreen.style.opacity = '0'
  loadingScreen.style.transition = 'opacity 0.5s ease'

  // Append to the DOM
  document.body.appendChild(loadingScreen)

  const width = loadingScreen.offsetWidth
  const height = loadingScreen.offsetHeight

  // Set font size as a percentage of width or height
  const fontSize = Math.min(width, height) * 0.075 // Adjust the multiplier as needed
  loadingScreen.style.fontSize = `${fontSize}px`

  // Trigger the fade-in effect after appending
  setTimeout(() => {
    loadingScreen.style.opacity = '1'
  }, 100) // Small delay to ensure the transition applies

  preLoadAnimate()
}

function initMainComposer () {
  mainComposer = new EffectComposer(gAppCanvas.Renderer)
  mainSceneRP = new RenderPass(mainScene, mainCamera)
  mainComposerFxaa = new ShaderPass(FXAAShader)
  const op = new OutputPass()

  mainComposerFxaa.material.uniforms['resolution'].value.set(
    window.innerWidth,
    window.innerHeight
  )

  mainComposer.addPass(mainSceneRP)
  mainComposer.addPass(mainComposerFxaa)
  mainComposer.addPass(op)

  mainComposer.renderToScreen = true
  //mainSceneRP.autoClear = false;
}

function initScenes () {
  mainScene = new THREE.Scene()
  mainScene.scale.set(sceneScale, sceneScale, sceneScale)

  clock = new THREE.Clock()
}

function initCamera () {
  mainCamera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    500
  )

  mainCamera.position.x = 8
  mainCamera.position.y = 5
  mainCamera.position.z = 0
  mainCamera.lookAt(0, 0, 0)
}

function initLights () {
  const ambientLight = new THREE.AmbientLight(0xffffff)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)

  const pl0 = new THREE.PointLight(
    0xff0000,
    250000 * sceneScale,
    1000000 * sceneScale
  )
  pl0.position.y = -5

  mainScene.add(ambientLight, directionalLight)
}

function initControls () {
  camControls = new OrbitControls(mainCamera, canvas)
  camControls.enableDamping = true
  camControls.maxDistance = 40
  camControls.minPolarAngle = Math.PI * 0.25 // minimum angle in radians (0 is directly above)
  camControls.maxPolarAngle = Math.PI * 0.49 // maximum angle in radians (PI is directly below)
  camControls.enablePan = false
  camControls.rotateSpeed = 0.5
  camControls.zoomSpeed = 0.5
}

function addEventListeners () {
  window.addEventListener('resize', () => onResize())
}

function onResize () {
  mainCamera.aspect = window.innerWidth / window.innerHeight
  mainCamera.updateProjectionMatrix()

  gAppCanvas.OnResize()

  if (mainComposerFxaa) {
    mainComposerFxaa.material.uniforms['resolution'].value.set(
      window.innerWidth,
      window.innerHeight
    )
  }
}

window.addEventListener('mousemove', event => {
  // Convert mouse position to normalized device coordinates (-1 to +1)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

  // Update the raycaster with the mainCamera and mouse position
  // raycaster.setFromCamera(mouse, mainCamera)
})
window.addEventListener('mousedown', () => {})
window.addEventListener('mouseup', () => {})

function update () {
  // Update controls
  if (camControls.enabled) {
    camControls.update()
    mainCamera.position.y +=
      Math.sin(clock.getElapsedTime()) * deltaTime * 0.125
  }

  // Render
  stats.update()
}
function render () {
  stats.begin()
  gAppCanvas.Renderer.clear()
  gAppCanvas.Renderer.render(mainScene, mainCamera)
  stats.end()
}

async function preLoadAnimate () {
  if (!bAssetsLoadCompleted) {
    // Call animate again on the next frame
    window.requestAnimationFrame(() => preLoadAnimate())
  }
}
function animate () {
  deltaTime = clock.getDelta()

  update()
  render()

  // Call animate again on the next frame
  window.requestAnimationFrame(() => animate())
}

class MainEntry {
  constructor () {
    this.OnAppStart()
  }

  async OnAppStart () {
    // Initialize the template
    initMeshes()
    await initLoadScreen()
    initScenes()
    initCamera()
    initLights()
    initControls()
    addEventListeners()
    initMainComposer()

    document.body.appendChild(stats.domElement)
  }
}

function getLoadingScreenHtml()
{
  return `<!-- From Uiverse.io by BlackisPlay --> 
<div id="ghost">
  <div id="red">
    <div id="pupil"></div>
    <div id="pupil1"></div>
    <div id="eye"></div>
    <div id="eye1"></div>
    <div id="top0"></div>
    <div id="top1"></div>
    <div id="top2"></div>
    <div id="top3"></div>
    <div id="top4"></div>
    <div id="st0"></div>
    <div id="st1"></div>
    <div id="st2"></div>
    <div id="st3"></div>
    <div id="st4"></div>
    <div id="st5"></div>
    <div id="an1"></div>
    <div id="an2"></div>
    <div id="an3"></div>
    <div id="an4"></div>
    <div id="an5"></div>
    <div id="an6"></div>
    <div id="an7"></div>
    <div id="an8"></div>
    <div id="an9"></div>
    <div id="an10"></div>
    <div id="an11"></div>
    <div id="an12"></div>
    <div id="an13"></div>
    <div id="an14"></div>
    <div id="an15"></div>
    <div id="an16"></div>
    <div id="an17"></div>
    <div id="an18"></div>
  </div>
  <div id="shadow"></div>
</div>
`;
}

function getCardHtml(company, role, start, end)
{
  return `<div class="wrapper">
      <div class="container">
        <div class="box">
          <span class="title">${company}</span>
          <div>
            <strong>${role}</strong>
            <p>${start} - ${end}</p>
            <span></span> <span></span>
          </div>
        </div>
      </div>
    </div>`
}

new MainEntry()
