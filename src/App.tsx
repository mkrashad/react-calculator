import * as React from "react";
import FunctionInterface from "./Interfaces/FunctionInterface";
import StateInterface from "./Interfaces/StateInterface";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";
import Display from "./components/Display";

const App: React.FC<FunctionInterface> = () => {

  // Initial States
  const [state, setState] = React.useState<StateInterface>({
    currentValue: "0",
    prevValue: "0",
    formula: "",
  });


  // Numbers
  const handleNumbers = e => {
    const current = state.currentValue, value = e.target.value
    setState({
      currentValue:
        current === "0"
          ? value
          : current + value,
      prevValue: current === "0"
        ? value
        : current + value,
      formula: value,
    });
    // console.log(value)
  };

  // Operations
  const handleOperators = e => {
    const value = e.target.value;
    const repeatedOperators = /[x÷+-]{2,}/;
    let calculation;
    setState({
      currentValue: state.currentValue + value,
      prevValue: state.currentValue,
      formula: state.currentValue,
    });

    // Checking repeated operators in currentValue
    const reg = new RegExp('\\' + value);
    if (reg.test(state.currentValue)) {
      setState({
        currentValue: state.currentValue.replace(/\++/g, '+')
          .replace(/\--/g, '-')
          .replace(/\xx/g, 'x')
          .replace(/\÷÷/g, '÷'),
        prevValue: state.currentValue,
      });
      console.log(state.currentValue)
    }
    // // Checking operators in currentValue
    if (repeatedOperators.test(state.currentValue)) {
      calculation = state.currentValue.replace(repeatedOperators, '');
      setState({
        currentValue: calculation + value,
        prevValue: state.currentValue,
      });
    }
  }

  // Decimal
  const handleDecimal = () => {
    const repeatedDecimals = /^(\d+)[.]$|[*\/+-](\d+)[.]$|[.](\d+)$/
    if (!repeatedDecimals.test(state.currentValue)) {
      setState({
        currentValue: state.currentValue + ".",
        prevValue: state.currentValue
      })
    }
  }


  // Evaluate
  const handleEvaluate = () => {
    let expression = state.currentValue;
    expression = expression.replace(/x/g, "*").replace(/÷/g, "/");
    const answer = eval(expression)
    setState({
      currentValue: answer,
      prevValue: expression.replace(/\*/g, "x").replace(/\//g, "÷") + "=" + answer
    });
  }

  // Clear Display
  const handleDisplay = () => {
    setState({
      currentValue: "0",
      prevValue: "0"
    });
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
        currentValue={state.currentValue}
        prevValue={state.prevValue}
      />
    </div>
  );
};

export default App;
