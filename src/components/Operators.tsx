import * as React from "react";
import FunctionInterface from "../Interfaces/FunctionInterface";

const OperationItem: React.FC<FunctionInterface> = (props) => {
  return (
    <React.Fragment>
      <button id="equals" onClick={props.handleEvaluate}>
        =
      </button>
      <button id="add" onClick={props.handleOperators}>
        +
      </button>
      <button id="subtract" onClick={props.handleOperators}>
        -
      </button>
      <button id="multiply" onClick={props.handleOperators}>
        x
      </button>
      <button id="divide" onClick={props.handleOperators}>
        /
      </button>
      <button id="decimal" onClick={props.handleDecimal}>
        .
      </button>
      <button id="clear" onClick={props.handleDisplay}>
        clear
      </button>
    </React.Fragment>
  );
};

export default OperationItem;
