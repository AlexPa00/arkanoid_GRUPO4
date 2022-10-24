import React from "react";
import Phaser from "phaser";


function App(){
  var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
  
        }
    },
    scene: {
        preload: preload,
        create: create,
        update : update

    }
};

var game = new Phaser.Game(config);

function preload ()
{
this.load.spritesheet('snow_bros','assets/chars.png',)
}

function create ()
{

    

}
function update(){

}

}
export default App;