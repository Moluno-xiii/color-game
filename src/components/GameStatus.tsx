interface Props {
  userColor: string;
  randomColor: string;
}

const GameStatus: React.FC<Props> = ({ userColor, randomColor }) => {
  return (
    <span
      key={Date.now()}
      style={{ color: "white" }}
      className={`
game-status
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
