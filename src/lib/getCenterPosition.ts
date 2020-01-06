import { TCoordinates, TPosition } from '../types/Position';

export const getCenterPosition = (
  coordinates: TCoordinates,
  width: number,
  height: number,
): TPosition => [
  coordinates.column * width + width / 2,
  coordinates.row * height + height / 2,
];