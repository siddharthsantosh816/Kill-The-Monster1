class Monster{

    constructor(x,y,radius){
       
      var options={
          restitution:0.3,
          friction:0.9,
          density:18
      }
  
      this.body=Bodies.circle(x,y,radius/2,options);
      this.radius=radius;
      this.image=loadImage('sprites/Monster.png')
      World.add(world,this.body);
    }
     
   display() {
       
        var pos=this.body.position;
        
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius);
   }
  }
  



