class Ball {
  constructor(x, y, w, h) {
    let options = {
     isStatic: 0.1
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w-200;
    this.h = h+30;

    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    ellipse(0, 0, this.w, this.h);
    pop();
  }
}
