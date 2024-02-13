import { BoardDataProvider } from "./contexts/BoardDataContext";
import { Board } from "./components";

const App = () => {
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      <BoardDataProvider>
        <Board />
      </BoardDataProvider>
    </div>
  );
};

export default App;
