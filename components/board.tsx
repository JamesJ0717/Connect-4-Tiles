import { MouseEvent, useState } from "react";
import Tile from "./tile";

type BoardProps = {
  dimensions: { x: number; y: number };
};

const Players = [
  { color: "blue", index: 0 },
  { color: "green", index: 1 },
  { color: "red", index: 2 },
  { color: "yellow", index: 3 },
];
let Player = Players[0];

const handleRightClick = (event: MouseEvent<HTMLDivElement>) => {
  event.preventDefault();
  console.log(event);
  event.currentTarget.className = `w-12 h-12 bg-white border`;
  event.currentTarget.id = "white";
};

const handleClick = (event: MouseEvent<HTMLDivElement>) => {
  event.preventDefault();
  console.log(event.currentTarget.id);
  if (event.currentTarget.id != "gray") {
  } else {
    event.currentTarget.className = `w-12 h-12 bg-${Player.color} border`;
    event.currentTarget.id = Player.color;
    checkWin((event.currentTarget.title as unknown) as number, Player.color);
    swapPlayer();
  }
};

const swapPlayer = () => {
  let nextPlayer = Player.index != 3 ? Player.index + 1 : 0;
  Player = Players[nextPlayer];
};

const checkWin = (index: number, color: string) => {
  // 4 IN A ROW ==> where one is placed check each surrounding tile, repeat
  console.log(tiles[index].props.color, color);
};

let tiles: JSX.Element[] = [];

const Board = (props: BoardProps) => {
  let index = 0;
  for (let i = 0; i < props.dimensions.x; i++) {
    for (let j = 0; j < props.dimensions.y; j++) {
      let tile;
      if (i == Math.floor(props.dimensions.x / 2) && j == Math.floor(props.dimensions.y / 2)) {
        tile = (
          <Tile
            key={index}
            color={"white"}
            index={index}
            handleClick={handleClick}
            handleRightClick={handleRightClick}
          />
        );
      } else {
        tile = (
          <Tile
            key={index}
            color={"gray"}
            index={index}
            handleClick={handleClick}
            handleRightClick={handleRightClick}
          />
        );
      }
      tiles.push(tile);
      index++;
    }
  }

  return (
    <>
      <div className={`grid grid-flow-row grid-cols-${props.dimensions.x}`}>
        {tiles.map((tile) => (
          <div key={tile.key}>{tile}</div>
        ))}
      </div>
    </>
  );
};

export default Board;
