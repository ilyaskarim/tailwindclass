import tailwindclass from "tailwindclass";

function App() {
  return (
    <div>
      <div className="group">
        <button className="group-hover:bg-[red]">hover</button>
      </div>
      <div
        className={tailwindclass({
          default: "group",
        })}
      >
        <button
          className={tailwindclass({
            ["group-hover"]: ["bg-[red]"],
          })}
        >
          hover
        </button>
      </div>
    </div>
  );
}

export default App;
