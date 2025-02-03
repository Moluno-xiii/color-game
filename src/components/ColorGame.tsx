import { useReducer } from "react";
import { getRandomColor, getRandomColorObj } from "./utils";
import CTAButtons from "./CTAButtons";
import GameStatus from "./GameStatus";
import ColorGrid from "./ColorGrid";

const randomColorObject = getRandomColorObj();

const initialState = {
  randomColorObject,
  randomColor: getRandomColor(randomColorObject),
  userScore: 0,
  isUserOptionRight: "",
  userColor: "",
};

type Actions =
  | { type: "NEW_GAME" }
  | { type: "NEXT_LEVEL" }
  | { type: "USER_GUESS"; payload: string };

const reducer = (state: typeof initialState, action: Actions) => {
  switch (action.type) {
    case "NEW_GAME":
      return { ...initialState };
    case "NEXT_LEVEL": {
      const newColorObject = getRandomColorObj();
      return {
        ...state,
        randomColorObject: newColorObject,
        randomColor: getRandomColor(newColorObject),
        userColor: "",
      };
    }
    case "USER_GUESS": {
      if (!action.payload) return state;
      const guessedColor = action.payload;
      const isCorrect = guessedColor === state.randomColor;
      return {
        ...state,
        userColor: guessedColor,
        userScore: isCorrect ? state.userScore + 1 : state.userScore,
      };
    }
    default:
      return state;
  }
};

const Colors: React.FC = () => {
  const [{ userColor, userScore, randomColor, randomColorObject }, dispatch] =
    useReducer(reducer, initialState);

  const handleUserGuess = (color: string) => {
    dispatch({ type: "USER_GUESS", payload: color });
    console.log(userColor);
    console.log(randomColor);
  };

  const handleNextLevel = () => {
    dispatch({ type: "NEXT_LEVEL" });
  };

  const handleNewGame = () => {
    dispatch({ type: "NEW_GAME" });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-y-7">
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

      <ColorGrid
        userColor={userColor}
        randomColor={randomColor}
        handleUserGuess={handleUserGuess}
        randomColorObject={randomColorObject}
      />

      {userColor && (
        <GameStatus userColor={userColor} randomColor={randomColor} />
      )}

      <CTAButtons
        userColor={userColor}
        randomColor={randomColor}
        handleNewGame={handleNewGame}
        handleNextLevel={handleNextLevel}
      />
    </div>
  );
};

export default Colors;
