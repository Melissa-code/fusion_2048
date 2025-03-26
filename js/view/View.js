import NumerosColors from "../model/NumerosColors.js";

class View {
  constructor(game, document, tileSize) {
    this.game = game;
    this.tileSize = tileSize;
    this.myCanva = document.querySelector("#myCanvas");
    this.ctx = this.myCanva.getContext("2d");
    this.myCanva.width = this.game.width * this.tileSize;
    this.myCanva.height = this.game.width * this.tileSize; 

    this.displayGrid();
    this.displayNumberTwoInGridRandomly();
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

  displayNumberTwoInGridRandomly() {
    for (let y = 0; y < this.game.width; y++) {
      for (let x = 0; x < this.game.width; x++) {
        if (this.game.matrix[y][x] !== 0) {
          //color tile
          this.ctx.fillStyle = NumerosColors['2'];
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
          this.ctx.font = `bold ${this.tileSize/2}px monospace`;
          this.ctx.fillStyle = "#5e503f";
          this.ctx.textAlign = "center"; //align horiz
          this.ctx.textBaseline = "middle"; //align vertic
          this.ctx.fillText(
            this.game.matrix[y][x],
            x * this.tileSize + this.tileSize/2,
            y * this.tileSize + this.tileSize/2
          );
        }
      }
    }
  }
}

export default View;
