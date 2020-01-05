import { INITIAL_POINTS } from '../const/INITIAL_POINTS';
import Point from './Point';
import { IGameElement } from '../types/GameElement';
import { TPointPosition } from '../types/Position';

export default class GameField implements IGameElement {
  private points: Point[][];
  private ballPoint: TPointPosition = {
    row: 3,
    column: 5,
  };

  public constructor(ctx: CanvasRenderingContext2D) {
    this.points = INITIAL_POINTS.map(
      (row, y) => row.map((state, x) => new Point(ctx, x, y, state)),
    );
  }

  public setBallPoint(ballPoint: TPointPosition) {
    const oldBallPoint = this.ballPoint;
    this.points[oldBallPoint.row][oldBallPoint.column].hasBall = false;
    this.points[ballPoint.row][ballPoint.column].hasBall = true;
    this.ballPoint = ballPoint;
  }

  public draw() {
    this.points.forEach((row) => {
      row.forEach((point) => {
        point.draw();
      });
    });
  }
}