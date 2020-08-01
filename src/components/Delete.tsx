import * as React from "react";
import { useCallback, Fragment } from 'react';
import { useStoreActions } from '../hooks';


const Delete: React.FC = () => {
  const clear = useStoreActions(actions => actions.buttons.clear);

  // Clear
  const handleClear = useCallback(() => {
    clear("");
  }, [clear]);


  return (
    <div className="grid-operators">
      <button id="clear" onClick={handleClear}>
        C
      </button>
      <button id="del">
        del
      </button>
      <button id="procent">
        %
      </button>
    </div>
  );
};

export default Delete;
