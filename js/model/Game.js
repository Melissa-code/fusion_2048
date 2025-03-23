import Tile from './Tile.js';
import Colors from './Colors.js'; 

class Game {

  constructor() {
    this.width = 4;
    this.numbers = [];
    this.gameOver = false; 
    this.score = 0

    this.matrix = this.initGame();  
    this.generateRandomTwo();
    this.generateRandomTwo(); 
    console.table(this.matrix); 
  }

  initGame() {
    let newMatrix = []; 

    for (let i = 0; i < this.width; i++) {
      let row = []; 
      for (let j = 0; j < this.width; j++) {
        row.push(0) // case vide 0
      }
      newMatrix.push(row); 
    }

    return newMatrix;     
  }

  generateRandomTwo() {
    let emptyPositions = []; 

    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.matrix[i][j] === 0) {
          emptyPositions.push([j, i]); // y x
        }
      }
    }
    //index aléatoire in emptyPositions[] (arrondi entier inférieur)
    //ex: const randomPos = emptyPositions[1]; // position 1soit [1, 2]
    const randomPosition = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];

    if (randomPosition) {
      const [x, y] = randomPosition; 
      this.matrix[y][x] = 2;
    }
  }

}

export default Game; 