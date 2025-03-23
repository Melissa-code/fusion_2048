import Game from '../model/Game.js'; 
import View from '../view/View.js';

const game = new Game(); 
const view = new View(game, document, 60); 

