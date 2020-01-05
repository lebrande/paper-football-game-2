import { IGameElement } from '../types/GameElement';
import { GAME_WIDTH, COLUMNS_NUMBER, GAME_HEIGHT, ROWS_NUMBER } from '../const/CONFIG';
import { TPosition } from '../types/Position';

export default class Point implements IGameElement {
  private static width: number = GAME_WIDTH / COLUMNS_NUMBER;
  private static height: number = GAME_HEIGHT / ROWS_NUMBER;
  private position: TPosition;
  private state: number;

  constructor(
    row: number,
    column: number,
    state: number,
  ) {
    this.position = {
      x: row * Point.width,
      y: column * Point.height,
    };
    this.state = state;
  }

  draw(ctx: CanvasRenderingContext2D) {
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
    
    ctx.fillStyle = '#FFF';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
  }
}