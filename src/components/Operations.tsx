import * as React from "react";
import FunctionInterface from "../Interfaces/FunctionInterface";

const OperationItem: React.FC<FunctionInterface> = props => {
  return (
    <React.Fragment>
      <button id="equals" onClick={props.handeleButton}>
        =
      </button>
      <button id="add" onClick={props.handeleButton}>
        +
      </button>
      <button id="subtract" onClick={props.handeleButton}>
        -
      </button>
      <button id="multiply" onClick={props.handeleButton}>
        *
      </button>
      <button id="divide" onClick={props.handeleButton}>
        /
      </button>
      <button id="decimal" onClick={props.handeleButton}>
        .
      </button>
      <button id="clear" onClick={props.clearDisplay}>
        clear
      </button>
    </React.Fragment>
  );
};

export default OperationItem;
