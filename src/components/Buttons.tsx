import * as React from "react";
import FunctionInterface from "../Interfaces/FunctionInterface";

const Buttons: React.FC<FunctionInterface> = ({ handeleButton }) => {
  return (
    <React.Fragment>
      <button id="zero" onClick={handeleButton}>
        0
      </button>
      <button id="one" onClick={handeleButton}>
        1
      </button>
      <button id="two" onClick={handeleButton}>
        2
      </button>
      <button id="three" onClick={handeleButton}>
        3
      </button>
      <button id="four" onClick={handeleButton}>
        4
      </button>
      <button id="five" onClick={handeleButton}>
        5
      </button>
      <button id="six" onClick={handeleButton}>
        6
      </button>
      <button id="seven" onClick={handeleButton}>
        7
      </button>
      <button id="eight" onClick={handeleButton}>
        8
      </button>
      <button id="nine" onClick={handeleButton}>
        9
      </button>
    </React.Fragment>
  );
};

export default Buttons;
