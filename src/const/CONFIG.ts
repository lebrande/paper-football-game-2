import { TCoordinates } from '../types/Position';

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