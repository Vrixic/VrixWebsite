import { WebGLRenderer } from "three";
export default class AppCanvas {
  /**
   * @type {THREE.Renderer}
   */
  Renderer;
  constructor(canvas) {
    this.Renderer = new WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    this.Renderer.setClearColor(0x000000);
    this.Renderer.autoClear = false;

    this.OnResize();
  }

  OnResize()
  {
    this.Renderer.setSize(window.innerWidth, window.innerHeight);
    this.Renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
}
