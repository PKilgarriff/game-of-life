import Row from "./Row";

function Grid({ rows }) {
  return (
    <div className="grid">
      {rows.map((row) => (
        <Row cells={row} />
      ))}
    </div>
  );
}

export default Grid;
