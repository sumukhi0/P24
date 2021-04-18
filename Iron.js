class Iron{
	constructor(x,y){
	var options = {
		'restitution':0.8,
		'friction':3,
		'density':30	
	}
	}
};

	// assign options to the rubber ball
    this.x = x;
    this.y = y;
    
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    World.add(world, this.body);


display()
{
        var ironpos=this.body.position;		
        push()
        translate(ironpos.x, ironpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black");
        fill("darkblue");
        pop()
}