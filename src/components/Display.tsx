import * as React from "react";
import { useStoreState } from '../hooks';

const Display: React.FC = () => {
  const buttons = useStoreState(state => state.buttons);
  return (
    <div className="display-main">
      <div className="display-prevValue">{buttons.prevValue}</div>
      <div id="display">{buttons.currentValue}</div>
    </div>
  );
};

export default Display;
