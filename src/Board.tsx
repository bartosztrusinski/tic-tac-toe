import Square from './Square';
import { SquareValue } from './interface';

interface BoardProps {
  squareValues: SquareValue[];
  onClick: (squareIndex: number) => void;
}

const Board = ({ squareValues, onClick }: BoardProps) => {
  return (
    <div
      className='mx-auto grid h-[17rem] max-w-[21rem] grid-cols-3 grid-rows-3 
        gap-2 sm:h-[20rem] sm:w-[24rem] sm:max-w-full md:h-[25rem] md:w-[28rem] 
        lg:h-[30rem] lg:w-[35rem]'>
      {squareValues.map((value, index) => (
        <Square key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

export default Board;
