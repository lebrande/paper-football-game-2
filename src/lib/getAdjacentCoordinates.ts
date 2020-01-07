import { TRANSFORMATIONS } from '../const/TRANSFORMATIONS';
import { TCoordinates } from '../types/Position';
import {
  ROWS_NUMBER,
  COLUMNS_NUMBER,
} from '../const/CONFIG';

export const getAdjacentCoordinates = (
  coordinates: TCoordinates,
): TCoordinates[] =>
  TRANSFORMATIONS
    .map((transformation) => ({
      row: coordinates.row + transformation[0],
      column: coordinates.column + transformation[1],
    }))
    .filter(({ row, column }) => (
      row >= 0
      && row < ROWS_NUMBER
      && column >= 0
      && column < COLUMNS_NUMBER
    ));