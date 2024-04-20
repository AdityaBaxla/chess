import { useNavigate } from "react-router-dom";
import Button from "../componets/Button";
import { useSocket } from "../hooks/useSockets";

const Landing = () => {
  const navigate = useNavigate();

  const socket = useSocket();

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
