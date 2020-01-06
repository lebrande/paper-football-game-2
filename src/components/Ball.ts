import { getCenterPosition } from '../lib/getCenterPosition';

import {
  START_COORDINATES,
  FIELD_WIDTH,
  FIELD_HEIGHT,
} from '../const/CONFIG';

import { TCoordinates } from '../types/Position';

const RADIUS = 10;

export default class Ball {
  private ctx: CanvasRenderingContext2D;
  private coordinates: TCoordinates;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.coordinates = START_COORDINATES;
  }

  moveTo(coordinates: TCoordinates) {
    this.coordinates = coordinates;
  }

  draw(): void {   
    const [x, y] = getCenterPosition(this.coordinates, FIELD_WIDTH, FIELD_HEIGHT); 
    this.ctx.beginPath();
    this.ctx.arc(
      x,
      y,
      RADIUS,
      0,
      2 * Math.PI,
    );
    
    this.ctx.fillStyle = '#FFF';
    this.ctx.fill();
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = '#000';
    this.ctx.stroke();
  }
}