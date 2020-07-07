import * as React from "react";
import FunctionInterface from "../Interfaces/FunctionInterface";

const OperationItem: React.FC<FunctionInterface> = (props) => {
  return (
    <React.Fragment>
      <button id="equals" onClick={props.handeleEvaluate}>
        =
      </button>
      <button id="add" onClick={props.handeleOperation}>
        +
      </button>
      <button id="subtract" onClick={props.handeleOperation}>
        -
      </button>
      <button id="multiply" onClick={props.handeleOperation}>
        *
      </button>
      <button id="divide" onClick={props.handeleOperation}>
        /
      </button>
      <button id="decimal" onClick={props.handeleOperation}>
        .
      </button>
      <button id="clear" onClick={props.handeleDisplay}>
        clear
      </button>
    </React.Fragment>
  );
};

export default OperationItem;
