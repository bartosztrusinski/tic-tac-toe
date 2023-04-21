import { PlayerValue, SquareValue } from './interface';

const mainColor = 'pink-500';
const firstPlayerColor = 'purple-600';
const secondPlayerColor = 'orange-400';

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

const firstPlayerValue = 'X';
const secondPlayerValue = 'O';

const getOpponentValue = (playerValue: PlayerValue) => {
  return playerValue === firstPlayerValue
    ? secondPlayerValue
    : firstPlayerValue;
};

const getCurrentMoveIndex = (squareValues: SquareValue[]) =>
  squareValues.reduce(
    (clickedSquares, value) => (value ? clickedSquares + 1 : clickedSquares),
    0
  ) - 1;

export {
  getOpponentValue,
  getCurrentMoveIndex,
  firstPlayerValue,
  secondPlayerValue,
  winCombinations,
  mainColor,
  firstPlayerColor,
  secondPlayerColor,
};
