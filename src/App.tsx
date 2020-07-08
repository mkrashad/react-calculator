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
  const isOperator = /[*/+‑]/,
>>>>>>> regExp
    endsWithOperator = /[x+‑/]$/,
    endsWithNegativeSign = /[x/+]‑$/;


  // Initial States
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

<<<<<<< HEAD
  const handeleDisplay = () => {
>>>>>>> regExp
=======
  // Clear Display
  const handleDisplay = () => {
>>>>>>> regExp
    setNumber({
      currentValue: "0",
      prevValue: "0",
      sign: ""
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
        currentValue={numbers.currentValue}
        prevValue={numbers.prevValue}
        sign={numbers.sign}
      />
    </div>
  );
};

export default App;
