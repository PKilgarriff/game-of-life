import { useState } from "react";

const trueOrFalse = () => {
  const number = Math.floor(Math.random() * 10);
  console.log(`Number: ${number}`);
  return number < 5 ? true : false;
};

function Cell() {
  const [live, setLive] = useState(trueOrFalse());

  const toggleLive = () => {
    setLive((prevData) => !prevData);
  };
  return (
    <span
      className={`${live ? "live" : "dead"} cell`}
      onClick={toggleLive}
    ></span>
  );
}

export default Cell;
