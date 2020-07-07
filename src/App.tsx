import * as React from "react";
import FunctionInterface from "./Interfaces/FunctionInterface";
import StateInterface from "./Interfaces/StateInterface";
import Buttons from "./components/Numbers";
import OperationItem from "./components/Operations";
import Display from "./components/Display";

const App: React.FC<FunctionInterface> = () => {

  // Variaables
  const isOperator = /[x/+‑]/g,
    isDigits = /\d/g,
    endsWithOperator = /[x+‑/]$/,
    endsWithNegativeSign = /[x/+]‑$/;



  const [numbers, setNumber] = React.useState<StateInterface>({
    currentValue: 0,
    prevValue: 0,
    sign: "",
    total: 0
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
      prevValue: current,
      total: 0

    });

  };

  const handeleOperation = e => {
    let target = e.target.innerHTML;
    let sign = numbers.sign;
    let total;
    if ((target === "+") || (target === "-") || (target === "*") || (target === "/") || (target === ".")) {
      total = parseInt(numbers.currentValue) + parseInt(numbers.total);
      setNumber({
        currentValue: numbers.currentValue + target,
        prevValue: numbers.currentValue,
        // total: total,
        sign: sign
      });
      // console.log(target)
    }
    //   console.log(total);
    // else if (numbers.sign === "*") {
    //   total =
    //     parseInt(numbers.total) * parseInt(numbers.currentValue.substring(1));
    //   setNumber({
    //     currentValue: total,
    //     prevValue: 0,
    //     total: total,
    //     sign: numbers.sign
    //   });

  }
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

  const handeleEvaluate = e => {
    // let current = numbers.currentValue
    // let op = current.match(isOperator)
    // let d = current.match(isDigits)
    // if (op == "x" || op == "/") {
    //   console.log("first")
    // }
    // else {
    //   console.log("second")
    // }
    let b = eval(numbers.currentValue)
    console.log(b)
  }

  const handeleDeciamal = e => {

  }

  const handeleDisplay = () => {
    setNumber({
      currentValue: 0,
      prevValue: 0,
      total: 0,
      sign: ""
    });
  };

  return (
    <div style={{ marginLeft: 500 }}>
      <Buttons handeleNumbers={handeleNumbers} />
      <OperationItem
        handeleNumbers={handeleNumbers}
        handeleDisplay={handeleDisplay}
        handeleOperation={handeleOperation}
        handeleEvaluate={handeleEvaluate}
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
