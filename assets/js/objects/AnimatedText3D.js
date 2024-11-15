import { Object3D, ShapeGeometry, MeshBasicMaterial, Mesh } from "three";
import { TimelineLite, Back, Linear } from "gsap";

export default class AnimatedText3D extends Object3D {
  constructor(
    text,
    font,
    {
      size = 0.8,
      letterSpacing = 0.0,
      clr = "rgba(1,1,1,1)",
      duration = 0.6,
      opacity = 1,
      wireframe = false,
    } = {}
  ) {
    super();

    this.basePosition = 0;
    this.size = size;
    this.letterSpacing = letterSpacing;
    this.duration = duration;
    this.opacity = opacity;
    this.color = clr;

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
    this.setupTimeLine();

    // Bind
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  isUsable() {
    return this.tm.isActive();
  }

  setupTimeLine() {
    this.children.forEach((letter, idx) => {
      const data = {
        opacity: 0,
        position: 0,
        index: idx,
        color: this.color,
        colorRate: Math.random(0.15, 0.25),
        letterSpace: this.letterSpacing,
      };
      this.tm.to(
        data,
        this.duration,
        {
          opacity: this.opacity,
          position: 0,
          ease: Back.easeIn.config(3),
          onUpdate: () => {
            this.animationUpdate(letter, data, this.duration);
          },
        },
        `-=${this.duration - 0.03}`
      );
    });
  }

  animationUpdate(letter, data) {
    letter.material.opacity = data.opacity;
    letter.position.x = data.position + data.index * data.letterSpace * -0.0125;

    letter.material.color.r = Math.cos(this.tm.time() * 90);
    letter.material.color.b = Math.cos(this.tm.time() * 180);
    letter.material.color.g = Math.cos(this.tm.time() * 360);
  }

  show() {
    this.tm.play();
  }

  hide() {
    this.tm.reverse();
  }
}
