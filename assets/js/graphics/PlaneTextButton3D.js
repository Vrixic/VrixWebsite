import { PlaneGeometry, Mesh, MeshBasicMaterial, DoubleSide } from "three";

const gPlaneGeometry = new PlaneGeometry(3, 0.75); // width, height
gPlaneGeometry.computeBoundingBox();

// Plane with a 'Text Texture'
export default class PlaneTextButton3D extends Mesh {
  constructor(texture) {
    const mat = new MeshBasicMaterial({
      color: 0xffffff,
      side: DoubleSide,
      map: texture,
      transparent: true,
    });

    super(gPlaneGeometry, mat);

    this.OnHoverStart = function (obj) {
      const scale = 1.15;
      this.scale.set(scale, scale, scale);

      if (this.OnHoverStartCallback) {
        this.OnHoverStartCallback(obj);
      }
    };
    this.OnHoverEnd = function (obj) {
      this.scale.set(1, 1, 1);

      if (this.OnHoverEndCallback) {
        this.OnHoverEndCallback(obj);
      }
    };
    
    this.OnMouseDown = function (obj) {
      const scale = 1.25;
      this.scale.set(scale, scale, scale);

      if (this.OnMouseDownCallback) {
        this.OnMouseDownCallback(obj);
      }
    };
    this.OnMouseUp = function (obj) {
      this.scale.set(1, 1, 1);

      if (this.OnMouseUpCallback) {
        this.OnMouseUpCallback(obj);
      }
    };

    this.OnHoverStartCallback = function (obj) {};
    this.OnHoverEndCallback = function (obj) {};

    this.OnMouseDownCallback = function (obj) {};
    this.OnMouseUpCallback = function (obj) {};
  }
}
