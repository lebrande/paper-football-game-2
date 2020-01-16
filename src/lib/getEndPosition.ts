import { TCoordinates, TPosition } from '../types';

export const getEndPosition = (
  coordinates: TCoordinates,
  width: number,
  height: number,
): TPosition => [
  coordinates.column * width + width,
  coordinates.row * height + height,
];