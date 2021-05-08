class Fly {

    constructor(body1,point){
        var options={
            bodyA:body1,
            pointB:point,
            length:20,
            stiffness:0.05
        }
        
        this.Fly=Matter.Constraint.create(options);
        World.add(world,this.Fly);
        this.bodyA=body1;
        this.pointB=point;
    }
    
    display(){
      var pointA=this.Fly.bodyA.position;
      var pointB=this.Fly.pointB;
      strokeWeight(0);
       line(pointA.x,pointA.y+27,pointB.x, pointB.y);
    } 
  }