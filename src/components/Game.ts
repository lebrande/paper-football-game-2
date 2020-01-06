import Ball from './Ball';
import Field from './Field';

import { mouseClickInput$ } from '../input/mouseInput';

import { INITIAL_POINTS } from '../const/INITIAL_POINTS';
import { GAME_WIDTH, GAME_HEIGHT } from '../const/CONFIG';

export default class Game {
  private ctx: CanvasRenderingContext2D;
  private gameField: Field[][];
  private ball: Ball;

  public constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.ball = new Ball(ctx);
    this.gameField = INITIAL_POINTS.map(
      (fields, row) => fields.map(
        (state, column) => new Field(ctx, { row, column }, state)
      ),
    );

    mouseClickInput$.subscribe((clickCoordinates) => {
      console.log(clickCoordinates);
      this.ball.moveTo(clickCoordinates);
      this.draw();
    });
  }

  public draw() {
    this.ctx.clearRect(
      0, 
      0,
      GAME_WIDTH,
      GAME_HEIGHT,
    );
    
    this.ctx.fillStyle = '#0B2';
    this.ctx.fillRect(
      0,
      0,
      GAME_WIDTH,
      GAME_HEIGHT,
    );

    this.gameField.forEach((row) => {
      row.forEach((point) => {
        point.draw();
      });
    });

    this.ball.draw();
  }
}