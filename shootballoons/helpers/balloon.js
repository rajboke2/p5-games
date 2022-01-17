class Balloon{
	constructor(balloonX,balloonY,balloonW, balloonH,balloonColor){
    this.balloonX = balloonX,
    this.balloonY = balloonY,
    this.balloonW = balloonW,
    this.balloonH = balloonH,
    this.balloonColor = balloonColor,
    this.type = 'balloon',
    this.burst = 0,
    this.liveStatus = 1;
  }
  show(){
    noStroke();
    fill(this.balloonColor);
    ellipse(this.balloonX,this.balloonY, this.balloonW-=this.burst, this.balloonH-=this.burst);
    stroke(255);
    let lineX1 = this.balloonX;
    let lineY1 = this.balloonY+this.balloonH/2;
    let lineX2 = this.balloonX+10;
    let lineY2 = this.balloonY+this.balloonH/2+10;
    line(lineX1,lineY1,lineX2,lineY2);
    if(this.balloonW+this.balloonH <= 0){
     this.liveStatus = 0
   }
 }
}