import { filter } from 'rxjs/operators';

import Ball from './Ball';
import Field from './Field';

import { mouseClickInput$ } from '../input/mouseInput';

import { INITIAL_POINTS } from '../const/INITIAL_POINTS';
import { GAME_WIDTH, GAME_HEIGHT } from '../const/CONFIG';

import { getAdjacentCoordinates } from '../lib/getAdjacentCoordinates';
import { TCoordinates } from '../types/Position';

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

    this.setAvaialeFields(this.ball.getCoordinates());
    this.draw();

    mouseClickInput$.pipe(
      filter(({ row, column }) => this.gameField[row][column].getAvailability()),
    ).subscribe((clickCoordinates) => {
      this.setAvaialeFields(clickCoordinates);
      this.ball.moveTo(clickCoordinates);
      this.draw();
    });
  }

  private setAvaialeFields(coordinates: TCoordinates) {
    this.gameField.forEach((fields) => {
      fields.forEach((field) => {
        field.setAvailability(false);
      });
    });
    getAdjacentCoordinates(coordinates).forEach(({ row, column }) => {
      this.gameField[row][column].setAvailability(true);
    });
  }

  draw() {
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
      row.forEach((field) => {
        field.draw();
      });
    });

    this.ball.draw();
  }
}