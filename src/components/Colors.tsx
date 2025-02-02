import { useState } from "react";
import { colors } from "../data";

// const variants = [100, 200, 300, 400, 500, 600];

const Colors: React.FC = () => {
  const [userColor, setUserColor] = useState("");
  return (
    <div className="flex flex-col justify-center items-center min-h-dvh gap-y-7 max-w-4xl mx-auto">
      <span
        className="text-center font-semibold text-2xl md:text-4xl"
        data-testid="gameInstructions"
      >
        Guess the correct color!
      </span>
      <div
        className="size-32 md:size-64 bg-pink-600"
        data-testid="colorBox"
      ></div>
      <ul className="grid grid-cols-2 w-full md:grid-cols-3 md:gap-10 gap-5">
        {colors.map((color) => (
          <li
            key={color}
            className={`
             justify-center flex h-32 md:h-48 hover:scale-[1.1] md:hover:scale-[1.2] transition-all duration-200  items-center`}
            style={{ backgroundColor: color }}
            onClick={() => setUserColor(color)}
          >
            <button data-testid="colorOption" className="capitalize">
              {color}
            </button>
          </li>
        ))}
      </ul>
      <span
        data-testid="gameStatus"
        className="text-purple-900 font-bold text-4xl"
      >
        {userColor}
      </span>
      <span data-testid="score" className="text-purple-900 font-bold text-4xl">
        {userColor}
      </span>

      <button
        data-testid="newGameButton"
        className="bg-amber-300 px-4 py-2 hover:bg-amber-300/85 transition-all duration-300 rounded-md"
      >
        New game
      </button>
    </div>
  );
};

export default Colors;

// displaying different shades of the same color
