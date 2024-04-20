import React, { useState } from "react";
import Square from "./Square";
import { Chess } from "chess.js";
import pieces from "../assets/chessPieces.ts";

const ChessBoard = () => {
  const [chess, setChess] = useState(new Chess());

  return (
    <div className="grid grid-cols-8 gap-1">
      {chess
        .board()
        .map((row) =>
          row.map((obj) => (
            <Square
              key={obj?.square}
              value={obj && pieces[obj.color + obj.type]}
            />
          ))
        )}
    </div>
  );
};

export default ChessBoard;
