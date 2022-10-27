import { GameDos } from "./gameDos";
import Phaser from "phaser";
import{GameOver} from "./gameOver";
import{Win} from "./win";


function App(){
  var config = {
    type: Phaser.AUTO,
    width: 650,
    height: 692,
    scene:[GameDos,GameOver,Win],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
  }

var game = new Phaser.Game(config);

}
export default App;