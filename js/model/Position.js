class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  isInsideTheGameBoard(width) {
    return this.x < width && this.x >= 0 && this.y < width && this.y >= 0;  
  }
}

export default Position; 