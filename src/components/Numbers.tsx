import * as React from "react";
import FunctionInterface from "../Interfaces/FunctionInterface";

const Buttons: React.FC<FunctionInterface> = ({ handleNumbers }) => {
  return (
    <React.Fragment>
      <button id="zero" onClick={handleNumbers}>
        0
      </button>
      <button id="one" onClick={handleNumbers}>
        1
      </button>
      <button id="two" onClick={handleNumbers}>
        2
      </button>
      <button id="three" onClick={handleNumbers}>
        3
      </button>
      <button id="four" onClick={handleNumbers}>
        4
      </button>
      <button id="five" onClick={handleNumbers}>
        5
      </button>
      <button id="six" onClick={handleNumbers}>
        6
      </button>
      <button id="seven" onClick={handleNumbers}>
        7
      </button>
      <button id="eight" onClick={handleNumbers}>
        8
      </button>
      <button id="nine" onClick={handleNumbers}>
        9
      </button>
    </React.Fragment>
  );
};

export default Buttons;
