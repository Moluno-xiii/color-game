import { useState } from "react";
import { colorsWithVariants } from "../data";
import { getRandomNum } from "./utils";

const getRandomColorObj = () => {
  return colorsWithVariants[getRandomNum(0, 18)];
};

const getRandomColor = (obj: { variants: string[] }) => {
  return obj.variants[getRandomNum(0, 8)];
};

const Colors: React.FC = () => {
  const [userColor, setUserColor] = useState("");
  const [randomColorObject, setRandomColorObject] = useState(() =>
    getRandomColorObj()
  );
  const [randomColor, setRandomColor] = useState(() =>
    getRandomColor(randomColorObject)
  );
  const [userScore, setUserScore] = useState(0);

  const handleUserGuess = (color: string) => {
    setUserColor(color);
    if (color === randomColor) {
      setUserScore((score) => score + 1);
    }
    console.log(userColor);
    console.log(randomColor);
  };

  const handleNextLevel = () => {
    const newColorObject = getRandomColorObj();
    setRandomColorObject(newColorObject);
    setRandomColor(getRandomColor(newColorObject));
  };

  const handleNewGame = () => {
    setUserScore(0);
    handleNextLevel();
  };

  return (
    <div className="flex flex-col justify-center items-center  gap-y-7">
      <div
        style={{ backgroundColor: randomColor }}
        className="size-32 md:size-64"
        data-testid="colorBox"
      ></div>
      <span data-testid="score">Your score : {userScore}</span>
      <span
        className="text-center font-semibold text-xl md:text-2xl"
        data-testid="gameInstructions"
      >
        Guess the correct color!
      </span>
      <div className="grid grid-cols-2 w-full md:grid-cols-3 md:gap-10 gap-5">
        {randomColorObject.variants.map((color) => (
          <button
            key={color}
            disabled={userColor === randomColor}
            className={`
          rounded-lg py-6 px-12 capitalize hover:scale-[1.1] md:hover:scale-[1.2] transition-all duration-200`}
            style={{ backgroundColor: color }}
            onClick={() => handleUserGuess(color)}
            data-testid="colorOption"
          ></button>
        ))}
      </div>

      {userColor && (
        <span
          style={{ color: userColor }}
          className="font-bold text-2xl"
          data-testid="gameStatus"
        >
          {userColor === randomColor
            ? "You guessed right"
            : "You guessed wrong"}
        </span>
      )}
      <div className="flex flex-row justify-between w-full items-center ">
        <button
          data-testid="newGameButton"
          className="bg-amber-300 px-4 py-2 hover:bg-amber-300/85 transition-all duration-300 rounded-md"
          onClick={() => handleNewGame()}
        >
          New game
        </button>

        <button
          data-testid="nextLevelButton"
          className="bg-indigo-300 px-4 py-2 hover:bg-indigo-300/85 transition-all duration-300 rounded-md"
          onClick={() => handleNextLevel()}
          disabled={userColor != randomColor}
        >
          Next level
        </button>
      </div>
    </div>
  );
};

export default Colors;

// displaying different shades of the same color
