interface Props {
  randomColorObject: { variants: string[] };
  userColor: string;
  randomColor: string;
  handleUserGuess: (color: string) => void;
}

const ColorGrid: React.FC<Props> = ({
  randomColorObject,
  randomColor,
  userColor,
  handleUserGuess,
}) => {
  return (
    <div className="grid grid-cols-2 w-full md:grid-cols-3 md:gap-10 gap-5">
      {randomColorObject.variants.map((color) => (
        <button
          key={color}
          disabled={userColor === randomColor}
          className={`
rounded-lg py-6 px-12 capitalize border border-white hover:scale-[1.1] md:hover:scale-[1.2] transition-all duration-200`}
          style={{ backgroundColor: color }}
          onClick={() => handleUserGuess(color)}
          data-testid="colorOption"
        ></button>
      ))}
    </div>
  );
};

export default ColorGrid;
