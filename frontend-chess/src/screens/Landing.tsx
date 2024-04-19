import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../componets/Button";
import { useSocket } from "../hooks/userSockets";

import { INIT_GAME, MOVE, GAME_OVER } from "../../../backend1/src/messages";

const Landing = () => {
  const navigate = useNavigate();

  if (!socket) return <div></div>;
  return (
    <div>
      <div className="mt-2">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <img src={"/landingimage.png"}></img>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Play chess online</h1>
            <div className="mt-4">
              <Button
                text="Play Online"
                onClick={() => {
                  socket.send(
                    JSON.stringify({
                      type: "init_game",
                    })
                  );
                  navigate("/game");
                }}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
