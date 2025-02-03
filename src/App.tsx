import ColorGame from "./components/ColorGame";

function App() {
  return (
    <div className="max-w-4xl mx-auto flex justify-center items-center min-h-dvh py-3 md:py-10 px-2 md:px-4 gap-y-5 flex-col">
      <p className="capitalize italic font-semibold text-4xl">
        Color guessing game
      </p>
      <ColorGame />
    </div>
  );
}

export default App;
