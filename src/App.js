import "./App.css";
import Grid from "./components/Grid";

const cells = [
  [1, 0, 1, 1, 0, 1, 0],
  [0, 0, 1, 1, 0, 1, 0],
  [0, 0, 1, 1, 0, 1, 0],
  [1, 1, 0, 1, 0, 1, 0],
  [1, 0, 1, 1, 0, 1, 0],
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Game of Life</h1>
      </header>
      <Grid rows={cells} />
    </div>
  );
}

export default App;
