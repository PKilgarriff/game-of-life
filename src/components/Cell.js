import { useState } from "react";

const trueOrFalse = () => {
  const number = Math.round(Math.random());
  return number === 1 ? true : false;
};

function Cell({ live }) {
  // const [live, setLive] = useState(trueOrFalse());

  // const toggleLive = () => {
  //   setLive((prevData) => !prevData);
  // };

  return (
    <span
      className={`${live ? "live" : "dead"} cell`}
      // onClick={toggleLive}
    ></span>
  );
}

export default Cell;
