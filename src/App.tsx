import * as React from "react";
import FunctionInterface from "./Interfaces/FunctionInterface";
import StateInterface from "./Interfaces/StateInterface";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";
import Display from "./components/Display";

const App: React.FC<FunctionInterface> = () => {

<<<<<<< HEAD
  // Variaables
<<<<<<< HEAD

  const isOperator = /[x/+‑]/,
    isDigits = /[0-9]/,
=======
  const isOperator = /[x/+‑]/g,
    isDigits = /\d/g,
>>>>>>> regExp
=======
  // Variables
<<<<<<< HEAD
  const isOperator = /[*/+‑]/,
>>>>>>> regExp
=======
  const isOperator = /[*/+‑]/g,
>>>>>>> regExp
    endsWithOperator = /[x+‑/]$/,
    endsWithNegativeSign = /[x/+]‑$/;

  // Initial States
<<<<<<< HEAD
  const [numbers, setNumber] = React.useState<StateInterface>({
<<<<<<< HEAD
    currentValue: 0,
<<<<<<< HEAD
    // prevValue: 0,
    sign: "",
    total: 0
=======
    prevValue: 0,
=======
    currentValue: "0",
    prevValue: "0",
    formula: "",
>>>>>>> regExp
    sign: "",
>>>>>>> regExp
=======
  const [state, setState] = React.useState<StateInterface>({
    currentValue: "0",
    prevValue: "0",
>>>>>>> regExp
  });


  // Numbers
  const handleNumbers = e => {
    const current = state.currentValue, value = e.target.value
    setState({
      currentValue:
        current === "0"
<<<<<<< HEAD
          ? target
          : current + target,
<<<<<<< HEAD
<<<<<<< HEAD

      total: 0
    });

    if (digits) {
      console.log("dfdfdf")
    }


  };

  const handeleOperation = e => {
    const current = numbers.currentValue,
      sign = isOperator.exec(current),
      operator = isOperator.test(current);


    // console.log(operator.input)

    // if (operator) {
    //   if (sign)
    //     console.log(sign.input())
    // }




    // let target = e.target.innerHTML;
    // let sign = numbers.sign;
    // let total;
    // if ((target === "+") || (sign === "-")) {
    //   // total = parseInt(numbers.currentValue) + parseInt(numbers.total);
    //   total = parseInt(numbers.currentValue)
    //   setNumber({
    //     currentValue: numbers.currentValue + target,
    //     prevValue: numbers.currentValue,
    //     total: 0,
    //     sign: numbers.sign
    //   });
    // console.log(numbers.currentValue)
  }
  //   console.log(total);
  // } else if (numbers.sign === "*") {
  //   total =
  //     parseInt(numbers.total) * parseInt(numbers.currentValue.substring(1));
  //   setNumber({
  //     currentValue: total,
  //     prevValue: 0,
  //     total: total,
  //     sign: numbers.sign
  //   });

  //   console.log(total);
  // } else if (numbers.sign === "/") {
  //   total =
  //     parseInt(numbers.total) / parseInt(numbers.currentValue.substring(1));
  //   setNumber({
  //     currentValue: total,
  //     prevValue: 0,
  //     total: total,
  //     sign: numbers.sign
  //   });

  //   //3+5*6-2/4 {32.5, 11.5}
  //   console.log(total);
  // } else if (numbers.sign === ".") {
  //   total = parseFloat(numbers.currentValue);
  //   setNumber({
  //     currentValue: numbers.currentValue,
  //     prevValue: numbers.prevValue,
  //     total: total,
  //     sign: numbers.sign
  //   });

  //   console.log(numbers.currentValue);
  // }
  //   };

  const handeleDeciamal = e => {

  }

  const clearDisplay = () => {
=======
      prevValue: current,

=======
      prevValue: current === "0"
        ? target
        : current + target,
      sign: ""
>>>>>>> regExp
=======
          ? value
          : current + value,
      prevValue: current === "0"
        ? value
        : current + value,
>>>>>>> regExp
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

<<<<<<< HEAD
  const handeleDisplay = () => {
>>>>>>> regExp
=======
  // Clear Display
  const handleDisplay = () => {
<<<<<<< HEAD
>>>>>>> regExp
    setNumber({
=======
    setState({
>>>>>>> regExp
      currentValue: "0",
      prevValue: "0",
      evaluated: false
    });
  };

  return (
    <div style={{ marginLeft: 500 }}>
<<<<<<< HEAD
      <Buttons handeleNumbers={handeleNumbers} />
      <OperationItem
        handeleNumbers={handeleNumbers}
<<<<<<< HEAD
        clearDisplay={clearDisplay}
        arithmOperation={handeleOperation}
=======
        handeleDisplay={handeleDisplay}
        handeleOperation={handeleOperation}
        handeleEvaluate={handeleEvaluate}
>>>>>>> regExp
=======
      <Numbers handleNumbers={handleNumbers} />
      <Operators
        handleDecimal={handleDecimal}
        handleDisplay={handleDisplay}
        handleOperators={handleOperators}
        handleEvaluate={handleEvaluate}

>>>>>>> regExp
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
