import "phaser";
import { SCENES } from "../constants/scenes";

export class Demo extends Phaser.Scene {
  constructor() {
    super(SCENES.DEMO);
  }

  protected init() {
    console.error("Demo.create");
    // this.add.image(100, 100, ASSETS.IMAGES.HEART);
    // this.add.image(150, 150, ASSETS.IMAGES.HEART);
  // protected create() {

    this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, false, true);

    this.time.addEvent({
      delay: 500,
      loop: true,
      callbackScope: this,
      callback: () => {
        // const ball = this.matter.add.image(Phaser.Math.Between(0, this.gameWidth), 0, 'ball');
        // const gameWidth = this.game.config.width as number;
        this.matter.add.image(Phaser.Math.Between(0, 800), 0, 'ball');

        // ball.setCircle();
        // ball.setFriction(0.005);
        // ball.setBounce(1);
      },
    });

    // const lineCategory = this.matter.world.nextCategory();
    //
    // const sides = 4;
    // const size = 14;
    // const distance = size;
    // const stiffness = 0.1;
    // const lastPosition = new Phaser.Math.Vector2();
    // const options = {
    //     friction: 0,
    //     frictionAir: 0,
    //     restitution: 0,
    //     ignoreGravity: true,
    //     inertia: Infinity,
    //     isStatic: true,
    //     angle: 0,
    //     collisionFilter: {category: lineCategory}
    // };
    //
    // let current = null;
    // let previous = null;
    //
    // const curves = [];
    // let curve = null;
    //
    // const graphics = this.add.graphics();
    //
    // this.input.on('pointerdown', function (pointer) {
    //
    //     lastPosition.x = pointer.x;
    //     lastPosition.y = pointer.y;
    //
    //     previous = this.matter.add.polygon(pointer.x, pointer.y, sides, size, options);
    //
    //     curve = new Phaser.Curves.Spline([ pointer.x, pointer.y ]);
    //
    //     curves.push(curve);
    //
    // }, this);
    //
    // this.input.on('pointermove', function (pointer) {
    //
    //     if (pointer.isDown)
    //     {
    //         const x = pointer.x;
    //         const y = pointer.y;
    //
    //         if (Phaser.Math.Distance.Between(x, y, lastPosition.x, lastPosition.y) > distance)
    //         {
    //             options.angle = Phaser.Math.Angle.Between(x, y, lastPosition.x, lastPosition.y);
    //
    //             lastPosition.x = x;
    //             lastPosition.y = y;
    //
    //             current = this.matter.add.polygon(pointer.x, pointer.y, sides, size, options);
    //
    //             this.matter.add.constraint(previous, current, distance, stiffness);
    //
    //             previous = current;
    //
    //             curve.addPoint(x, y);
    //
    //             graphics.clear();
    //             graphics.lineStyle(size * 1.5, 0xffffff);
    //
    //             curves.forEach(function(c) {
    //                 c.draw(graphics, 64);
    //             });
    //         }
    //     }
    // }, this);
  }
}
