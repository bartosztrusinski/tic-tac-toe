import { SquareValue } from './interface';
import { colors } from './util';

interface SquareProps {
  value: SquareValue;
  onClick?: () => void;
}

const Square = ({ value, onClick }: SquareProps) => {
  const clickedSquareClasses =
    value !== null
      ? `text-${colors[value]} border-${colors[value]} cursor-not-allowed`
      : '';

  return (
    <button
      className={`flex select-none place-content-center place-items-center rounded
      border-4 bg-neutral-800 text-5xl font-bold md:text-6xl ${clickedSquareClasses}`}
      onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
