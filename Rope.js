class Rope{
    constructor(bodyA,bodyB){
        var rubbad_options={
            bodyA:bird.body,
            bodyB:consLog.body,
            stiffness:0.02,
            length:10
        }
        this.rubbad=Constraint.create(rubbad_options)
        World.add(world,this.rubbad);
    }
    display(){
        
        var pointA=this.rubbad.bodyA.position
        var pointB=this.rubbad.bodyB.position

        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    }
}