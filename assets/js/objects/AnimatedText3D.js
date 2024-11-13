import { Object3D, ShapeGeometry, MeshBasicMaterial, Mesh } from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TimelineLite, Back } from "gsap";

export default class AnimatedText3D extends Object3D {
  constructor(
    text,
    font,
    {
      size = 0.8,
      letterSpacing = 0.03,
      clr = 0xffffff,
      duration = 0.6,
      opacity = 1,
      wireframe = false,
    } = {}
  ) {
    super();

    this.basePosition = 0;
    this.size = size;

    this.basePositions = [];

    const letters = [...text];
    letters.forEach((letter) => {
      if (letter === " ") {
        this.basePosition += size * 0.5;
      } else {
        const geom = new ShapeGeometry(font.generateShapes(letter, size, 1));
        geom.computeBoundingBox();
        const mat = new MeshBasicMaterial({
          color: clr,
          opacity: 0,
          transparent: true,
          wireframe,
          wireframeLinewidth: 0.1,
        });
        const mesh = new Mesh(geom, mat);

        mesh.position.x = this.basePosition;
        this.basePositions.push(this.basePosition);
        this.basePosition += geom.boundingBox.max.x + letterSpacing;
        this.add(mesh);
      }
    });

    // Timeline
    this.tm = new TimelineLite({ paused: true });
    this.tm.set({}, {}, `+=${duration * 1.1}`);
    this.children.forEach((letter, idx) => {
      const data = {
        opacity: 0,
        position: -0.5,
        index: idx,
        color: "rgba(0,0,0,1)",
        colorRate: Math.random(0.15, 0.25),
      };
      this.tm.to(
        data,
        duration,
        {
          opacity,
          position: 0 + this.basePositions[data.index] - 0.03 * data.index,
          ease: Back.easeOut.config(3),
          onUpdate: () => {
            letter.material.opacity = data.opacity;
            letter.position.x =
              data.position + data.index * letterSpacing * -0.0125;

            letter.material.color.b = Math.cos(duration * data.index);
            letter.material.color.r = Math.sin(
              duration * data.index * Math.random(4, 8)
            );
            letter.material.color.g = Math.sin(
              duration * data.index * Math.random(2, 4)
            );
          },
        },
        `-=${duration - 0.03}`
      );
    });

    // Bind
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    this.tm.play();
  }

  hide() {
    this.tm.reverse();
  }
}
