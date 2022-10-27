import Phaser from "phaser";
import { RestartButton } from "./components/restart-button.js";
export class GameOver extends Phaser.Scene{
    constructor(){
        super({key:"gameOver"});
        this.restartButton= new RestartButton(this);      
    }

    preload(){
        this.load.image("gameOver","images/game-over.png");
        this.restartButton.preload();
    }

    create(){
        this.add.image(325,344,"background");
       this.restartButton.create();
        this.gameOverImage=this.add.image(330,315,"gameOver");
    }
}