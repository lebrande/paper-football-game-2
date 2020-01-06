import GameField from './GameField';
import { mouseClickInput$ } from '../input/mouseInput';

import {
  GAME_WIDTH,
  GAME_HEIGHT,
} from '../const/CONFIG';

export default class Game {
  private ctx: CanvasRenderingContext2D;
  private gameField: GameField;

  public constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.gameField = new GameField(ctx);

    mouseClickInput$.subscribe((result) => {
      this.gameField.setBallPoint(result);
      this.draw();
    });
  }

  private clearScreen() {
    this.ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  }

  public draw() {
    this.clearScreen();
    this.gameField.draw();
  }
}