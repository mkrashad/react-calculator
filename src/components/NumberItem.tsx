import * as React from "react";
import MainInterface from "../Interfaces/MainInterface";

const NumberItem: React.FC<MainInterface> = props => {
  const { id, label } = props;
  return (
    <React.Fragment>
      <button id={id} key={label} onClick={props.pressButton}>
        {label}
      </button>
    </React.Fragment>
  );
};

export default NumberItem;
