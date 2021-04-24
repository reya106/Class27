class Chain{
    constructor(body1,body2){
        var prop={
            bodyA: body1,
            bodyB: body2,
            length: 10,
            stiffness: 1
        };
    this.chain=Constraint.create(prop) 
    World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
