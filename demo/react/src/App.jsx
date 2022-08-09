import tailwindclass from "tailwindclass";

function App() {
  return (
    <div className={tailwindclass({
      default: "m-[100px]"
    })} >
      <h1
        className={tailwindclass({
          default: "text-[red]",
          hover: ["text-[blue]","bg-[#eee]"],
          _2xl: ["text-[purple]"],
        })}
      >
        Hello world!
      </h1>
      <button className={tailwindclass({
        default: "border-[1px] p-2 rounded-[5px] px-4 transition",
        hover: ["bg-[#eee]"]
      })} >
        Hello
      </button>
    </div>
  );
}

export default App;