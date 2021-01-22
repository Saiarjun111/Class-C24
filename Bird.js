class Bird{
    constructor(x,y){
        var options={
            restitution:1,
            friction:1.0,
            density:1.0
        }
        this.width=50;
        this.height=50;
        this.body=Bodies.rectangle(x,y,50,50,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER)
        fill("red");
        strokeWeight(4);
        stroke("darkblue");
        rect(0,0,this.width,this.height)
        pop();
    }
}