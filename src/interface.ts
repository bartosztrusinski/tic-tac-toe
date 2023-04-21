import { firstPlayerValue, secondPlayerValue } from './util';

type PlayerValue = typeof firstPlayerValue | typeof secondPlayerValue;

type SquareValue = PlayerValue | null;

type PlayerMove = {
  value: PlayerValue;
  squareIndex: number;
};

export type { PlayerValue, PlayerMove, SquareValue };
