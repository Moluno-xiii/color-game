interface Props {
  handleNewGame: () => void;
  handleNextLevel: () => void;
  userColor: string;
  randomColor: string;
}

const CTAButtons: React.FC<Props> = ({
  handleNewGame,
  handleNextLevel,
  userColor,
  randomColor,
}) => {
  return (
    <div className="cta-container ">
      <button
        data-testid="newGameButton"
        className="cta-button"
        onClick={() => handleNewGame()}
      >
        New game
      </button>
      {userColor === randomColor && (
        <button
          data-testid="nextLevelButton"
          className="cta-button"
          onClick={() => handleNextLevel()}
        >
          Next level
        </button>
      )}
    </div>
  );
};

export default CTAButtons;
