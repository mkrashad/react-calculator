import * as React from "react";
import { useCallback } from 'react';
import { useStoreActions } from '../hooks';

const Operators: React.FC = () => {
  const operators = useStoreActions(actions => actions.buttons.operators);
  const decimal = useStoreActions(actions => actions.buttons.decimal);
  const evaluate = useStoreActions(actions => actions.buttons.evaluate);
  const clear = useStoreActions(actions => actions.buttons.clear);

  // Operations
  const handleOperators = useCallback((e) => {
    const value = e.target.value
    operators(value);
  }, [operators]);

  // Decimal
  const handleDecimal = useCallback(() => {
    decimal("");
  }, [decimal]);

  // Evaluate
  const handleEvaluate = useCallback(() => {
    evaluate("");
  }, [evaluate]);


  // Clear
  const handleClear = useCallback(() => {
    clear("");
  }, [clear]);

  return (
    <React.Fragment>
      <button id="equals" onClick={handleEvaluate} value="=">
        =
      </button>
      <button id="add" onClick={handleOperators} value="+">
        +
      </button>
      <button id="subtract" onClick={handleOperators} value="-">
        -
      </button>
      <button id="multiply" onClick={handleOperators} value="x">
        x
      </button>
      <button id="divide" onClick={handleOperators} value="÷">
        ÷
      </button>
      <button id="decimal" onClick={handleDecimal} value=".">
        .
      </button>
      <button id="clear" onClick={handleClear}>
        C
      </button>
    </React.Fragment>
  );
};

export default Operators;
