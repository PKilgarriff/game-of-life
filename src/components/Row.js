import Cell from "./Cell";

function Row({ cells }) {
  return (
    <div className="row">
      {cells.map((cell) => (
        <Cell live={cell == 1} />
      ))}
    </div>
  );
}

export default Row;
