import { TCoordinates } from '../types';

export const ROWS_NUMBER = 11;
export const COLUMNS_NUMBER = 7;
export const GAME_WIDTH = 350;
export const GAME_HEIGHT = 550;
export const START_COORDINATES: TCoordinates = {
  column: 3,
  row: 5,
};

export const FIELD_WIDTH = GAME_WIDTH / COLUMNS_NUMBER;
export const FIELD_HEIGHT = GAME_HEIGHT / ROWS_NUMBER;

export const HIDDEN_COORDINATES: TCoordinates[] = [
  { row: 0, column: 0 },
  { row: 0, column: 1 },
  { row: 0, column: 5 },
  { row: 0, column: 6 },
  { row: 10, column: 0 },
  { row: 10, column: 1 },
  { row: 10, column: 5 },
  { row: 10, column: 6 },
];

export const DISABLED_COORDINATES: TCoordinates[] = [
  ...HIDDEN_COORDINATES,
  { row: 0, column: 2 },
  { row: 0, column: 4 },
  { row: 10, column: 2 },
  { row: 10, column: 4 },
];