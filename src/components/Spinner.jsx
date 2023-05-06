import React from "react";
import spinner from "../assets/spinner.gif";
const Spinner = () => {
  return (
    <>
      <img className="w-[200px] m-auto" src={spinner} alt="loading..." />
    </>
  );
};

export default Spinner;
