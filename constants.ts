import { Coordinates } from './types';

export const GRID_SIZE: number = 20;

export const LEVEL_TICK_RATES: number[] = [150, 120, 95, 75, 60];

export const FOOD_LIFESPAN_MS: number = 8000;
export const FOOD_WARNING_MS: number = 2000;

export const INITIAL_SNAKE_POSITION: Coordinates[] = [
  { x: 10, y: 10 },
  { x: 10, y: 11 },
  { x: 10, y: 12 },
];

export const INITIAL_FOOD_POSITION: Coordinates = { x: 15, y: 15 };
