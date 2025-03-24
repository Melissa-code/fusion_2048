//import Colors from "../model/Colors";

class View {
  constructor(game, document, tileSize) {
    this.game = game;
    this.tileSize = tileSize;
    this.myCanva = document.querySelector("#myCanvas");
    this.ctx = this.myCanva.getContext("2d");
    this.myCanva.width = this.game.width * this.tileSize;
    this.myCanva.height = this.game.width * this.tileSize; 

    this.displayGrid();
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

  displayRandomTwo() {
    for (let y = 0; y < this.game.width; y++) {
      for (let x = 0; x < this.game.width; x++) {
        
      }
    }
  }

}

export default View;
