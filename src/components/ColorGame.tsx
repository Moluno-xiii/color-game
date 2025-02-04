import { useEffect, useReducer } from "react";
import { getRandomColor, getRandomColorArray } from "./utils";
import CTAButtons from "./CTAButtons";
import GameStatus from "./GameStatus";
import ColorGrid from "./ColorGrid";

const randomColorArray = getRandomColorArray();

const initialState = {
  randomColorArray,
  randomColor: getRandomColor(randomColorArray),
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
      const newColorObject = getRandomColorArray();
      return {
        ...state,
        randomColorArray: newColorObject,
        randomColor: getRandomColor(newColorObject),
        userColor: "",
      };
    }
    case "USER_GUESS": {
      if (!action.payload) return state;
      const guessedColor = action.payload;
      const isGuessCorrect = guessedColor === state.randomColor;
      return {
        ...state,
        userColor: guessedColor,
        userScore: isGuessCorrect ? state.userScore + 1 : state.userScore,
      };
    }
    default:
      return state;
  }
};

const ColorGame: React.FC = () => {
  const [{ userColor, userScore, randomColor, randomColorArray }, dispatch] =
    useReducer(reducer, initialState);

  const handleUserGuess = (color: string) => {
    dispatch({ type: "USER_GUESS", payload: color });
  };

  const handleNewGame = () => {
    dispatch({ type: "NEW_GAME" });
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "NEXT_LEVEL" });
    }, 1000);
  }, [userScore]);

  return (
    <div className="colorGameContainer">
      <div
        style={{ backgroundColor: randomColor }}
        className="colorBox"
        data-testid="colorBox"
      ></div>
      <span data-testid="score">Your score : {userScore}</span>
      <span className="gameInstructions" data-testid="gameInstructions">
        Guess the correct color!
      </span>

      <ColorGrid
        userColor={userColor}
        randomColor={randomColor}
        handleUserGuess={handleUserGuess}
        colorArray={randomColorArray}
      />

      {userColor && (
        <GameStatus userColor={userColor} randomColor={randomColor} />
      )}

      <CTAButtons handleNewGame={handleNewGame} />
    </div>
  );
};

export default ColorGame;
