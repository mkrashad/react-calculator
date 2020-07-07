import * as React from "react";
import FunctionInterface from "./Interfaces/FunctionInterface";
import StateInterface from "./Interfaces/StateInterface";
import Buttons from "./components/Numbers";
import OperationItem from "./components/Operations";
import Display from "./components/Display";

const App: React.FC<FunctionInterface> = () => {

  // Variaables
<<<<<<< HEAD

  const isOperator = /[x/+‑]/,
    isDigits = /[0-9]/,
=======
  const isOperator = /[x/+‑]/g,
    isDigits = /\d/g,
>>>>>>> regExp
    endsWithOperator = /[x+‑/]$/,
    endsWithNegativeSign = /[x/+]‑$/;



  const [numbers, setNumber] = React.useState<StateInterface>({
    currentValue: 0,
<<<<<<< HEAD
    // prevValue: 0,
    sign: "",
    total: 0
=======
    prevValue: 0,
    sign: "",
>>>>>>> regExp
  });


  const handeleNumbers = e => {
    const current = numbers.currentValue, target = e.target.innerHTML,
      number = isDigits.exec(current),
      digits = isDigits.test(current);


    setNumber({
      currentValue:
        current == 0
          ? target
          : current + target,
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

    });

  };

  const handeleOperation = e => {
    let target = e.target.innerHTML;
    let sign = numbers.sign;
    if ((target === "+") || (target === "-") || (target === "*") || (target === "/") || (target === ".")) {
      setNumber({
        currentValue: numbers.currentValue + target,
        prevValue: numbers.currentValue,
        sign: sign
      });
    }
  }
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

  const handeleEvaluate = () => {

    let b = eval(numbers.currentValue)
    setNumber({
      currentValue: b
    })
    //3+5*6-2/4 {32.5, 11.5}
  }

  const handeleDeciamal = e => {

  }

  const handeleDisplay = () => {
>>>>>>> regExp
    setNumber({
      currentValue: 0,
      prevValue: 0,
      sign: ""
    });
  };

  return (
    <div style={{ marginLeft: 500 }}>
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
      />
      <Display
        currentValue={numbers.currentValue}
        prevValue={numbers.prevValue}
        total={numbers.total}
        sign={numbers.sign}
      />
    </div>
  );
};

export default App;
