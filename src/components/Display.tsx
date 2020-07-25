import * as React from "react";
import { useStoreState } from '../hooks';

const Display: React.FC = () => {
  const buttons = useStoreState(state => state.buttons);
  return (
    <React.Fragment>
      <div>PrevValue: {buttons.prevValue}</div>
      <div id="display">{buttons.currentValue}</div>
    </React.Fragment>
  );
};

export default Display;
