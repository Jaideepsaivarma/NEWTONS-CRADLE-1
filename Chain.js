class Chain {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX,y:this.offsetY}
       
        }
       this.rope = Constraint.create(options);
       World.add(this.rope,world);
    }
        display(){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            strokeWeight(4);
            var anchoor1x = pointA.x;
            var anchoor1y = pointA.y;
            var anchoor2x = pointB.x + this.offsetX;
            var anchoor2y = pointB.Y + this.offsetY;
            line(anchoor1x,anchoor1y,anchoor2x,anchoor2y);
        }
        
    }
