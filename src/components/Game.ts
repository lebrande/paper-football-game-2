import { filter, map } from 'rxjs/operators';

import Ball from './Ball';
import Field from './Field';

import { mouseClickInput$ } from '../input/mouseInput';

import { INITIAL_POINTS } from '../const/INITIAL_POINTS';
import { GAME_WIDTH, GAME_HEIGHT, DISABLED_COORDINATES } from '../const/CONFIG';

import { getAdjacentCoordinates } from '../lib/getAdjacentCoordinates';
import { TCoordinates } from '../types';
import { getOppositeDirection } from '../lib/getOppositeDirection';
import { TRANSFORMATIONS } from '../const/TRANSFORMATIONS';
import { TDirection } from '../types';
import { getTransformedCoordinates } from '../lib/getTransformedCoordinates';

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

    this.setAvailableFields(this.ball.getCoordinates());
    this.draw();

    mouseClickInput$.pipe(
      filter((clickCoordinates) => !DISABLED_COORDINATES.some(
        (c) => c.row === clickCoordinates.row && c.column === clickCoordinates.column,
      )),
      map((clickCoordinates) => this.gameField[clickCoordinates.row][clickCoordinates.column].getDirection()),
      filter((direction) => !!direction),
      filter((direction) => !(this.getCurrentField().getState() & direction)),
    ).subscribe((direction) => {
      this.move(direction);
      this.draw();
    });
  }

  private getCurrentField(): Field {
    const { row, column } = this.ball.getCoordinates();
    return this.gameField[row][column];
  }

  private move(direction: TDirection) {
    const transformation = TRANSFORMATIONS.find((t) => t[0] === direction);
    const ballNewCoordinates = getTransformedCoordinates(
      this.ball.getCoordinates(),
      transformation,
    );

    this.getCurrentField().updateState(direction);
    this.gameField[ballNewCoordinates.row][ballNewCoordinates.column].updateState(getOppositeDirection(direction));
    this.ball.moveTo(ballNewCoordinates);
    this.setAvailableFields(ballNewCoordinates);
  }

  private setAvailableFields(coordinates: TCoordinates) {
    this.gameField.forEach((fields) => {
      fields.forEach((field) => {
        field.setDirection(null);
      });
    });
    getAdjacentCoordinates(coordinates)
      .filter(({ row, column }) => !DISABLED_COORDINATES.some(
        (c) => c.row === row && c.column === column,
      ))
      .filter(({ direction }) => !(this.getCurrentField().getState() & direction))
      .forEach(({ row, column, direction }) => {
        this.gameField[row][column].setDirection(direction);
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