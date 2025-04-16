class Game {
  constructor() {
    this.width = 4;
    this.numbers = [];
    this.gameOver = false;
    this.score = 0;
    this.matrix = this.initGame();
  
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

  generateNumberTwoInMatrixRandomly() {
    let randomY;
    let randomX;
    do {
      randomY = Math.floor(Math.random() * this.matrix[0].length);
      randomX = Math.floor(Math.random() * this.matrix[1].length);
    } while (this.matrix[randomY][randomX] !== 0);

    this.matrix[randomY][randomX] = 2;
  }

  // random 1 et 10inclus: si 10 find 4 au lieu de 2 
  // ajouter un chiffre
  // voir si opti des boucles dans move()
  generateNewNumberInMatrixRandomly() {
    let randomY;
    let randomX;
    // between 1-10
    let randomNumber = Math.floor((Math.random() * 10) +1);
    console.log("aléatoire numéro:", randomNumber); 

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

  fusion(numerosArray) {
    let fusionArray = [];
    if (numerosArray.length > 0) {
      let oldElement = numerosArray.shift();
      console.log("oldElement", oldElement);

      if (!oldElement) {
        console.log("aucun élément");
        // return empty array
        return fusionArray;
      }

      let newElement = null;
      while (numerosArray.length > 0) {
        newElement = numerosArray.shift();
        console.log("newElement", newElement);
        // if fusion
        if (newElement === oldElement && oldElement !== null) {
          fusionArray.push(newElement + oldElement);
          console.log(fusionArray);
          console.log(numerosArray);
          oldElement = null;
          newElement = null;
        
          // oldElem in fusionArray & if oldEl is null oldEl becomes newElem
        } else {
          if (oldElement !== null) {
            fusionArray.push(oldElement);
            console.log(fusionArray);
          }
           else {
             oldElement = newElement;
          }
        }
      }
      // keep oldEl
      if (newElement === null && oldElement !== null)
        fusionArray.push(oldElement);
    }

    while (fusionArray.length < this.width) {
      fusionArray.push(0);
    }

    return fusionArray;
  }

  //déplacements
  processKey(event) {
    let oldMatrix = JSON.stringify(this.matrix);

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

    // Add a new number after an event 
    let newMatrix = JSON.stringify(this.matrix);
    console.log(newMatrix);
    if (oldMatrix !== newMatrix) {
      this.generateNewNumberInMatrixRandomly();
    }

    console.table(this.matrix);
  }
}

export default Game;
