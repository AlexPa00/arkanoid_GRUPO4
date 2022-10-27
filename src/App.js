import { Game } from "./game";
import{GameOver} from "./gameOver";
import{Win} from "./win";
import{Menu} from "./menu";

import Phaser from "phaser";



function App(){
  var config = {
    type: Phaser.AUTO,
    width: 650,
    height: 692,
    scene:[Menu,Game,GameOver,Win],
    
    physics: {
        default: 'arcade',
        arcade: {
            gravity:{y:400},
            debug: false
        }
    }
  }

var game = new Phaser.Game(config);




}
export default App;