class Stone{
	constructor(x,y){
	var options = {
		'restitution':0.8,
		'friction':9,
		'density':12	
	}
	}
};	 

	// assign options to the rubber ball
		this.x = x;
		this.y = y;
		
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r,this.r);
			pop()
	}