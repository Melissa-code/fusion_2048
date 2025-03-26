class Game {
  constructor() {
    this.width = 4;
    this.numbers = [];
    this.gameOver = false;
    this.score = 0;
    this.matrix = this.initGame();
    this.generateNumberTwoInMatrixRandomly();
    this.generateNumberTwoInMatrixRandomly();

    console.table(this.matrix);
  }

  initGame() {
    let newMatrix = [];

    for (let y = 0; y < this.width; y++) {
      let row = [];
      for (let x = 0; x < this.width; x++) {
        row.push(0); // case vide 0
      }
      newMatrix.push(row);
    }

    return newMatrix;
  }

  generateNumberTwoInMatrixRandomly() {
    let randomY ;
    let randomX ;
    do {
       randomY = Math.floor(Math.random() * this.matrix[0].length);
       randomX = Math.floor(Math.random() * this.matrix[1].length);
    } while (this.matrix[randomY][randomX] != 0);

    console.log(randomX, randomY);
    this.matrix[randomY][randomX] = 2;
  }

  // déplacement dans 4 directions 
}

export default Game;
