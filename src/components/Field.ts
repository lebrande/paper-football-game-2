import { getCenterPosition } from '../lib/getCenterPosition';
import { getStartPosition } from '../lib/getStartPosition';
import { getEndPosition } from '../lib/getEndPosition';

import {
  TRANSFORMATIONS,
  UP,
  UP_LEFT,
  LEFT,
  DOWN_LEFT,
  DOWN,
  DOWN_RIGHT,
  RIGHT,
  UP_RIGHT,
} from '../const/TRANSFORMATIONS';
import { FIELD_WIDTH, FIELD_HEIGHT, HIDDEN_COORDINATES } from '../const/CONFIG';

import { TDirection } from '../types';
import { TCoordinates } from '../types';

const POINT_RADIUS = 3;

export default class Field {
  private ctx: CanvasRenderingContext2D;
  private coordinates: TCoordinates;
  private state: number;
  private direction: TDirection | null = null;

  public constructor(
    ctx: CanvasRenderingContext2D,
    coordinates: TCoordinates,
    state: number,
  ) {
    this.ctx = ctx;
    this.coordinates = coordinates;
    this.state = state;
  }

  private drawHighlight() {
    const [x, y] = getStartPosition(this.coordinates, FIELD_WIDTH, FIELD_HEIGHT);

    this.ctx.beginPath();
    this.ctx.rect(
      x,
      y,
      FIELD_WIDTH,
      FIELD_HEIGHT,
    );
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = '#FF0';
    this.ctx.stroke();
  }

  private drawPoint(): void {
    const [x, y] = getCenterPosition(
      this.coordinates,
      FIELD_WIDTH,
      FIELD_HEIGHT,
    );

    this.ctx.beginPath();
    this.ctx.arc(
      x,
      y,
      POINT_RADIUS,
      0,
      2 * Math.PI,
    );
    
    this.ctx.fillStyle = '#FFF';
    this.ctx.fill();
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = '#003300';
    this.ctx.stroke();
  }

  private drawUsedDirections(): void {
    const [startX, startY] = getStartPosition(
      this.coordinates,
      FIELD_WIDTH,
      FIELD_HEIGHT,
    );
    const [centerX, centerY] = getCenterPosition(
      this.coordinates,
      FIELD_WIDTH,
      FIELD_HEIGHT,
    );
    const [endX, endY] = getEndPosition(
      this.coordinates,
      FIELD_WIDTH,
      FIELD_HEIGHT,
    );

    TRANSFORMATIONS.forEach(([direction]) => {
      if (direction & this.state) {
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = '#003300';
        this.ctx.beginPath();
        this.ctx.moveTo(centerX, centerY);

        switch(direction) {
          case UP:
            this.ctx.lineTo(centerX, startY);
            break;
          case UP_LEFT:
            this.ctx.lineTo(startX, startY);
            break;
          case LEFT:
            this.ctx.lineTo(startX, centerY);
            break;
          case DOWN_LEFT:
            this.ctx.lineTo(startX, endY);
            break;
          case DOWN:
            this.ctx.lineTo(centerX, endY);
            break;
          case DOWN_RIGHT:
            this.ctx.lineTo(endX, endY);
            break;
          case RIGHT:
            this.ctx.lineTo(endX, centerY);
            break;
          case UP_RIGHT:
            this.ctx.lineTo(endX, startY);
            break;
        }

        this.ctx.stroke();
      }
    });
  }

  getDirection() {
    return this.direction;
  }

  setDirection(direction: TDirection) {
    this.direction = direction;
  }

  updateState(direction: TDirection) {
    this.state += direction;
  }

  getState() {
    return this.state;
  }

  draw() {
    if (HIDDEN_COORDINATES.some(
      (c) => c.row === this.coordinates.row && c.column === this.coordinates.column,
    )) {
      return;
    }

    this.drawUsedDirections();
    this.drawPoint();
    if (!!this.direction) {
      this.drawHighlight();
    }
  }
}