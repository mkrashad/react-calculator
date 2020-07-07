import * as React from "react";
import StateInterface from "../Interfaces/StateInterface";

const Display: React.FC<StateInterface> = props => {
  return (
    <React.Fragment>
      <div>PrevValue: {props.prevValue}</div>
      <div id="display">{props.currentValue}</div>
      <div>Sign: {props.sign}</div>
      <div>Total: {props.total}</div>
    </React.Fragment>
  );
};

export default Display;
