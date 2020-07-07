import * as React from "react";
import FunctionInterface from "../Interfaces/FunctionInterface";

const Buttons: React.FC<FunctionInterface> = ({ handeleNumbers }) => {
  return (
    <React.Fragment>
      <button id="zero" onClick={handeleNumbers}>
        0
      </button>
      <button id="one" onClick={handeleNumbers}>
        1
      </button>
      <button id="two" onClick={handeleNumbers}>
        2
      </button>
      <button id="three" onClick={handeleNumbers}>
        3
      </button>
      <button id="four" onClick={handeleNumbers}>
        4
      </button>
      <button id="five" onClick={handeleNumbers}>
        5
      </button>
      <button id="six" onClick={handeleNumbers}>
        6
      </button>
      <button id="seven" onClick={handeleNumbers}>
        7
      </button>
      <button id="eight" onClick={handeleNumbers}>
        8
      </button>
      <button id="nine" onClick={handeleNumbers}>
        9
      </button>
    </React.Fragment>
  );
};

export default Buttons;
