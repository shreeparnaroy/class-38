class Game {
  constructor(){}

//read the gameState from database - ref() , on("value",function())
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val(); //.val() reading the value
    })
  }

//write - to databased ==> ref() and set() or update()
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

//if gameState is 0 them game is in WAIT state create player object and form object 
//.once is like .on
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      //"in" will help us travel throgh all the elments of thr array
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
car1=createSprite(100,200)
car2=createSprite(300,200)
car3=createSprite(500,200)
car4=createSprite(700,200)
cars=[car1,car2,car3,car4]
  }
          
  play(){
    form.hide();
    
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      //index of the array
      //x and y position of the cars
      var x=0,index=0,y;
      for(var plr in allPlayers){
         index=index+1;
         x=x+200
         y=displayHeight - allPlayers[plr].distance;
         cars[index-1].x =x;
         cars[index-1].y = y;
        if (plr === "player" + player.index){
          //fill("red")
          cars[index-1].shapeColor="red"
          camera.position.x=displayWidth/2
          camera.position.y=cars[index-1].y
        } 
      }
    }
    //to make players go forward
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
drawSprites()
  }
}
