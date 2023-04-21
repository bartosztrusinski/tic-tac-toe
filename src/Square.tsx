import { SquareValue } from './interface';
import { playerColors } from './util';

interface SquareProps {
  value: SquareValue;
  onClick?: () => void;
}

const Square = ({ value, onClick }: SquareProps) => {
  const colorClasses =
    value !== null
      ? `text-${playerColors[value]} border-${playerColors[value]} cursor-not-allowed`
      : '';

  return (
    <button
      className={`flex select-none place-content-center place-items-center rounded
        border-4 bg-neutral-800 text-5xl font-bold focus-visible:border-accent
        focus-visible:outline-none md:text-6xl ${colorClasses}`}
      onClick={onClick}
      disabled={value !== null}>
      {value}
    </button>
  );
};

export default Square;
