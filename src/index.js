import GameField from './lib/GameField';

const canvas = document.getElementById('game_screen');
const ctx = canvas.getContext('2d');
new GameField();

ctx.fillStyle = '#F00';
ctx.fillRect(20, 20, 100, 100);

ctx.clearRect(0, 0, 800, 600);

ctx.fillStyle = '#F0F';
ctx.fillRect(200, 400, 50, 50);
