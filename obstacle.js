class Obstacle {
  constructor() {
    this.size = 100;
    this.x = width;
    this.y = height - this.size;
  }
  show() {
    image(obstacleImage, this.x, this.y, this.size, this.size);
  }
  move() {
    this.x = this.x - 10;
  }
}
