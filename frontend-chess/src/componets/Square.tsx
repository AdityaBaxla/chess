import React from "react";

enum Color {
  Black = "b",
  White = "w",
}

type Props = {
  color: Color;
  image: React.Component | null;
};
const Square = () => {
  return <button className="w-10 h-10 {'bg-lime-900'}  text-4xl ">♘</button>;
};

export default Square;
