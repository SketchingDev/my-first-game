import Phaser from "phaser";
import { SCENES } from "../constants/scenes";
import * as Matter from "matter";

// import Bodies = MatterJS.Bodies;

export class Demo extends Phaser.Scene {

  public floatingRectangle: Matter.BodyType;
  private fallingBlocks: Matter.BodyType[] = [];

  constructor() {
    super(SCENES.DEMO);
  }

  protected init() {
    console.error("Demo.create");

    this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, false, true);

    this.floatingRectangle = this.matter.add.rectangle(300, 300, 200, 100, {
      isStatic: true, ignoreGravity: true,
      angle: 0.60, onCollideCallback: (pair: Matter.IPair) => {
        const fallingBlock = (this.floatingRectangle !== pair.bodyA) ? pair.bodyA : pair.bodyB;

        if (this.fallingBlocks.some(v => v === fallingBlock)) {
          const fallingBlockBody = fallingBlock as Matter.BodyType; // The type is wrong here
          this.matter.world.remove(fallingBlockBody);
          const x = fallingBlockBody.position.x - 20;
          const y = fallingBlockBody.position.y - 20;


          this.matter.add.stack(x, y, 4, 4, 1, 1,
            (x, y) => this.matter.bodies.rectangle(x, y, 10, 10)
          );
        }
      }
    });


    // const rectangle = this.matter.bodies.rectangle(0, 0, 120, 80, { friction: 1, restitution: 0.25 });
    // this.matter.world.add(rectangle);
    // let ballCounter = 0;
    this.time.addEvent({
      delay: 500,
      loop: true,
      callbackScope: this,
      callback: () => {
        // ballCounter++;
        // const ball = this.matter.add.image(Phaser.Math.Between(0, this.gameWidth), 0, 'ball');
        // const gameWidth = this.game.config.width as number;


        const rect = this.matter.add.rectangle(Phaser.Math.Between(0, 800), 0, 40, 40);
        this.fallingBlocks.push(rect);

        // this.matter.add.image(Phaser.Math.Between(0, 800), 0, ASSETS.IMAGES.HEART);//`ball-${ballCounter}`);

        // ball.setCircle();
        // ball.setFriction(0.005);
        // ball.setBounce(1);
      }
    });
    this.createHouses();
  }

  private createHouses() {
    // this.matter.add.rectangle(300, 300, 200, 100,
    //   {
    //     isStatic: true,
    //     ignoreGravity: true,
    //     render: {
    //       fillColor: 0xFF000,
    //       fillOpacity: 0,
    //       visible: true
    //     }
    //   }
    // );
    //.image(Phaser.Math.Between(0, 800), 0, 'ball');
    // this.matter.add.image(Phaser.Math.Between(0, 800), 0, 'ball');
  }
}
