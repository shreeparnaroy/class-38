var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1,car2,car3,car4,cars

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);

  //connection
  database = firebase.database();
  
  //new game object
  game = new Game();
  game.getState();//get the gamestate from db
  game.start();
}


function draw(){
  if(playerCount === 4){ //checking
    game.update(1);//change gameState from 0 to 1
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
