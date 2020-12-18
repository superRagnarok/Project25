class PaperClass {
    constructor (x,y,r){
    var options={
        restitution: 0.4,
        friction: 0.5,
        density: 1.2
    }
    this.r=58;
    this.body=Bodies.circle(x,y,r,options);
    this.image = loadImage("paperImage.png");
    World.add(world,this.body);
    }
     display(){
         var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        fill("white");
        stroke(0);
        image(this.image,0,0,this.r,this.r);
        pop(); 
     }
}
