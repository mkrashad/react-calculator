import * as React from "react";
import FunctionInterface from "./Interfaces/FunctionInterface";
import StateInterface from "./Interfaces/StateInterface";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";
import Display from "./components/Display";

const App: React.FC<FunctionInterface> = () => {

  // Variables
  const isOperator = /[*/+‑]/,
    endsWithOperator = /[x+‑/]$/,
    endsWithNegativeSign = /[x/+]‑$/;


  // Initial States
  const [numbers, setNumber] = React.useState<StateInterface>({
    currentValue: "0",
    prevValue: "0",
    formula: "",
    sign: "",
  });


  const maxDigitWarning = () => {
    setNumber({
      currentValue: "Digit Limit Met",
      prevValue: numbers.currentValue
    });
    setTimeout(() => setNumber({ currentValue: numbers.prevValue }), 1000);
  }

  // Numbers
  const handleNumbers = e => {
    const current = numbers.currentValue, target = e.target.innerHTML
    setNumber({
      currentValue:
        current === "0"
          ? target
          : current + target,
      prevValue: current === "0"
        ? target
        : current + target,
      sign: ""
    });

  };

  // Operations
  const handleOperators = e => {
    let target = e.target.innerHTML;
    let sign = numbers.sign;
    if ((target === "+") || (target === "-") || (target === "x") || (target === "/") || (target === ".")) {
      setNumber({
        currentValue: numbers.currentValue + target,
        prevValue: numbers.currentValue + target,
        sign: sign
      });
    }
  }


  // Decimal
  const handleDecimal = e => {
    const decimal = e.target.innerHTML
    if (!numbers.currentValue.includes(".")) {
      setNumber({
        currentValue: numbers.currentValue.match(/(-?\d+\.?\d*)$/)[0] + ".",
        prevValue: numbers.currentValue
      })
      console.log("yes")
    }
  }


  // Evaluate
  const handleEvaluate = () => {
    // let expression
    // if (numbers.currentValue.length > 21) {
    //   maxDigitWarning()

    // }
    // else {
    //   while (endsWithOperator.test(numbers.currentValue)) {
    //     expression = numbers.currentValue.slice(0, -1);
    //   }
    //   //   const mutiply = numbers.currentValue.replace(/x/g, "*")
    //   //   const result = eval(mutiply)
    //   //   setNumber({
    //   //     currentValue: result
    //   //   })
    //   // }
    //   const result = eval(expression)
    //   setNumber({
    //     currentValue: result
    //   })

    // }
    if (!numbers.currentValue.includes("Limit")) {
      let expression = numbers.currentValue;
      while (endsWithOperator.test(expression)) {
        expression = expression.slice(0, -1);
      }
      expression = expression.replace(/x/g, "*").replace(/‑/g, "-");
      let answer = eval(numbers.currentValue.replace(/x/g, "*"))
      setNumber({
        currentValue: answer,
        prevValue:
          expression.replace(/\*/g, "⋅").replace(/-/g, "‑") + "=" + answer,
        // prevValue: answer,
        // evaluated: true
      });
    }
    console.log(eval("5 * - + 5"))
  }

  // Clear Display
  const handleDisplay = () => {
    setNumber({
      currentValue: "0",
      prevValue: "0",
      sign: ""
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
        currentValue={numbers.currentValue}
        prevValue={numbers.prevValue}
        sign={numbers.sign}
      />
    </div>
  );
};

export default App;
