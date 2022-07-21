import Row from "./Row";

function Grid({ rows }) {
  return (
    <div className="grid">
      {rows.map((row, index) => (
        <Row key={`row${index}`} cells={row} />
      ))}
    </div>
  );
}

export default Grid;
