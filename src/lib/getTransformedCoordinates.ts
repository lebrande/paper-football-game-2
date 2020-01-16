import { TCoordinates, TTransformation } from '../types';

export const getTransformedCoordinates = (
  coordinates: TCoordinates,
  transformation: TTransformation,
): TCoordinates => ({
  row: coordinates.row + transformation[1],
  column: coordinates.column + transformation[2],
});