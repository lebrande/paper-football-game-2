import { INITIAL_POINTS } from '../const/INITIAL_POINTS';
import Point from './Point';
import { IGameElement } from '../types/GameElement';

export default class GameField implements IGameElement {
  private points: Point[][];

  constructor() {
    this.points = INITIAL_POINTS.map(
      (row, y) => row.map((state, x) => new Point(x, y, state)),
    );
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.points.forEach((row) => {
      row.forEach((point) => {
        point.draw(ctx);
      });
    });
  }
}