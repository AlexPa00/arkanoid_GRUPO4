import Phaser from "phaser";
import { RestartButton } from "./components/restart-button";
export class Win extends Phaser.Scene{
    constructor(){
        super({key:"win"});
        this.restartButton=new RestartButton(this);   
    }

    preload(){
        this.load.image("winn","images/winn.png");
         this.load.image('backgroundW','images/FondoWin.png');
        this.restartButton.preload();
    }

    create(){
        this.add.image(325,344,"backgroundW");
       this.restartButton.create();
        this.winImage=this.add.image(330,350,"winn");
    }
}