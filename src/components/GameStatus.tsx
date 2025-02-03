interface Props {
  userColor: string;
  randomColor: string;
}

const GameStatus: React.FC<Props> = ({ userColor, randomColor }) => {
  return (
    <span
      key={userColor}
      style={{ color: "white" }}
      className={`
font-bold text-2xl transition-all duration-500
${userColor === randomColor ? "animate-celebrate" : "animate-fade-out"}
`}
      data-testid="gameStatus"
    >
      {userColor === randomColor
        ? "You guessed right :)"
        : "You guessed wrong :("}
    </span>
  );
};

export default GameStatus;
