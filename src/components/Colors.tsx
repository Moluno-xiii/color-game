import { useState } from "react";
import { colorsWithVariants } from "../data";

const getRandomNum = (min: number, max: number) => {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
};

const randomColorObject = colorsWithVariants[getRandomNum(0, 18)];
const randomColor = randomColorObject.variants[getRandomNum(0, 8)];
console.log(randomColor);
console.log(randomColorObject.name);

const Colors: React.FC = () => {
  const [userColor, setUserColor] = useState("");
  //   const [randomColorObject, setRandomColorObject] = useState({});
  //   const [rnadomColor, setRandomColor] = useState("");

  return (
    <div className="flex flex-col justify-center items-center min-h-dvh gap-y-7 max-w-4xl mx-auto">
      <span
        className="text-center font-semibold text-2xl md:text-4xl"
        data-testid="gameInstructions"
      >
        Guess the correct color!
      </span>
      <div
        style={{ backgroundColor: randomColor }}
        className="size-32 md:size-64"
        data-testid="colorBox"
      ></div>
      <ul className="grid grid-cols-2 w-full md:grid-cols-3 md:gap-10 gap-5">
        {randomColorObject.variants.map((color) => (
          <li
            key={color}
            className={`
          rounded-lg py-3 px-6 capitalize hover:scale-[1.1] md:hover:scale-[1.2] transition-all duration-200 `}
            style={{ backgroundColor: color }}
            onClick={() => setUserColor(color)}
          >
            <button data-testid="colorOption" className=" ">
              {/* {color} */}
            </button>
          </li>
        ))}
      </ul>
      <span
        data-testid="gameStatus"
        className="text-purple-900 font-bold text-4xl"
      >
        {randomColor}
      </span>
      <span data-testid="score" className="text-fuchsia-400 font-bold text-4xl">
        {colorsWithVariants.length}
      </span>
      {userColor === randomColor ? (
        <span>You guessed right</span>
      ) : (
        <span>You guessed wrong</span>
      )}
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
