class Gun{
  constructor(x,y,w,h,bulletShape){
    this.gX=x;
    this.gY=y;
    this.gW=w;
    this.gH=h;
    this.bD=10;
    this.bulletShape=bulletShape;
    this.bulletArray=[];
  }
  // static gunSound = loadSound('./gunshotsound.mp3');
  show(){
    // if (song.isPlaying()) {
    //   // .isPlaying() returns a boolean
    //   song.stop();
    //   background(255, 0, 0);
    // } else {
    //   song.play();
    //   background(0, 255, 0);
    // }
    if (keyIsPressed === true) {
      if (keyCode === LEFT_ARROW) {
      this.gX-=5
      }else if (keyCode === RIGHT_ARROW) {
        this.gX+=5
      }
      if(this.gX<=0){
        this.gX=0
      }else if(this.gX+this.gW>=canvasW){
        this.gX=canvasW-this.gW
      }
    }
    //Gun
    // fill('black');
    let x1=this.gX;
    let y1=this.gY;
    let w1=this.gW;
    let h1=this.gH;
    let w2=5;
    let h2=40;
    stroke(100);
    fill(0,0,0);
    rect(x1,y1,w1,h1);
    stroke(100);
    fill(0,0,0);
    rect(x1+w1,y1+20,w2,h2);
    stroke(100);
    fill(0,0,0);
    quad(x1,y1+h1,x1+w1+w2,y1+h1,x1+w1+10,y1+h1+25,x1,y1+h1+25);
    // Bullets
    for(let i=0;i<this.bulletArray.length;i++){
      fill('red');
      noStroke();
      if(this.bulletShape === 'circle'){
        circle(this.bulletArray[i].bX, this.bulletArray[i].bY, this.bD)
      }else if(this.bulletShape === 'rect'){
        rect(this.bulletArray[i].bX, this.bulletArray[i].bY, this.bulletArray[i].bW, this.bulletArray[i].bH)
      }
      this.bulletArray[i].bY += bstep;
    }
  }
  shoot(){
    if(this.bulletShape === 'circle'){
      this.bullet={
                  bX: this.gX+(this.gW/2),
                  bY: this.gY
                }
    }else if(this.bulletShape === 'rect'){
      this.bullet={
                  bX: this.gX+(this.gW/2)/2,
                  bY: this.gY,
                  bW: 1,
                  bH: 20
                }
    }
    this.bulletArray.push(this.bullet)
    // Gun.gunSound.play();
    bstep = -10;
  }
}