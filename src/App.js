import "./App.css";
import Grid from "./components/Grid";

const oneOrZero = () => Math.round(Math.random());

const generateCells = (rows, columns) => {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < columns; j++) {
      row.push(oneOrZero());
    }
    matrix.push(row);
  }
  return matrix;
};

const cells = generateCells(15, 15);

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
