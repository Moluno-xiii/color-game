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
    <div className="flex text-[#4b4747e9] flex-row justify-between w-full items-center ">
      <button
        data-testid="newGameButton"
        className="bg-white px-4 py-2 hover:bg-white/85 transition-all duration-300 rounded-md"
        onClick={() => handleNewGame()}
      >
        New game
      </button>
      {userColor === randomColor && (
        <button
          data-testid="nextLevelButton"
          className="bg-white px-4 py-2 hover:bg-white/85 transition-all duration-300 rounded-md"
          onClick={() => handleNextLevel()}
        >
          Next level
        </button>
      )}
    </div>
  );
};

export default CTAButtons;
