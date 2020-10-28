class jaideep {
    constructor(x,y) {
      var options = {
          isStatic: false,
          
      }
      this.body = Bodies.circle(x,y,70,options);
      this.width = 70;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("brown");
      ellipse(pos.x, pos.y, this.width);
    }
  };
