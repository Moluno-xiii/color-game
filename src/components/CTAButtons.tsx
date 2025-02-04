interface Props {
  handleNewGame: () => void;
}

const CTAButtons: React.FC<Props> = ({ handleNewGame }) => {
  return (
    <div className="cta-container ">
      <button
        data-testid="newGameButton"
        className="cta-button"
        onClick={() => handleNewGame()}
      >
        New game
      </button>
    </div>
  );
};

export default CTAButtons;
