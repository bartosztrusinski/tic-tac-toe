import { firstPlayerValue, secondPlayerValue } from './util';

type PlayerValue = typeof firstPlayerValue | typeof secondPlayerValue;

type SquareValue = PlayerValue | null;

type MoveIndex = number;

export type { PlayerValue, MoveIndex, SquareValue };
