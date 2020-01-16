import { TRANSFORMATIONS } from '../const/TRANSFORMATIONS';
import { TCoordinates } from '../types';
import {
  ROWS_NUMBER,
  COLUMNS_NUMBER,
} from '../const/CONFIG';
import { TDirection } from '../types';

export const getAdjacentCoordinates = (
  coordinates: TCoordinates,
): (TCoordinates & { direction: TDirection})[] =>
  TRANSFORMATIONS
    .map((transformation) => ({
      direction: transformation[0],
      row: coordinates.row + transformation[1],
      column: coordinates.column + transformation[2],
    }))
    .filter(({ row, column }) => (
      row >= 0
      && row < ROWS_NUMBER
      && column >= 0
      && column < COLUMNS_NUMBER
    ));