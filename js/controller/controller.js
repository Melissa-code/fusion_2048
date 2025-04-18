import View from '../view/View.js';
import Game from '../model/Game.js'; 

const game = new Game(); 
const view = new View(game, document, 60); 

document.addEventListener('keydown', (event)=> {
    game.processKey(event); 
    view.refresh();
})

