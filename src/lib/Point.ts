import {
  GAME_WIDTH,
  COLUMNS_NUMBER,
  GAME_HEIGHT,
  ROWS_NUMBER,
} from '../const/CONFIG';
import { TPosition } from '../types/Position';
import {
  DIRECTIONS,
  UP,
  UP_LEFT,
  LEFT,
  DOWN_LEFT,
  DOWN,
  DOWN_RIGHT,
  RIGHT,
  UP_RIGHT,
} from '../const/DIRECTIONS';

export default class Point {
  static width: number = GAME_WIDTH / COLUMNS_NUMBER;
  static height: number = GAME_HEIGHT / ROWS_NUMBER;

  private ctx: CanvasRenderingContext2D;
  private position: TPosition;
  private state: number;

  public hasBall: boolean = false;

  public constructor(
    ctx: CanvasRenderingContext2D,
    row: number,
    column: number,
    state: number,
  ) {
    this.ctx = ctx;
    this.position = {
      x: row * Point.width,
      y: column * Point.height,
    };
    this.state = state;
  }

  private drawCenter(): void {
    const { ctx } = this;
    const { x, y } = this.position;
    const { width, height } = Point;
    const centerX = x + width / 2;
    const centerY = y + height / 2;

    const radius = 3;

    ctx.beginPath();
    ctx.arc(
      centerX,
      centerY,
      radius,
      0,
      2 * Math.PI,
    );
    
    ctx.fillStyle = this.hasBall ? '#F00' : '#FFF';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
  }

  private drawUsedDirections(): void {
    const { ctx } = this;
    const { x, y } = this.position;
    const { width, height } = Point;
    const centerX = x + width / 2;
    const centerY = y + height / 2;

    DIRECTIONS.forEach((direction) => {
      if (direction & this.state) {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);

        switch(direction) {
          case UP:
            ctx.lineTo(centerX, y);
            break;
          case UP_LEFT:
            ctx.lineTo(x, y);
            break;
          case LEFT:
            ctx.lineTo(x, centerY);
            break;
          case DOWN_LEFT:
            ctx.lineTo(x, y + height);
            break;
          case DOWN:
            ctx.lineTo(centerX, y + height);
            break;
          case DOWN_RIGHT:
            ctx.lineTo(x + width, y + height);
            break;
          case RIGHT:
            ctx.lineTo(x + width, centerY);
            break;
          case UP_RIGHT:
            ctx.lineTo(x + width, y);
            break;
        }

        ctx.stroke();
      }
    });
  }

  public draw() {
    this.drawUsedDirections();
    this.drawCenter();
  }
}