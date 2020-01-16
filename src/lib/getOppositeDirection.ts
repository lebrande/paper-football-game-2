import { TDirection } from '../types';
import { TRANSFORMATIONS } from '../const/TRANSFORMATIONS';

export const getOppositeDirection = (direction: TDirection): TDirection => 
  direction >= TRANSFORMATIONS[TRANSFORMATIONS.length / 2][0]
    ? direction >> TRANSFORMATIONS.length / 2 as TDirection
    : direction << TRANSFORMATIONS.length / 2 as TDirection;