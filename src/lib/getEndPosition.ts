import { TCoordinates, TPosition } from '../types/Position';

export const getEndPosition = (
  coordinates: TCoordinates,
  width: number,
  height: number,
): TPosition => [
  coordinates.column * width + width,
  coordinates.row * height + height,
];