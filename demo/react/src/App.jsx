import tailwindclass from "tailwindclass";

function App() {
  return (
    <div>
      <h1
        className={tailwindclass({
          default: "text-[red]",
          hover: ["text-[blue]"],
          _2xl: ["text-[purple]"]
        })}
      >
        Hello world!
      </h1>
    </div>
  );
}

export default App;