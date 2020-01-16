import { TDirection, TTransformation } from '../types';

//  2   1   128
//   \  |  /
//    \ | /
// 4 ---O--- 64
//    / | \
//   /  |  \
// 8   16   32

export const UP: TDirection = 1;
export const UP_LEFT: TDirection = 2;
export const LEFT: TDirection = 4;
export const DOWN_LEFT: TDirection = 8;
export const DOWN: TDirection = 16;
export const DOWN_RIGHT: TDirection = 32;
export const RIGHT: TDirection = 64;
export const UP_RIGHT: TDirection = 128;

// [direction, rowVector, columnVertor]
export const TRANSFORMATIONS: TTransformation[] = [
  [UP, -1, 0],
  [UP_LEFT, -1, -1],
  [LEFT, 0, -1],
  [DOWN_LEFT, 1, -1],
  [DOWN, 1, 0],
  [DOWN_RIGHT, 1, 1],
  [RIGHT, 0, 1],
  [UP_RIGHT, -1, 1],
];