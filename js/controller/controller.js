import View from '../view/View.js';
import Game from '../model/Game.js'; 

const game = new Game(); 
const view = new View(game, document, 100); 
const resetBtn = document.getElementById('reset');

document.addEventListener('keydown', (event)=> {
    game.processKey(event); 
    view.refresh();
    if (game.isGameOver()) {
        view.displayMessage();
    }
})

resetBtn.addEventListener('click', () => {
    game.resetGame();   
    view.refresh();  
    // delete "game over" message
    const message = document.querySelector("#messages");
    message.textContent = "";
});