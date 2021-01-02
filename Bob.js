class Bob{
    constructor(x,y){
        var options={
            "restitution":0.3,
            "friction":0.5,
            "density":1.2
        }
        this.body=Bodies.circle(x,y,30,options);
        World.add(world,this.body);
        this.radius= 80;

    }
    displey(){
        var pos=this.body.position
        var angle = this.body.angle;
        ellipseMode(CENTER);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("#E800E3");
        ellipse(x,y,this.radius);
        pop();
    }
}