class Gun{
  constructor(x,y){
    this.gX=x;
    this.gW=5;
    this.gH=40;
    this.gY=y-this.gH;
    this.bulletArray=[];
  }
  static bulletW = 1;
  static bulletH = 15;
  static bulletSteps = -10;
  static mulipleBulletGap = 45;
  moveX(val){
   if (keyIsPressed === true) {
    if (keyCode === LEFT_ARROW) {
      this.gX-=val
    }else if (keyCode === RIGHT_ARROW) {
      this.gX+=val
    }
    if(this.gX<=0){
      this.gX=0
    }else if(this.gX+this.gW>=canvasW){
      this.gX=canvasW-this.gW
    }
  }
}
show(){
    //Gun
    stroke(100);
    fill(0,0,0);
    rect(this.gX,this.gY,this.gW,this.gH);
    rect(this.gX+this.gW,this.gY,this.gW,this.gH);
    // Bullets
    for(let i=0;i<this.bulletArray.length;i++){
      noStroke();
      fill('red');
      rect(this.bulletArray[i].bX, this.bulletArray[i].bY, this.bulletArray[i].bW, this.bulletArray[i].bH)
      this.bulletArray[i].bY += Gun.bulletSteps;
    }
  }
  shoot(n){
    for(let i=0;i<n;i++){
      this.bullet={
      bX: this.gX+this.gW,
      bY: this.gY+i*Gun.mulipleBulletGap,
      bW: Gun.bulletW,
      bH: Gun.bulletH
      }
      this.bulletArray.push(this.bullet);
    }
  }
}
