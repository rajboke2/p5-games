//Canvas
canvasW=500;
canvasH=400;

// Gun
let gunX=200;
let gunW=10;
let gunH=40;
let gunY=canvasH-60;

// Bullet
let bstep = 0;
let gameEnd=0;
let score=0;
DownMovingObjects.objectStep = 1;

function trackObjects(){
  //Balloons bursting
  for(let j=0;j<movingObj.randomObjectsArray.length;j++){
    if(movingObj.randomObjectsArray[j].liveStatus === 0){
      movingObj.randomObjectsArray.splice(j,1);
      movingObj.createRandomObject();
    }
  }
  // Check if bullet hits the balloon
  bulletHitted = [];
  for(let i=0;i<gunObj.bulletArray.length;i++){
    for(let j=0;j<movingObj.randomObjectsArray.length;j++){
      let objectX='';
      let objectY='';
      let objectMinWidth=0;
      let objectMaxWidth=0;
      if(movingObj.randomObjectsArray[j].type==='balloon'){
          objectX=movingObj.randomObjectsArray[j].balloonX
          objectY=movingObj.randomObjectsArray[j].balloonY
          objectMinWidth=objectX-
            movingObj.randomObjectsArray[j].balloonW;
          objectMaxWidth=objectX+
            movingObj.randomObjectsArray[j].balloonW;
      }
      if(gunObj.bulletArray[i].bX >= objectMinWidth & 
         gunObj.bulletArray[i].bX <= objectMaxWidth){
        if(gunObj.bulletArray[i].bY<=objectY){
          movingObj.randomObjectsArray[j].burst=5;
          bulletHitted.push(i);
          score+=10;
        }
      }
    }
  // Remove bullets which are hitted
  for(let j1=0;j1<bulletHitted.length;j1++){
      gunObj.bulletArray.splice(j1,1);
  }
  // Remove bullets which are missed
  for(let i1=0;i1<gunObj.bulletArray.length;i1++){
    if(gunObj.bulletArray[i1].bY < 0){
      gunObj.bulletArray.shift()
    }
  }
  // End game when balloon reaches till gun
  let objY = '';
  for(let j1=0;j1<movingObj.randomObjectsArray.length;j1++){
    if (movingObj.randomObjectsArray[j1].type === 'balloon'){
      objY = movingObj.randomObjectsArray[j1].balloonY
    }
    if(objY >= canvasH-30){
      gunObj.bulletArray=[]
      gameEnd=1;
      DownMovingObjects.objectStep=0;
    }
  }
}
}

function displayScore() {
  textSize(20);
  fill('black');
  noStroke();
  text("Score: "+score,10,30);
  if(gameEnd === 1){
    textSize(30);
    fill('black');
    noStroke();
    text("Game End",canvasW/2-60, canvasH/2);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW & gameEnd==0) {
    gunObj.shoot();
  }
}

function setup() {
  cnv = createCanvas(canvasW, canvasH);
  cnv.position(windowWidth/2-canvasW/2,100);
  gunObj = new Gun(gunX,gunY,gunW,gunH,'rect');
  movingObj=new DownMovingObjects(canvasW, canvasH);
  for(let i=0;i<=2;i++){
   movingObj.createRandomObject(); 
  }
}

function draw() {
  background(135,206,235);
  gunObj.show();
  movingObj.show();
  trackObjects();
  displayScore();
}