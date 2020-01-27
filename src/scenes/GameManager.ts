import 'phaser';
import { SCENES } from "../constants/scenes";

export class GameManager extends Phaser.Scene {

  constructor() {
    // console.error("GameManager.constructor");
    // super({key: SCENES.GAME_MANAGER, active: true});
    super(SCENES.GAME_MANAGER);
    // super({key: SCENES.GAME_MANAGER, active: true});
  }

  // public get playerHp(): number {
    // return this.registry.get(REGISTRY_KEYS.PLAYER.HP);
  // }

  // public set playerHp(newHp: number) {
    // this.registry.set(REGISTRY_KEYS.PLAYER.HP, newHp);
    // this.events.emit(EVENTS.UPDATE_HP);
  // }

  protected create() {
    console.error("GameManager.create");
    this.scene.launch(SCENES.HUD);
  }
}
