import * as React from "react";
import FunctionInterface from "../Interfaces/FunctionInterface";

const Buttons: React.FC<FunctionInterface> = ({ handleNumbers }) => {
  return (
    <React.Fragment>
      <button id="zero" onClick={handleNumbers} value="0">
        0
      </button>
      <button id="one" onClick={handleNumbers} value="1">
        1
      </button>
      <button id="two" onClick={handleNumbers} value="2">
        2
      </button>
      <button id="three" onClick={handleNumbers} value="3">
        3
      </button>
      <button id="four" onClick={handleNumbers} value="4">
        4
      </button>
      <button id="five" onClick={handleNumbers} value="5">
        5
      </button>
      <button id="six" onClick={handleNumbers} value="6">
        6
      </button>
      <button id="seven" onClick={handleNumbers} value="7">
        7
      </button>
      <button id="eight" onClick={handleNumbers} value="8">
        8
      </button>
      <button id="nine" onClick={handleNumbers} value="9">
        9
      </button>
    </React.Fragment>
  );
};

export default Buttons;
