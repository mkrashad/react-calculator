import * as React from "react";
import FunctionInterface from "../Interfaces/FunctionInterface";

const OperationItem: React.FC<FunctionInterface> = (props) => {
  return (
    <React.Fragment>
      <button id="equals" onClick={props.handleEvaluate} value="=">
        =
      </button>
      <button id="add" onClick={props.handleOperators} value="+">
        +
      </button>
      <button id="subtract" onClick={props.handleOperators} value="-">
        -
      </button>
      <button id="multiply" onClick={props.handleOperators} value="x">
        x
      </button>
      <button id="divide" onClick={props.handleOperators} value="÷">
      ÷
      </button>
      <button id="decimal" onClick={props.handleDecimal} value=".">
        .
      </button>
      <button id="clear" onClick={props.handleDisplay}>
        C
      </button>
    </React.Fragment>
  );
};

export default OperationItem;
