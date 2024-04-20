import React, { useEffect, useState } from "react";
import ChessBoard from "../componets/ChessBoard";
import { useSocket } from "../hooks/useSockets";
import { INIT_GAME, MOVE, GAME_OVER } from "../../../backend1/src/messages";

const Game = () => {
  const socket = useSocket();
  const [board, setBoard] = useState();

  useEffect(() => {
    if (!socket) {
      return;
    }
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message);
      switch (message.type) {
        case INIT_GAME:
          console.log("game initialized");
          break;
        case MOVE:
          console.log("move initialized");
          break;
        case GAME_OVER:
          console.log("game over");
          break;
      }
    };
  }, [socket]);

  return (
    <div className="justify-center flex">
      <div className="pt-8 max-w-screen-lg">
        <div className="grid grid-cols-6 gap-4 md:grid-cols-2">
          <div className="col-span-4 bg-slate-500 ">
            <ChessBoard />
          </div>
          <div>
            <button className="col-span-4 bg-yellow-600 ">Play</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
