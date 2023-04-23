import { PlayerValue, SquareValue } from './interface';

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const getWinner = (
  squareValues: SquareValue[],
  lastMovePlayerValue: PlayerValue
) => {
  const isWinner = winCombinations.some((combination) =>
    combination.every((index) => squareValues[index] === lastMovePlayerValue)
  );

  return isWinner ? lastMovePlayerValue : null;
};

const firstPlayerValue = 'X';
const secondPlayerValue = 'O';

const firstPlayerColor = 'player-one';
const secondPlayerColor = 'player-two';

const playerColors = {
  [firstPlayerValue]: firstPlayerColor,
  [secondPlayerValue]: secondPlayerColor,
} as const;

const getOpponentValue = (playerValue: PlayerValue) =>
  playerValue === firstPlayerValue ? secondPlayerValue : firstPlayerValue;

const getMoveCount = (squareValues: SquareValue[]) =>
  squareValues.reduce(
    (clickedSquares, value) => (value ? clickedSquares + 1 : clickedSquares),
    0
  );

const initSquareValues = (): SquareValue[] => Array(9).fill(null);

const getPlayerValue = (moveIndex: number): PlayerValue =>
  moveIndex % 2 === 0 ? firstPlayerValue : secondPlayerValue;

const isBoardFull = (squareValues: SquareValue[]) =>
  squareValues.every((value) => value !== null);

export {
  firstPlayerValue,
  secondPlayerValue,
  playerColors,
  getOpponentValue,
  getMoveCount,
  initSquareValues,
  getWinner,
  getPlayerValue,
  isBoardFull,
};
