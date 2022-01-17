class Gun{
  constructor(x,y){
    this.gX=x;
    this.gW=5;
    this.gH=40;
    this.gY=y-this.gH;
    this.bulletArray=[];
  }
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
      fill('red');
      noStroke();
      rect(this.bulletArray[i].bX, this.bulletArray[i].bY, this.bulletArray[i].bW, this.bulletArray[i].bH)
      this.bulletArray[i].bY += bstep;
    }
  }
  shoot(n){
    for(let i=0;i<n;i++){
      this.bullet={
      bX: this.gX+this.gW,
      bY: this.gY+i*45,
      bW: 1,
      bH: 10
      }
      this.bulletArray.push(this.bullet)
      bstep = -10;
    }
  }
}
