import Phaser from "phaser";
import { SCENES } from "../constants/scenes";
import * as Matter from "matter";
// import Bodies = MatterJS.Bodies;

export class Demo extends Phaser.Scene {
  constructor() {
    super(SCENES.DEMO);
  }

  protected init() {
    console.error("Demo.create");

    this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, false, true);

    this.matter.add.rectangle(300, 300, 200, 100, {
      isStatic: true, ignoreGravity: true, onCollideCallback: (pair: Matter.IPair) => {
        // pair.
        console.error(pair.bodyA);
      }
    });

    // const rectangle = this.matter.bodies.rectangle(0, 0, 120, 80, { friction: 1, restitution: 0.25 });
    // this.matter.world.add(rectangle);

    this.time.addEvent({
      delay: 500,
      loop: true,
      callbackScope: this,
      callback: () => {
        // const ball = this.matter.add.image(Phaser.Math.Between(0, this.gameWidth), 0, 'ball');
        // const gameWidth = this.game.config.width as number;
        this.matter.add.image(Phaser.Math.Between(0, 800), 0, "ball");

        // ball.setCircle();
        // ball.setFriction(0.005);
        // ball.setBounce(1);
      }
    });
    this.createHouses();
  }

  private createHouses() {
    // this.matter.add.rectangle(300, 300, 200, 100);
    //{
    // isStatic: true,
    // ignoreGravity: true,
    // render: {
    //   fillColor: 0xFF000,
    //   fillOpacity: 0,
    //   visible:true
    // }
    // }
    // );
    //.image(Phaser.Math.Between(0, 800), 0, 'ball');
    // this.matter.add.image(Phaser.Math.Between(0, 800), 0, 'ball');
  }
}
