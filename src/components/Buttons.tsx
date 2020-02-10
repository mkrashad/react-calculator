import * as React from "react";
import MainInterface from "../Interfaces/MainInterface";

const Buttons: React.FC<MainInterface> = props => {
  return (
    <React.Fragment>
      <button id="zero" onClick={props.pressButton}>
        0
      </button>
      <button id="one" onClick={props.pressButton}>
        1
      </button>
      <button id="two" onClick={props.pressButton}>
        2
      </button>
      <button id="three" onClick={props.pressButton}>
        3
      </button>
      <button id="four" onClick={props.pressButton}>
        4
      </button>
      <button id="five" onClick={props.pressButton}>
        5
      </button>
      <button id="six" onClick={props.pressButton}>
        6
      </button>
      <button id="seven" onClick={props.pressButton}>
        7
      </button>
      <button id="eight" onClick={props.pressButton}>
        8
      </button>
      <button id="nine" onClick={props.pressButton}>
        9
      </button>
    </React.Fragment>
  );
};

export default Buttons;
