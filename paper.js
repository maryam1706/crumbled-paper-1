class Paper  {
    constructor(x,y){
        var options = {
            restitution : 1.0,
            friction : 0.3,
            density : 0.8
        }
     
    this.body = Bodies.circle(x,y,50,options); 
    this.radius=70;   
    World.add(world,this.body); 
    }

    display(){
        var pos = this.body.position;
        translate(pos.x,pos.y);

        fill ("purple");
        ellipse(0,0,this.radius,this.radius);
    }
  }