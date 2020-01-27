import 'phaser';
import { ASSETS } from "../constants/assets";
import { SCENES } from "../constants/scenes";

export class HUD extends Phaser.Scene {
  // private hearts: Phaser.GameObjects.Sprite[];
  // private gameManager: GameManager;

  constructor() {
    // super({key: SCENES.HUD, active: true});
    super(SCENES.HUD)
  }

  protected create() {
    console.error("HUD.create");
    this.add.image(300, 300, ASSETS.IMAGES.HEART);
    // this.scene.get(SCENES.GAME_MANAGER);
    // this.gameManager = gameManager;

    // this.gameManager.events.on(EVENTS.UPDATE_HP, () => {
    //     this.updateHearts();
    // });

    this.initHearts();
  }

  private initHearts() {
    console.log("HELLO WORLD");
    // Array(Player.MAX_HP)
    //   .fill(0)
    //   .map((_, i) => {
    //       return this.add
    //         .sprite(
    //           (i + 1) * DISTANCE_BETWEEN_HEARTS,
    //           DISTANCE_BETWEEN_HEARTS,
    //           ASSETS.IMAGES.HEART_EMPTY,
    //         )
    //         .setScrollFactor(0)
    //         .setDepth(50);
    //   });
    this.add.image(10, 10, ASSETS.IMAGES.HEART);
    // this.add
    //   .sprite(10, 10, ASSETS.IMAGES.HEART)
    //   .setScrollFactor(0)
    //   .setDepth(100);

  }
}
