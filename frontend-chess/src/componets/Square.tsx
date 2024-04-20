import React from "react";

enum Color {
  Black = "b",
  White = "w",
}

type Props = {
  color: Color;
  image: React.Component | null;
};
const Square = ({ value }: { value: string | null }) => {
  return (
    <button className="w-12 h-12 bg-gray-300 border border-gray-400 flex items-center justify-center  text-4xl ">
      {value}
    </button>
  );
};

export default Square;
