import { TCoordinates, TPosition } from '../types/Position';

export const getStartPosition = (
  coordinates: TCoordinates,
  width: number,
  height: number,
): TPosition => [
  coordinates.column * width,
  coordinates.row * height
];