class Bob 
{
    constructor(x,y,r) 
    {
      var options = {
          //isStatic: true,
          restitution:1,//0.3
          density:0.2
      }
      this.r=r;
      this.x=x;
      this.y=y;
      this.body = Bodies.circle(x,y,this.r,options);
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;

      push();
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);

      stroke("white");
      strokeWeight(2);

      fill("lightblue");
      ellipse(0,0,this.r,this.r);
      pop();
    }
  }