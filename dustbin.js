class dustbin{
    constructor(x,y,width,height)
    {

    var options={
         isStatic:true,
        'restitution': 1.0,
        'friction': 0.3,
        'density':1.0
    };
        
        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display()
    {
    var pos = this.body.position;
    
    push();
    translate(pos.x,pos.y);
    strokeWeight(2)
    stroke("black");
    rectMode(CENTER);
    fill("red");
    rect(0,0,this.width, this.height);
    pop();
}
}