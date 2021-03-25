class DustbinClass{
    constructor(x, y, width, height) {
        var options = {
           isStatic :true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("sprites/dustbingreen.png")
      }
      display(){
        var angle = this.body.angle;
        push();
        // translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
        // fill("red")
        imageMode(CENTER);
        image(this.image,600,600,100, 100);
        pop();
      }
}