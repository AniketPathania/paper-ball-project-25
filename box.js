class Box {
    constructor(x, y, width, height) {
  
      var options = {
        isStatic:true,
    }
  
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      this.dustbin = loadImage("dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
    

      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("white");
      rect(0,0, this.width, this.height);
      pop();
      image(this.dustbin,875,290,180,190);
    }
  };