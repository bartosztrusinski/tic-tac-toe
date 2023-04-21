import { SquareValue } from './interface';
import { firstPlayerValue } from './util';

interface SquareProps {
  value: SquareValue;
  onClick?: () => void;
}

const Square = ({ value, onClick }: SquareProps) => {
  const isAlreadyClicked = value !== null;
  const squareColors =
    value === firstPlayerValue
      ? 'text-purple-600 border-purple-600'
      : 'text-orange-400 border-orange-400';

  return (
    <button
      className={`flex  select-none place-content-center place-items-center rounded
      border-2 bg-neutral-800 text-center font-cursive text-5xl font-bold md:text-6xl
       ${isAlreadyClicked && `${squareColors} cursor-not-allowed`}`}
      onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
