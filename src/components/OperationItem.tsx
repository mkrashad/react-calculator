import * as React from "react";
import MainInterface from "../Interfaces/MainInterface";

const OperationItem: React.FC<MainInterface> = props => {
  return (
    <React.Fragment>
      <button id="equals" onClick={props.pressButton}>
        =
      </button>
      <button id="add" onClick={props.pressButton}>
        +
      </button>
      <button id="subtract" onClick={props.pressButton}>
        -
      </button>
      <button id="multiply" onClick={props.pressButton}>
        *
      </button>
      <button id="divide" onClick={props.pressButton}>
        /
      </button>
      <button id="decimal" onClick={props.pressButton}>
        .
      </button>
      <button id="clear" onClick={props.pressButton}>
        clear
      </button>
    </React.Fragment>
  );
};

export default OperationItem;
