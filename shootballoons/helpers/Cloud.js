class Cloud{
	constructor(cloudX,cloudY,cloudW, cloudH){
		this.cloudX = cloudX;
		this.cloudY = cloudY;
		this.cloudW = cloudW;
		this.cloudH = cloudH;
		this.balloonColor = 'white';
		this.xVal = 0;
	}
	static cloudArray = [];
	static addToCloudArray(cloud){
		Cloud.cloudArray.push(cloud);
	}
	static showCloudArray(){
		for(let i=0;i<Cloud.cloudArray.length;i++){
			Cloud.cloudArray[i].show();
		}
	}
	show(){
		noStroke();
		fill('white');
		ellipse(this.cloudX,this.cloudY,this.cloudW,this.cloudH);
		ellipse(this.cloudX+30,this.cloudY-10,this.cloudW,this.cloudH);
		ellipse(this.cloudX+80,this.cloudY,this.cloudW,this.cloudH);
		ellipse(this.cloudX+20,this.cloudY+20,this.cloudW,this.cloudH);
		ellipse(this.cloudX+60,this.cloudY+15,this.cloudW,this.cloudH);
	}	
}
