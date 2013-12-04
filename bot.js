//===========================
//	Handmade Bot
//===========================

Breakout.bot = {
    initialize: function(game, cfg) {
	this.game = game;
	this.cfg  = cfg;
    },
    
    update:function(){
	var paddleX = this.game.paddle.getX();
	var ballX = this.game.ball.getX();
        var ballY = this.game.ball.getY();
	var b = this.game.court.getBricks();
	var v = this.game.ball.getVelocity();        
        if(this.game.ball.moving){
	    var p = Math.random();
	    if(p < .99){
                if(ballX+8 > paddleX+11){
                    this.game.paddle.stopMovingLeft();
                    this.game.paddle.moveRight();
                }
	        else if(ballX+8 === paddleX+11){
		    this.game.paddle.stopMovingLeft();
		    this.game.paddle.stopMovingRight();
		}
                else{
                    this.game.paddle.stopMovingRight();
                    this.game.paddle.moveLeft();
                }
            }
        }
    },
    hit:function(){},
    winLevel: function(){},
    loseBall: function() {}

}
