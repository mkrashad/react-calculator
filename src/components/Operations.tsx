import * as React from "react";
import FunctionInterface from "../Interfaces/FunctionInterface";

const OperationItem: React.FC<FunctionInterface> = (props) => {
  return (
    <React.Fragment>
      <button id="equals" onClick={props.arithmOperation}>
        =
      </button>
      <button id="add" onClick={props.arithmOperation}>
        +
      </button>
      <button id="subtract" onClick={props.arithmOperation}>
        -
      </button>
      <button id="multiply" onClick={props.arithmOperation}>
        *
      </button>
      <button id="divide" onClick={props.arithmOperation}>
        /
      </button>
      <button id="decimal" onClick={props.arithmOperation}>
        .
      </button>
      <button id="clear" onClick={props.clearDisplay}>
        clear
      </button>
    </React.Fragment>
  );
};

export default OperationItem;
