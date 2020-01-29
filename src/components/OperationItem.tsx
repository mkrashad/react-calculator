import * as React from "react";
import MainInterface from "../Interfaces/MainInterface";

const OperationItem: React.FC<MainInterface> = props => {
  return (
    <React.Fragment>
      <button id="equals" onClick={props.arithmOp}>
        =
      </button>
      <button id="add" onClick={props.arithmOp}>
        +
      </button>
      <button id="subtract" onClick={props.arithmOp}>
        -
      </button>
      <button id="multiply" onClick={props.arithmOp}>
        *
      </button>
      <button id="divide" onClick={props.arithmOp}>
        /
      </button>
      <button id="decimal" onClick={props.arithmOp}>
        .
      </button>
      <button id="clear" onClick={props.clearDisplay}>
        clear
      </button>
    </React.Fragment>
  );
};

export default OperationItem;
