import * as React from "react";
import UserInterface from "../Interfaces/UserInterface";

const NumberItem: React.FC<UserInterface> = props => {
  const { id, label } = props;
  return (
    <React.Fragment>
      <button id={id}>{label}</button>
    </React.Fragment>
  );
};

export default NumberItem;
