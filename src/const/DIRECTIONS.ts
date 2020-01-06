import { TDirection } from '../types/Direction';

export const UP: TDirection = 1;
export const UP_LEFT: TDirection = 2;
export const LEFT: TDirection = 4;
export const DOWN_LEFT: TDirection = 8;
export const DOWN: TDirection = 16;
export const DOWN_RIGHT: TDirection = 32;
export const RIGHT: TDirection = 64;
export const UP_RIGHT: TDirection = 128;

export const DIRECTIONS: TDirection[] = [
  UP,
  UP_LEFT,
  LEFT,
  DOWN_LEFT,
  DOWN,
  DOWN_RIGHT,
  RIGHT,
  UP_RIGHT,
];