class DownMovingObjects{
  constructor(canvasw, canvash){
    this.objectsArrary=['balloon'];
    this.randomObjectsArray=[];
    this.canvasW = canvasw;
    this.canvasH = canvash;
  }
  static objectStep = 1;
  createRandomObject(){
    let oindex=Math.floor
    (Math.random() * (this.objectsArrary.length - 0) ) + 0;
    let renderObject=this.objectsArrary[oindex]
    let x=Math.floor(Math.random() * (this.canvasW - 0) ) + 0;
    let circleColorsArray=['pink','yellow','red',
                            'blue','orange','green',
                            'black'
                            ]
    let cindex=Math.floor(Math.random() * 
    (circleColorsArray.length - 0) ) + 0;
    let objectDetails='';
    if(renderObject=='balloon'){
        objectDetails = new Balloon(x,0,45,55,circleColorsArray[cindex])
      }
    this.randomObjectsArray.push(objectDetails)
  }
  show(){
    for(let i=0;i<this.randomObjectsArray.length;i++){
      if(this.randomObjectsArray[i].type=='balloon'){
        this.randomObjectsArray[i].balloonY += DownMovingObjects.objectStep
        this.randomObjectsArray[i].draw()
      }
    }
  }
}