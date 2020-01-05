import { IGameElement } from '../types/GameElement';
import {
  GAME_WIDTH,
  COLUMNS_NUMBER,
  GAME_HEIGHT,
  ROWS_NUMBER,
} from '../const/CONFIG';
import { TPosition } from '../types/Position';

export default class Point implements IGameElement {
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

  public draw() {
    const { ctx } = this;
    const { x, y } = this.position;
    const { width, height } = Point;
    const centerX = x + width / 2;
    const centerY = y + height / 2;
    const radius = 3;

    ctx.fillStyle = '#0B2';
    ctx.fillRect(
      x,
      y,
      width,
      height,
    );

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
}