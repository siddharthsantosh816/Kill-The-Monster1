class Block{

    constructor(x,y,width,height){
       
      var options={
          restitution:0.8,
          friction:1,
          density:40
          
      }
      this.width=width;
      this.height=height;
      this.body=Bodies.rectangle(x,y,this.width,this.height,options);
      World.add(world,this.body);
    }
     
   display(){
        var pos=this.body.position;
        strokeWeight(2);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        
   }
  }
  