class DownMovingObjects{
  constructor(canvasW, canvasH){
    this.objectsArrary=['balloon'];
    this.randomObjectsArray=[];
    this.canvasW = canvasW;
    this.canvasH = canvasH;
  }
  static objectStep = 1;
  createRandomObject(){
    let circleColorsArray=['pink', 'yellow', 'red',
                           'blue', 'orange', 'green',
                           'black', 'white', 'brown',
                           'gray'
                          ]
    let objectDetails='';
    if(random(this.objectsArrary) === 'balloon'){
      let x = floor(random(10, canvasW-10));
      let w = floor(random(50, 70));
      let h = floor(random(70, 90));
      objectDetails = new Balloon(x,0,w,h,random(circleColorsArray));
    }
    this.randomObjectsArray.push(objectDetails)
  }
  show(){
    for(let i=0;i<this.randomObjectsArray.length;i++){
      if(this.randomObjectsArray[i].type=='balloon'){
        this.randomObjectsArray[i].balloonY += DownMovingObjects.objectStep;
        this.randomObjectsArray[i].show();
      }
    }
  }
}
