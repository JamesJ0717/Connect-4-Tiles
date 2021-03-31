import { MouseEvent } from "react";

type TileProps = {
  color: string;
  index: number;
  handleClick: (event: MouseEvent<HTMLDivElement>) => void;
  handleRightClick: (event: MouseEvent<HTMLDivElement>) => void;
};

const Tile = ({ color, index, handleClick, handleRightClick }: TileProps) => {
  return (
    <div
      id={color}
      title={index.toString()}
      key={index}
      onClick={handleClick}
      onContextMenu={handleRightClick}
      className={`w-12 h-12 border bg-${color}`}
    ></div>
  );
};

export default Tile;
