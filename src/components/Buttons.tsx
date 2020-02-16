import * as React from "react";
import FunctionInterface from "../Interfaces/FunctionInterface";

const Buttons: React.FC<FunctionInterface> = props => {
  return (
    <React.Fragment>
      <button id="zero" onClick={props.handeleButton}>
        0
      </button>
      <button id="one" onClick={props.handeleButton}>
        1
      </button>
      <button id="two" onClick={props.handeleButton}>
        2
      </button>
      <button id="three" onClick={props.handeleButton}>
        3
      </button>
      <button id="four" onClick={props.handeleButton}>
        4
      </button>
      <button id="five" onClick={props.handeleButton}>
        5
      </button>
      <button id="six" onClick={props.handeleButton}>
        6
      </button>
      <button id="seven" onClick={props.handeleButton}>
        7
      </button>
      <button id="eight" onClick={props.handeleButton}>
        8
      </button>
      <button id="nine" onClick={props.handeleButton}>
        9
      </button>
    </React.Fragment>
  );
};

export default Buttons;
