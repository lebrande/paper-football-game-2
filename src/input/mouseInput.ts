import { fromEvent, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'

import { FIELD_HEIGHT, FIELD_WIDTH } from '../const/CONFIG';
import { canvas } from '../dom/canvas';
import { TCoordinates } from '../types/Position';

export const mouseClickInput$: Observable<TCoordinates> = fromEvent(canvas, 'click').pipe(
  map(({ offsetX: x, offsetY: y }: MouseEvent) => ({ x, y })),
  map(({ x, y }) => ({
    row: Math.floor(y / FIELD_HEIGHT),
    column: Math.floor(x / FIELD_WIDTH),
  })),
  startWith({
    row: 5,
    column: 3,
  }),
);