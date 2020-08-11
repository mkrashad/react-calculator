import * as React from "react";
import { useCallback } from 'react';
import { useStoreActions } from '../hooks';

const Operators: React.FC = () => {
  const operators = useStoreActions(actions => actions.buttons.operators);
  const evaluate = useStoreActions(actions => actions.buttons.evaluate);

  // Operations
  const handleOperators = useCallback((e) => {
    const value = e.target.value
    operators(value);
  }, [operators]);


  // Evaluate
  const handleEvaluate = useCallback(() => {
    evaluate("");
  }, [evaluate]);


  return (
    <div className="operators-item">
      <button id="divide" onClick={handleOperators} value="÷">
        ÷
      </button>
      <button id="multiply" onClick={handleOperators} value="x">
        x
      </button>
      <button id="add" onClick={handleOperators} value="+">
        +
      </button>
      <button id="subtract" onClick={handleOperators} value="-">
        -
      </button>
      <button id="equals" onClick={handleEvaluate} value="=">
        =
      </button>
    </div>
  );
};

export default Operators;
