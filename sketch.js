var snake;
var foodX,foodY;
var score ;

function setup() {
  createCanvas(800,400);
  snake = new Snake();
  score = 0;
  foodLocation();
  frameRate(5);
}

function draw() {
  background(38, 255, 153);  
  textSize(20);
  text ("score:"+score, 400, 20 );
  snake.update();
  if(snake.eat(foodX,foodY)){
    foodLocation();
    score = score+1;  
  }
  snake.display();
  fill((219, 219, 0));
  rect(foodX,foodY,20,20); 
  snake.gameOver();   
}

function keyPressed(){     
  if(keyCode === LEFT_ARROW){
    snake.xdir = -20;
    snake.ydir = 0;
  }
  else if(keyCode === RIGHT_ARROW){
    snake.xdir = 20;
    snake.ydir = 0;
  }
  if(keyCode === UP_ARROW){
    snake.xdir = 0;
    snake.ydir = -20;
  }
  if(keyCode === DOWN_ARROW){
    snake.xdir = 0;
    snake.ydir = 20;
  }
}

function foodLocation (){       
  foodX = floor(random(0,40))*20; 
  foodY = floor(random(0,20))*20;
}



