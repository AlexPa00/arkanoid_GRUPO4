import { Game } from "./game";
import Phaser from "phaser";


function App(){
  var config = {
    type: Phaser.AUTO,
    width: 650,
    height: 692,
    scene:[Game],
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