import { PlayerMove, PlayerValue } from './interface';
import { playerColors } from './util';

interface MoveListProps {
  moves: PlayerMove[];
  currentMoveIndex: number;
  onClick: (move: number) => void;
}

const MoveList = ({ moves, currentMoveIndex, onClick }: MoveListProps) => {
  const currentMoveClasses = `bg-main text-neutral-100 border-neutral-100`;
  const playerColorClasses = (playerValue: PlayerValue) =>
    `bg-neutral-800 text-${playerColors[playerValue]} border-${playerColors[playerValue]}`;

  return (
    <ol className='sm:max-w-nonemd:w-[15rem] mx-auto flex max-w-[21rem] flex-col gap-3 sm:w-[12rem] lg:w-[18rem]'>
      {moves.map((move, moveIndex) => {
        const colorClasses =
          currentMoveIndex === moveIndex
            ? currentMoveClasses
            : playerColorClasses(move.value);

        return (
          <li key={moveIndex} className={`border-2 ${colorClasses}`}>
            <button
              className='w-full p-2 focus-visible:text-accent
                focus-visible:outline-none focus-visible:ring focus-visible:ring-accent'
              onClick={() => onClick(moveIndex)}>
              {moveIndex + 1}. {move.value} at square {move.squareIndex + 1}
            </button>
          </li>
        );
      })}
    </ol>
  );
};

export default MoveList;
