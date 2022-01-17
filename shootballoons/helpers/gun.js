class Gun{
  constructor(x,y,w,h){
    this.gX=x;
    this.gY=y;
    this.gW=w;
    this.gH=h;
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
      rect(this.bulletArray[i].bX, this.bulletArray[i].bY, this.bulletArray[i].bW, this.bulletArray[i].bH)
      this.bulletArray[i].bY += bstep;
    }
  }
  shoot(){
    this.bullet={
                  bX: this.gX+(this.gW/2)/2,
                  bY: this.gY,
                  bW: 1,
                  bH: 20
                }
    this.bulletArray.push(this.bullet)
    bstep = -10;
  }
}