import * as React from "react";

const OperationItem: React.FC = props => {
  return (
    <React.Fragment>
      <button id="equals">=</button>
      <button id="add">+</button>
      <button id="subtract">-</button>
      <button id="multiply">*</button>
      <button id="divide">/</button>
      <button id="decimal">.</button>
      <button id="clear">clear</button>
    </React.Fragment>
  );
};

export default OperationItem;
