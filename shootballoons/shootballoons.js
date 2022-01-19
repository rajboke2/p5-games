//Canvas
let canvasW=600;
let canvasH=400;

// Gun
let gunX=canvasW/2;
let gunY=canvasH;

let bstep = 0;
var gameEnd;
var score;
DownMovingObjects.objectStep = 1;

function trackObjects(){
  //Remove balloons which are bursted
  for(let i=0;i<movingObj.randomObjectsArray.length;i++){
    if(movingObj.randomObjectsArray[i].liveStatus === 0){
      movingObj.randomObjectsArray.splice(i,1);
      movingObj.createRandomObject();
    }
  }
  // Remove bullets which are missed
  for(let i1=0;i1<gunObj.bulletArray.length;i1++){
    if(gunObj.bulletArray[i1].bY < 0){
      gunObj.bulletArray.splice(i1,1);
    }
  }
  // Burst balloon if bullet hits the balloon
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
        movingObj.randomObjectsArray[j].balloonW+10;
        objectMaxWidth=objectX+
        movingObj.randomObjectsArray[j].balloonW-10;
      }
      if(gunObj.bulletArray[i].bX >= objectMinWidth && 
       gunObj.bulletArray[i].bX <= objectMaxWidth){
        if(gunObj.bulletArray[i].bY<=objectY){
          movingObj.randomObjectsArray[j].burst=10;
          bulletHitted.push(i);
          if(movingObj.randomObjectsArray[j].balloonW > 70){
           score+=20;
         }else if(movingObj.randomObjectsArray[j].balloonH > 80){
           score+=20;
         }else{
           score+=10;  
         }
       }
     }
   }
 }
// Remove bullets which hitted a balloon
for(let j1=0;j1<bulletHitted.length;j1++){
  gunObj.bulletArray.splice(j1,1);
}
// End game when balloon reaches to gun
let objY = '';
for(let j1=0;j1<movingObj.randomObjectsArray.length;j1++){
  if (movingObj.randomObjectsArray[j1].type === 'balloon'){
    objY = movingObj.randomObjectsArray[j1].balloonY
  }
  if(objY >= canvasH-30){
    gameEnd=1;
  }
}
}

function displayScore() {
  textSize(20);
  fill('black');
  noStroke();
  text("Score: "+score,10,30);
  if(gameEnd === 1){
   gunObj.bulletArray=[];
   DownMovingObjects.objectStep=0;
   textSize(30);
   fill('black');
   noStroke();
   text("Game End",canvasW/2-60, canvasH/2);
 }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    gunObj.shoot(1);
  }
}

function mousePressed() {
  setup();
}

function setup() {
  gameEnd = 0;
  score = 0;
  DownMovingObjects.objectStep=1;
  cnv = createCanvas(canvasW, canvasH);
  cnv.position(windowWidth/2-canvasW/2,100);
  gunObj = new Gun(gunX,gunY);
  movingObj=new DownMovingObjects(canvasW, canvasH);
  for(let i=0;i<=2;i++){
   movingObj.createRandomObject();
 }
 Cloud.cloudArray = [];
 for(let i=0;i<4;i++){
   cloudObj = new Cloud(i*floor(random(130, 200)), 50, floor(random(55, 65)), floor(random(45, 55)));
   Cloud.addToCloudArray(cloudObj);
 }
}

function draw() {
  background(135,206,235);
  Cloud.showCloudArray();
  movingObj.show();
  gunObj.moveX(7);
  gunObj.show();
  trackObjects();
  displayScore();
}