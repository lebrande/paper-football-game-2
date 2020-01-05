import { fromEvent } from 'rxjs';
import { map, startWith } from 'rxjs/operators'

import Point from '../lib/Point';
import { canvas } from '../dom/canvas';

export const mouseClickInput$ = fromEvent(canvas, 'click').pipe(
  map(({ offsetX: x, offsetY: y }: MouseEvent) => ({ x, y })),
  map(({ x, y }) => ({
    row: Math.floor(y / Point.height),
    column: Math.floor(x / Point.width),
  })),
  startWith({
    row: 5,
    column: 3,
  }),
);