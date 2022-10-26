import Phaser from "phaser";
export class Game extends Phaser.Scene{
    constructor(){
        super({key:'game'});        
    }

    preload(){
        // realizo una precarga de las imagenes
            this.load.image('background','images/ArkanoidFondo.png');
            this.load.image('player','images/VausSpacecraftLarge.png');
            this.load.image('ball','images/EnergyBall.png');
            this.load.image('bluewall', 'images/BlueWall.png');
            this.load.image('goldwall', 'images/GoldWall.png');
            this.load.image('greenwall', 'images/GreenWall.png');
            this.load.image('lightbluewall', 'images/LightBluewall.png');
            this.load.image('orangewall', 'images/OrangeWall.png');
            this.load.image('pinkwall', 'images/PinkWall.png');
            this.load.image('redwall', 'images/RedWall.png');
            this.load.image('silverwall', 'images/SilverWall.png');
            this.load.image('whitewall', 'images/WhiteWall.png');
            this.load.image('yellowwall', 'images/YellowWall.png');
        }
    create(){
    //agrega colisiones a los bordes del juego
        this.physics.world.setBoundsCollision(true,true,true,false);
        
    //agrego al jugador y le agrego fisicas y algunas caracteristicas
        this.add.image(325,346,'background');
        this.player =this.physics.add.image(325,650,'player').setImmovable();
        this.player.body.allowGravity = false;

    

        this.bricks = this.physics.add.staticGroup({
            key: ['bluewall', 'greenwall', 'goldwall', 'whitewall','lightbluewall','orangewall','pinkwall','redwall','silverwall','yellowwall'], 
            frameQuantity: 5, // es el número de elementos para cada uno de los grupos
            gridAlign: { 
              width: 10, //anchura en columnas de la rejilla
              height: 5, //altura en filas de la rejilla
              cellWidth: 50, //tamaño de la celda de rejilla de anchura
              cellHeight: 25, //altura de la celda de la rejilla
              x: 125, //La posición del primer elemento de la rejilla, en la horizontal
              y: 100 //La posición del primer elemento de la rejilla, en la vertical
            }
          });

          
    //
        this.ball =this.physics.add.image(325,75,'ball');
        this.physics.add.collider(this.ball,this.player);
        this.ball.setBounce(1);
        this.ball.setCollideWorldBounds(true);
        
    //  
        let velocity = 100 * Phaser.Math.Between(1.3,2);
        if(Phaser.Math.Between(0,10) > 5){
            velocity = 0 - velocity; 
        }
        this.ball.setVelocity(velocity,10);

        this.physics.add.collider(this.ball, this.player, this.playerImpact,null,this);
        //colision para todo el grupo de bloques que asignamos
        this.physics.add.collider(this.ball, this.bricks, this.brickImpact, null, this);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

        brickImpact(ball, brick ) {
          brick.disableBody(true, true);

          if (this.bricks.countActive()==0){
            this.showWin();
          }
        }

    
    
    update(){
        // asigno las teclas que usare para el movimiento del jugador con una velocidad fija asignada

        if(this.cursors.left.isDown){
            this.player.setVelocityX(-300);
        }
        else if(this.cursors.right.isDown){
            this.player.setVelocityX(300);
        }
        else{
            this.player.setVelocityX(0);
        }

        if (this.ball.y>700){
            console.log("fin");
            this.showGameOver();
        }
          
     
    }  

      showWin(){
        this.scene.start("win");
      }

     showGameOver(){
        this.scene.start("gameOver");
    }

}
