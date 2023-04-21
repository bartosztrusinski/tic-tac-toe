import Board from './Board';
import MoveList from './MoveList';
import { PlayerMove, PlayerValue, SquareValue } from './interface';
import {
  firstPlayerValue,
  getCurrentMoveIndex,
  getOpponentValue,
  playerColors,
  initSquareValues,
  getWinner,
} from './util';
import { useState } from 'react';

const Game = () => {
  const [squareValues, setSquareValues] = useState<SquareValue[]>(
    initSquareValues()
  );
  const [currentPlayerValue, setCurrentPlayerValue] =
    useState<PlayerValue>(firstPlayerValue);
  const [playerMoves, setPlayerMoves] = useState<PlayerMove[]>([]);

  const lastMovePlayerValue = getOpponentValue(currentPlayerValue);
  const currentMoveIndex = getCurrentMoveIndex(squareValues);
  const winner = getWinner(squareValues, lastMovePlayerValue);
  const isGameOver = winner || squareValues.every((value) => value !== null);
  const currentTextColor = winner
    ? `text-${playerColors[winner]}`
    : 'text-main';

  const handleSquareClick = (clickedSquareIndex: number) => {
    if (squareValues[clickedSquareIndex] || isGameOver) return;

    setSquareValues((prevSquareValues) => {
      const newSquareValues = [...prevSquareValues];
      newSquareValues[clickedSquareIndex] = currentPlayerValue;
      return newSquareValues;
    });

    setCurrentPlayerValue((prevCurrentPlayerValue) =>
      getOpponentValue(prevCurrentPlayerValue)
    );

    setPlayerMoves((prevMoves) => [
      ...prevMoves.slice(0, currentMoveIndex + 1),
      { value: currentPlayerValue, squareIndex: clickedSquareIndex },
    ]);
  };

  const handleMoveClick = (moveIndex: number) => {
    if (moveIndex === currentMoveIndex) return;

    const newSquares = initSquareValues();

    playerMoves.slice(0, moveIndex + 1).forEach((move) => {
      newSquares[move.squareIndex] = move.value;
    });

    setSquareValues(newSquares);
    setCurrentPlayerValue(getOpponentValue(playerMoves[moveIndex].value));
  };

  const resetGame = () => {
    setSquareValues(initSquareValues());
    setCurrentPlayerValue(firstPlayerValue);
    setPlayerMoves([]);
  };

  return (
    <div className='flex min-h-full flex-col bg-neutral-900 selection:text-accent'>
      <header className='border-b-2 bg-neutral-800 p-3'>
        <h1 className={`text-center text-4xl font-bold text-main md:text-5xl`}>
          Tic Tac Toe
        </h1>
      </header>

      <section className={`p-4 text-center`}>
        <div
          className={`${
            isGameOver ? 'scale-100' : 'h-0 scale-0'
          } transition-transform`}>
          <h2
            className={`animate-bounce text-2xl font-bold text-main sm:text-3xl`}>
            🎮️ Game over 🎮️
          </h2>
          {winner ? (
            <p className={`text-xl sm:text-2xl ${currentTextColor}`}>
              Player {winner} wins!
            </p>
          ) : (
            <p className={`text-xl text-main sm:text-2xl`}>Draw!</p>
          )}
          <button
            className={`mt-3 rounded bg-main px-6 py-2 text-neutral-100
            hover:bg-pink-700 focus-visible:outline-none focus-visible:ring
            focus-visible:ring-pink-700 active:bg-pink-800`}
            onClick={resetGame}>
            Play again
          </button>
        </div>
        <h2
          className={`text-xl text-${playerColors[currentPlayerValue]} ${
            isGameOver ? 'h-0 scale-0' : 'scale-100'
          } transition-transform`}>
          Now playing: {currentPlayerValue}
        </h2>
      </section>

      <main className='grid grid-flow-row gap-8 px-4 pb-6 sm:grid-flow-col sm:justify-center'>
        <section>
          <h2 className='text-center text-xl text-main sm:text-start'>Board</h2>
          <Board squareValues={squareValues} onClick={handleSquareClick} />
        </section>
        <section>
          <h2 className='text-center text-xl text-main sm:text-start'>Moves</h2>
          <MoveList
            moves={playerMoves}
            currentMoveIndex={currentMoveIndex}
            onClick={handleMoveClick}
          />
        </section>
      </main>
    </div>
  );
};

export default Game;
