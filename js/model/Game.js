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
    let randomY;
    let randomX;
    do {
      randomY = Math.floor(Math.random() * this.matrix[0].length);
      randomX = Math.floor(Math.random() * this.matrix[1].length);
    } while (this.matrix[randomY][randomX] !== 0);

    this.matrix[randomY][randomX] = 2;
  }

  moveUp() {
    for (let x = 0; x < this.width; x++) {
      // N° dans chaq col
      let columnNumeros = [];
      for (let y = 0; y < this.width; y++) {
        if (this.matrix[y][x] !== 0) {
          columnNumeros.push(this.matrix[y][x]);
        }
      }

      // fusion des memes n° (values)
      for (let i = 0; i < columnNumeros.length; i++) {
        if (columnNumeros[i] === columnNumeros[i + 1]) {
          columnNumeros[i] *= 2;
          columnNumeros[i + 1] = 0;
        }
      }
      console.log(columnNumeros)

      while (columnNumeros.length < this.width) {
        columnNumeros.push(0);
      }

      // update matrix
      for (let y = 0; y < this.width; y++) {
        this.matrix[y][x] = columnNumeros[y];
      }
    }

    console.table(this.matrix);
  }

  fusion(numerosArray) {
    let fusionArray = []; 
    let oldElement = numerosArray.schift();
    console.log(oldElement)
    if (!oldElement) {
      console.log('aucun élément')
      return fusionArray;
    }
    let newElement = null;
    while (numerosArray.length > 0) {
      newElement = numerosArray.schift()
      if (newElement == oldElement && oldElement!=null) {
        fusionArray.push(newElement + oldElement);
        oldElement = null;
        newElement = null;
      } else {
        if (oldElement!=null)
          fusionArray.push(oldElement);
        else oldElement = newElement;
      }
    }
    if (newElement==null && oldElement!=null)
      fusionArray.push(oldElement);

    return fusionArray; 
  }

  //déplacements
  processKey(event) {
    switch (event.key) {
      case "ArrowUp":
        this.moveUp();
        break;
    }
  }
}

export default Game;
