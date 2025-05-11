import NumerosColors from "../model/NumerosColors.js";

class View {
  constructor(game, document, tileSize) {
    this.game = game;
    this.tileSize = tileSize;
    this.myCanva = document.querySelector("#myCanvas");
    this.ctx = this.myCanva.getContext("2d");
    this.ctx.scale(-1, 1);
    this.myCanva.width = this.game.width * this.tileSize;
    this.myCanva.height = this.game.width * this.tileSize;
    this.myCanva.style.transform = 'scale(1.1,1.1)';
    this.refresh(); 
  }

  refresh() {
    this.displayGrid();
    this.displayNumbers();
    this.displayScore();
  }

  displayGrid() {
    for (let y = 0; y < this.game.width; y++) {
      for (let x = 0; x < this.game.width; x++) {
        this.ctx.fillStyle = "#cec3b8";
        this.ctx.fillRect(
          // position x y & tileSize (width & height)
          x * this.tileSize,
          y * this.tileSize,
          this.tileSize,
          this.tileSize
        );
        // border
        this.ctx.lineWidth = 4;
        this.ctx.strokeStyle = "#927e67"
        this.ctx.strokeRect(
          x * this.tileSize,
          y * this.tileSize,
          this.tileSize,
          this.tileSize
        );
      }
    }
  }

  displayNumbers() {
    for (let y = 0; y < this.game.width; y++) {
      for (let x = 0; x < this.game.width; x++) {
        if (this.game.matrix[y][x] !== 0) {
          //display color tile
          let number = this.game.matrix[y][x]; 
          this.ctx.fillStyle = NumerosColors[number.toString()];
          this.ctx.fillRect(
            // position x y & tileSize (width & height)
            x * this.tileSize,
            y * this.tileSize,
            this.tileSize,
            this.tileSize
          );
          // border
          this.ctx.lineWidth = 4;
          this.ctx.strokeStyle = "#927e67"
          this.ctx.strokeRect(
            x * this.tileSize,
            y * this.tileSize,
            this.tileSize,
            this.tileSize
          );
          //font number
          const numberString = number.toString();
          let fontSize = this.tileSize / (2.5 + numberString.length * 0.1); 
          this.ctx.font = `${fontSize}px arial`;
      
          if (this.game.matrix[y][x] === 2 || this.game.matrix[y][x] === 4) {
            this.ctx.fillStyle = "#5e503f";
          } else {
            this.ctx.fillStyle = "#FFFFFF";
          }

          this.ctx.textAlign = "center"; //align horiz
          this.ctx.textBaseline = "middle"; //align vertic
          this.ctx.fillText(
            this.game.matrix[y][x],
            x * this.tileSize + this.tileSize/2,
            y * this.tileSize + this.tileSize/2
          )
        }
      }
    }
  }

  displayScore() {
    let scoreElement = document.querySelector("#score");
    scoreElement.textContent = "Score: "+ this.game.score;  
   
  }

  displayMessage() {
    let messageElement = document.querySelector("#messages");
    messageElement.textContent = "Game over !"; 
  }
}

export default View;