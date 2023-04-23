import { MoveIndex, PlayerValue } from './interface';
import { getPlayerValue, playerColors } from './util';

interface MoveListProps {
  moves: MoveIndex[];
  lastMoveIndex: number;
  moveTo: (moveIndex: number) => void;
}

const MoveList = ({ moves, lastMoveIndex, moveTo }: MoveListProps) => {
  const currentMoveClasses = `bg-main text-neutral-100 border-neutral-100`;
  const playerColorClasses = (playerValue: PlayerValue) =>
    `bg-neutral-800 text-${playerColors[playerValue]} border-${playerColors[playerValue]}`;

  return (
    <ol className='sm:max-w-nonemd:w-[15rem] mx-auto flex max-w-[21rem] flex-col gap-3 sm:w-[12rem] lg:w-[18rem]'>
      {moves.map((squareIndex, moveIndex) => {
        const playerValue = getPlayerValue(moveIndex);
        const colorClasses =
          lastMoveIndex === moveIndex
            ? currentMoveClasses
            : playerColorClasses(playerValue);

        return (
          <li key={moveIndex} className={`border-2 ${colorClasses}`}>
            <button
              className='w-full p-2 focus-visible:text-accent
                focus-visible:outline-none focus-visible:ring focus-visible:ring-accent'
              onClick={() => moveTo(moveIndex)}>
              {moveIndex + 1}. {playerValue} at square {squareIndex + 1}
            </button>
          </li>
        );
      })}
    </ol>
  );
};

export default MoveList;
