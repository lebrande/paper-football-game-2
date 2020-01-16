export type TDirection = 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128;

export type TPosition = [
  number, // x
  number, // y
];

export type TCoordinates = {
  row: number;
  column: number;
};

export type TTransformation = [
  TDirection,
  number, // rowVector
  number, // columnVector
];