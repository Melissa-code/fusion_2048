class Game {
  constructor() {
    this.width = 4;
    this.numbers = [];
    this.gameOver = false;
    this.score = 0;
    this.matrix = this.loadGame() || this.initGame();
this.matrix[0][0]=2048;
    this.generateNumberTwoInMatrixRandomly();
    this.generateNumberTwoInMatrixRandomly();
    
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

  checkIfMatrixFull() {
    for (let y = 0; y < this.width; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.matrix[y][x] === 0) {
          return false;
        } 
      }
    }
    return true;
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

  generateNewNumberInMatrixRandomly() {
    if (!this.checkIfMatrixFull()) {
      let randomY;
      let randomX;
      // between 1-10
      let randomNumber = Math.floor((Math.random() * 10) +1);
  
      if (randomNumber === 4) {
        do {
          randomY = Math.floor(Math.random() * this.matrix[0].length);
          randomX = Math.floor(Math.random() * this.matrix[1].length);
        } while (this.matrix[randomY][randomX] !== 0);
  
        this.matrix[randomY][randomX] = 4;
      } else {
        do {
          randomY = Math.floor(Math.random() * this.matrix[0].length);
          randomX = Math.floor(Math.random() * this.matrix[1].length);
        } while (this.matrix[randomY][randomX] !== 0);
    
        this.matrix[randomY][randomX] = 2;
      }  
    } 
    
    console.table(this.matrix); 
  }

  move(direction) {
    if (direction === "up") {
      for (let x = 0; x < this.width; x++) {
        let numerosArray = [];
        for (let y = 0; y < this.width; y++) {
          if (this.matrix[y][x] !== 0) {
            numerosArray.push(this.matrix[y][x]);
          }
        }
        // fusion des memes n° (values)
        let mergedNumeros = this.fusion(numerosArray);

        // recopier mergedNumeros dans la colone x
        for (let y = 0; y < this.width; y++) {
          this.matrix[y][x] = mergedNumeros[y];
        }
      }
    }
    if (direction === "down") {
      for (let x = 0; x < this.width; x++) {
        let numerosArray = [];
        for (let y = this.width - 1; y >= 0; y--) {
          if (this.matrix[y][x] !== 0) {
            numerosArray.push(this.matrix[y][x]);
          }
        }
        // fusion des memes n° (values)
        let mergedNumeros = this.fusion(numerosArray);

        // recopier mergedNumeros dans la colone x
        for (let y = this.width - 1; y >= 0; y--) {
          this.matrix[y][x] = mergedNumeros[this.width-1-y];
        }
      }
    }
    if (direction === "right") {
      for (let y = 0; y < this.width; y++) {
        let numerosArray = [];
        for (let x = this.width - 1; x >= 0; x--) {
          if (this.matrix[y][x] !== 0) {
            numerosArray.push(this.matrix[y][x]);
          }
        }
        // fusion des memes n° (values)
        let mergedNumeros = this.fusion(numerosArray);

        // recopier mergedNumeros dans la colone x
        for (let x = this.width - 1; x >= 0; x--) {
          this.matrix[y][x] = mergedNumeros[this.width-1-x];
        }
      }
    }
    if (direction === "left") {
      for (let y = 0; y < this.width; y++) {
        let numerosArray = [];
        for (let x = 0; x < this.width; x++) {
          if (this.matrix[y][x] !== 0) {
            numerosArray.push(this.matrix[y][x]);
          }
        }
        // fusion des memes n° (values)
        let mergedNumeros = this.fusion(numerosArray);

        // recopier mergedNumeros dans la colone x
        for (let x = 0; x < this.width; x++) {
          this.matrix[y][x] = mergedNumeros[x];
        }
      }
    }
  }

  fusion(numerosArray_) {
    //[2,2,2]
    let numerosArray = numerosArray_.filter(x =>x!=0);
    let fusionArray = [];
    let oldElement = numerosArray.shift();
      let newElement = null;
      while (numerosArray.length > 0) {
        newElement = numerosArray.shift();
        if (oldElement==null)
        {
          oldElement=newElement;
          continue;
        }
        if (newElement === oldElement && oldElement !== null) {
          let sum = newElement + oldElement;
          fusionArray.push(sum);
          oldElement = null;
          // oldElem in fusionArray & if oldEl is null oldEl becomes newElem
          this.score += sum;
        } 
        else {
          if (oldElement !== null) {
            fusionArray.push(oldElement);
            oldElement=newElement;
          }
        }
      }
      if (oldElement!=null)
        fusionArray.push(oldElement);

    while (fusionArray.length < this.width) {
      fusionArray.push(0);
    }

    return fusionArray;
  }

  //déplacements
  processKey(event) {
    switch (event.key) {
      case "ArrowUp":
        this.move("up");
        break;
      case "ArrowDown":
        this.move("down"); 
        break;
      case "ArrowRight":
        this.move("right");
        break;
      case "ArrowLeft":
        this.move("left");
        break;
    }

  //  this.saveGame(this.matrix, this.score); 
    this.generateNewNumberInMatrixRandomly();
    console.table(this.matrix);
    console.log("Score: "+ this.score);
  }

  saveGame(matrix, score) {
    localStorage.setItem('gameMatrix', JSON.stringify(matrix));
    localStorage.setItem('gameScore', JSON.stringify(score));
  }

  loadGame() {
    const savedMatrix = localStorage.getItem('gameMatrix');
    // JSON.parse(savedMatrix) convertir cette chaîne JSON en un objet JavaScript (la matrice)
    const savedScore = localStorage.getItem('gameScore');
    
    if (savedMatrix && savedScore) {
      this.score = JSON.parse(savedScore);
      return JSON.parse(savedMatrix);
    }
  
    return null;
  }

  resetGame() {
    localStorage.removeItem('gameMatrix');
    this.matrix = this.initGame(); 
    this.score = 0;
    this.gameOver = false;

    this.generateNumberTwoInMatrixRandomly();
    this.generateNumberTwoInMatrixRandomly();
  }

}

// faire le score
// quand la matrix est pleine message perdu
// 2 et 4 noir et lles autres blanc
// reduire taille des 4 chiffres dans case
// réinitialiser 
// vérif si matrix est pleine avant de générer un nv nombre 

export default Game;