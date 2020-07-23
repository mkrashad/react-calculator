import * as React from "react";
import { useState, useCallback } from "react"
import { useStoreState, useStoreActions } from "./store"
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";
import Display from "./components/Display";

const App: React.FC = () => {

  const [state, setSate] = useState('');
  const buttons = useStoreState(state => state.buttons);
  const numbers = useStoreActions(actions => actions.buttons.numbers);
  const operators = useStoreActions(actions => actions.buttons.operators);
  const decimal = useStoreActions(actions => actions.buttons.decimal);
  const evaluate = useStoreActions(actions => actions.buttons.evaluate);
  const clear = useStoreActions(actions => actions.buttons.clear);

  // Numbers
  const handleNumbers = useCallback((e) => {
    const value = e.target.value
    numbers(value);
    setSate(value);
  }, [numbers, setSate]);

  // Operations
  const handleOperators = useCallback((e) => {
    const value = e.target.value
    operators(value);
    setSate(value);
  }, [operators, setSate]);


  // Decimal
  const handleClear = useCallback(() => {
    decimal("");
    setSate("");
  }, [decimal, setSate]);


  // Evaluate
  const handleEvaluate = useCallback(() => {
    evaluate("");
    setSate("");
  }, [evaluate, setSate]);

  // Clear Display
  const handleDisplay = useCallback(() => {
    clear("");
    setSate("");
  }, [clear, setSate]);



  return (
    <div style={{ marginLeft: 500 }}>
      <Numbers handleNumbers={handleNumbers} />
      <Operators
        handleDecimal={handleClear}
        handleDisplay={handleDisplay}
        handleOperators={handleOperators}
        handleEvaluate={handleEvaluate}

      />
      <Display
        currentValue={buttons.currentValue}
        prevValue={buttons.prevValue}
      />
    </div>
  );
};

export default App;
