import { INITIAL_POINTS } from '../const/INITIAL_POINTS';
import Point from './Point';
import { TPointPosition } from '../types/Position';
import {
  GAME_WIDTH,
  GAME_HEIGHT,
} from '../const/CONFIG';

export default class GameField {
  private ctx: CanvasRenderingContext2D;
  private points: Point[][];
  private ballPoint: TPointPosition = {
    row: 3,
    column: 5,
  };

  public constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
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
    const { ctx } = this;
    ctx.fillStyle = '#0B2';
    ctx.fillRect(
      0,
      0,
      GAME_WIDTH,
      GAME_HEIGHT,
    );

    this.points.forEach((row) => {
      row.forEach((point) => {
        point.draw();
      });
    });
  }
}