import * as React from "react";
import MainInterface from "../Interfaces/MainInterface";

const Display: React.FC<MainInterface> = props => {
  
  return (
    <div>
      <div id="display">{props.numbers}</div>
    </div>
  );
};

export default Display;
