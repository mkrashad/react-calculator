import * as React from "react";
import ButtonsInteface from "../Interfaces/ButtonsInterface";

const OperationItem: React.FC<ButtonsInteface> = props => {
  
  return (
    <React.Fragment>
      {/* <button id="equals" onClick={() => clearDisplay}>=</button>
      <button id="add" onClick={() => clearDisplay}>+</button>
      <button id="subtract" onClick={() => clearDisplay}>-</button>
      <button id="multiply" onClick={() => clearDisplay}>*</button>
      <button id="divide" onClick={() => clearDisplay}>/</button>
      <button id="decimal" onClick={() => clearDisplay}>.</button> */}
      <button id="clear" onClick={props.clearDisplay}>
        clear
      </button>
    </React.Fragment>
  );
};

export default OperationItem;
