import * as React from "react";
import FunctionInterface from "./Interfaces/FunctionInterface";
import StateInterface from "./Interfaces/StateInterface";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";
import Display from "./components/Display";

const App: React.FC<FunctionInterface> = () => {

  // Variables
  const isOperator = /[*/+‑]/g,
    endsWithOperator = /[x+‑/]$/,
    endsWithNegativeSign = /[x/+]‑$/;

  // Initial States
  const [state, setState] = React.useState<StateInterface>({
    currentValue: "0",
    prevValue: "0",
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
    });
  };


  // Operations
  const handleOperators = e => {
    let value = e.target.value;
    setState({
      currentValue: state.currentValue + value,
      prevValue: state.currentValue + value,
    });

  }

  // Decimal
  const handleDecimal = () => {
    let checkForForbiddenDecimals = /^(\d+)[.]$|[*\/+-](\d+)[.]$|[.](\d+)$/
    if (!checkForForbiddenDecimals.test(state.currentValue)) {
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
    let answer = eval(expression)
    setState({
      currentValue: answer,
      prevValue: expression.replace(/\*/g, "x").replace(/\//g, "÷") + "=" + answer
    });
  }

  // Clear Display
  const handleDisplay = () => {
    setState({
      currentValue: "0",
      prevValue: "0",
      evaluated: false
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
        total={state.total}
        currentValue={state.currentValue}
        prevValue={state.prevValue}
      />
    </div>
  );
};

export default App;
