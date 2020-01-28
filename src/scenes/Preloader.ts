import Phaser from "phaser";
// import { SCENES } from "../constants/scenes";
import { ASSETS } from "../constants/assets";
import { SCENES } from "../constants/scenes";

export class Preloader extends Phaser.Scene {

    // constructor() {
    //      console.error("Preloader.constructor");
    //     super({key: "abcabc", active: true});
        // super(SCENES.PRELOADER);
    // }

    protected preload() {
        console.error("Preloader.preload");
        this.loadAssets();
    }

    protected create() {
        console.error("Preloader.create");
        this.scene.launch(SCENES.DEMO);
        this.scene.launch(SCENES.GAME_MANAGER);

        // this.scene.launch(SCENES.HUD);
    }

    private loadAssets() {
        console.error("Preloader.loadAssets");
        this.load.image(ASSETS.IMAGES.HEART, 'assets/heart.png');
    }
}
