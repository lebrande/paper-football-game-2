import GameField from './lib/GameField';
import { GAME_WIDTH, GAME_HEIGHT } from './const/CONFIG';

const canvas = document.getElementById('game_screen') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const gameField = new GameField();

ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
gameField.draw(ctx);
