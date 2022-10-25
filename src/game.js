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
    }
    create(){
    //agrega colisiones a los bordes del juego
        this.physics.world.setBoundsCollision(true,true,true,false);
        
    //agrego al jugador y le agrego fisicas y algunas caracteristicas
        this.add.image(325,346,'background');
        this.player =this.physics.add.image(325,650,'player').setImmovable();
        this.player.body.allowGravity = false;

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

        this.cursors = this.input.keyboard.createCursorKeys();
    }
    update(){
        if(this.cursors.left.isDown){
            this.player.setVelocityX(-300);
        }
        else if(this.cursors.right.isDown){
            this.player.setVelocityX(300);
        }
        else{
            this.player.setVelocityX(0);
        }

    }
}
