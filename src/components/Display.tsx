import * as React from "react";
import StateInterface from "../Interfaces/StateInterface";

const Display: React.FC<StateInterface> = props => {
  return (
    <React.Fragment>
      <div id="display">{props.prevValue}</div>
      <div>{props.currentValue}</div>
      <div>{props.total}</div>
    </React.Fragment>
  );
};

export default Display;
