import React from "react";

const Button = ({
  onClick,
  text,
}: {
  onClick: () => void;
  text: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
};

export default Button;
