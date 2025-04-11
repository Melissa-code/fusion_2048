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
      let mergedColumn = this.fusion(columnNumeros); 
      while (mergedColumn.length < this.width) {
        mergedColumn.push(0);
      }

      // update matrix
      for (let y = 0; y < this.width; y++) {
        this.matrix[y][x] = mergedColumn[y];
      }
    }

    console.table(this.matrix);
  }

  fusion(numerosArray) {
    let fusionArray = []; 
    let oldElement = numerosArray.shift();
    console.log("oldElement", oldElement)

    if (!oldElement) {
      console.log('aucun élément')

      // return empty array
      return fusionArray; 
    }

    let newElement = null;
    while (numerosArray.length > 0) {
      newElement = numerosArray.shift()
      console.log("newElement", newElement)
      // if fusion
      if (newElement === oldElement && oldElement !== null) {
        fusionArray.push(newElement + oldElement);
        console.log(fusionArray)
        console.log(numerosArray)
        oldElement = null;
        newElement = null;
      // oldElem in fusionArray & if oldEl is null oldEl becomes newElem
      } else {
        if (oldElement !== null) {
          fusionArray.push(oldElement); 
          console.log(fusionArray)
        } else {
          oldElement = newElement;
        }
      }
    }
    // keep oldEl
    if (newElement === null && oldElement !== null) fusionArray.push(oldElement);

    return fusionArray; 
  }

  //déplacements
  processKey(event) {
    switch(event.key) {
      case "ArrowUp":
        this.moveUp();
        break;
    }
  }
}

export default Game;
