import * as React from "react";
import { useState, useCallback } from "react"
import { useStoreState, useStoreActions } from "./store"
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";
import Display from "./components/Display";

const App: React.FC = () => {

  const buttons = useStoreState(state => state.buttons);
  // // Initial States
  // const [state, setState] = React.useState<state>({
  //   currentValue: "0",
  //   prevValue: "0",
  //   formula: "",
  // });



  const handle = useStoreActions(actions => actions.buttons.handle);

  const [text, setText] = useState('');


  const handleNumbers = useCallback(() => {
    handle(text); 
    setText('');
  }, [handle, setText, text]);

  // Operations
  const handleOperators = e => {
    // const value = e.target.value;
    // const repeatedOperators = /[x÷+-]{2,}/;
    // let calculation;
    // setState({
    //   currentValue: state.currentValue + value,
    //   prevValue: state.currentValue,
    //   formula: state.currentValue,

    // });
    // // Checking repeated operators in currentValue
    // const reg = new RegExp('\\' + value);
    // if (reg.test(state.currentValue)) {
    //   setState({
    //     currentValue: state.formula + value,
    //     prevValue: state.currentValue,

    //   });
    // }
    // // Checking operators in currentValue
    // if (repeatedOperators.test(state.currentValue)) {
    //   calculation = state.currentValue.replace(repeatedOperators, '');
    //   setState({
    //     currentValue: calculation + value,
    //     prevValue: state.currentValue,
    //   });
    //   console.log(state.currentValue)
    // }
  }

  // Decimal
  const handleDecimal = () => {
    // const repeatedDecimals = /^(\d+)[.]$|[*\/+-](\d+)[.]$|[.](\d+)$/
    // if (!repeatedDecimals.test(state.currentValue)) {
    //   setState({
    //     currentValue: state.currentValue + ".",
    //     prevValue: state.currentValue
    //   })
    // }
  }


  // Evaluate
  const handleEvaluate = () => {
    // let expression = state.currentValue;
    // expression = expression.replace(/x/g, "*").replace(/÷/g, "/");
    // const answer = eval(expression)
    // setState({
    //   currentValue: answer,
    //   prevValue: expression.replace(/\*/g, "x").replace(/\//g, "÷") + "=" + answer
    // });
  }

  // Clear Display
  const handleDisplay = () => {
  //   setState({
  //     currentValue: "0",
  //     prevValue: "0"
  //   });
  };



  return (
    <div style={{ marginLeft: 500 }}>
      <Numbers handleNumbers={handleNumbers} />
      <Operators
        handleDecimal={handleDecimal}
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
