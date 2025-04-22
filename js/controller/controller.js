import View from '../view/View.js';
import Game from '../model/Game.js'; 

const game = new Game(); 
const view = new View(game, document, 60); 
const resetBtn = document.getElementById('reset');

document.addEventListener('keydown', (event)=> {
    game.processKey(event); 
    view.refresh();
})

resetBtn.addEventListener('click', () => {
    game.resetGame();   
    view.refresh();  
});

