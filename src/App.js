import "./App.css";
import Cell from "./components/Cell";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Game of Life</h1>
      </header>
      <div className="grid">
        <div className="row">
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className="row">
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className="row">
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className="row">
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className="row">
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    </div>
  );
}

export default App;
