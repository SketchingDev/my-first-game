import Phaser from "phaser";
import { Demo } from "./scenes/Demo";
//import { GameManager } from "./scenes/GameManager";
import { Preloader } from "./scenes/Preloader";
import { HUD } from "./scenes/HUD";
import { GameManager } from "./scenes/GameManager";
// import { GameManager } from "./scenes/GameManager";
// import { GameManager } from "./scenes/GameManager";
// import { HUD } from "./scenes/HUD";
// console.log([Preloader, Demo, GameManager, HUD]);

class PhaserGame extends Phaser.Game {
  constructor() {
    const config = {
      type: Phaser.AUTO,
      parent: 'game-container',
      backgroundColor: '#125555',
      width: 800,
      height: 600,
      physics: {
        default: 'matter',
        matter: {
          enableSleeping: true,
          debug: true,
          debugBodyColor: 0xffffff
        }
      },
      scene: [Preloader, Demo, GameManager, HUD]
    };
    super(config);
  }
}

new PhaserGame();
