import { Game } from "./game";
import Phaser from "phaser";
import{GameOver} from "./gameOver";
import{Win} from "./win";


function App(){
  var config = {
    type: Phaser.AUTO,
    width: 650,
    height: 692,
    scene:[Game,GameOver,Win],
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