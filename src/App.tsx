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
  });


  // Numbers
  const handleNumbers = e => {
    const current = state.currentValue, value = e.target.value
    setState({
      currentValue:
        current === "0"
          ? value
          : current + value,
      prevValue: value
    });
  };


  // Operations
  const handleOperators = e => {
    const value = e.target.value;
    const checkForExistingOperators = /[*\/+-]{2,}/;
    let calculation;
    setState({
      prevValue: state.currentValue,
      currentValue: state.currentValue + value,
    });
    const checkForRepeatedOperators = new RegExp('\\' + value);
    if (checkForRepeatedOperators.test(state.currentValue)) {
      setState({
        currentValue: state.prevValue + e.target.value,
      });

      console.log("Repeated " + calculation + " " + e.target.value)
    }

    if (checkForExistingOperators.test(state.currentValue)) {
      calculation = state.currentValue.replace(checkForExistingOperators, '');
      setState({
        currentValue: calculation + e.target.value,
      });
      console.log("exist" + calculation)
    }

  }

  // Decimal
  const handleDecimal = () => {
    const checkForForbiddenDecimals = /^(\d+)[.]$|[*\/+-](\d+)[.]$|[.](\d+)$/
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
