import Tile from "./Tile.js";
import Colors from "./Colors.js";
import Position from "./Position.js";

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
    let emptyPositions = [];

    for (let y = 0; y < this.width; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.matrix[y][x] === 0) {
          emptyPositions.push(new Position(x, y)); //y x
        }
      }
    }

    if (emptyPositions.length > 0) {
      //index aléatoire in emptyPositions[] (arrondi entier inférieur)
      //ex: randomPosition = emptyPositions[1]; //position 1 soit [1, 2]
      const randomPosition = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
      this.matrix[randomPosition.y][randomPosition.x] = 2;
    }
  }
}

export default Game;
