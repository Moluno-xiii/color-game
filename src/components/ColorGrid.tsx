interface Props {
  colorArray: { variants: string[] };
  userColor: string;
  randomColor: string;
  handleUserGuess: (color: string) => void;
}

const ColorGrid: React.FC<Props> = ({
  colorArray,
  randomColor,
  userColor,
  handleUserGuess,
}) => {
  return (
    <div className="color-grid-container">
      {colorArray.variants.map((color) => (
        <button
          key={color}
          disabled={userColor === randomColor}
          className="color-grid-button"
          style={{ backgroundColor: color }}
          onClick={() => handleUserGuess(color)}
          data-testid="colorOption"
        ></button>
      ))}
    </div>
  );
};

export default ColorGrid;
