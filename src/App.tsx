import * as React from "react";
import FunctionInterface from "./Interfaces/FunctionInterface";
import StateInterface from "./Interfaces/StateInterface";
import Buttons from "./components/Buttons";
import OperationItem from "./components/Operations";
import Display from "./components/Display";

const App: React.FC<FunctionInterface> = () => {
  const [numbers, setNumber] = React.useState<StateInterface>({
    currentValue: 0,
    // prevValue: 0,
    sign: "",
    total: 0
  });



  // const handeleButton = e => {
  //   const patternNumbers = /\d/
  //   const target = e.target.innerHTML
  //   if (target.match(patternNumbers)) {
  //     const digits: number = parseInt(target)
  //     setNumber({
  //       currentValue: digits,
  //       prevValue: 0,
  //       total: 0,
  //       sign: ""
  //     })
  //   }
  //   else
  //     console.log("no")

  //   // console.log(digits + " " + typeof digits)

  // }

  const handeleButton = e => {
    const current = numbers.currentValue;
    const previous: number = numbers.prevValue;
    const target = e.target.innerHTML;
    setNumber({
      currentValue:
        current == 0
          ? target
          : current + target,
      //   prevValue: numbers.currentValue,
      sign:
        target === "+" || target === "-" || target === "*" || target === "/"
          ? target
          : numbers.sign,
      total: 0
    });
    // if (target.match(patternArithm)) {
    //   console.log("eoeoeoe")
    // }
  };

  const arithmOperation = e => {
    const patternNum = /\d/
    // const patternArithm = /[-|+|*|/]/
    // let current = numbers.currentValue
    // let temp = current.exec(patternNum)
    var str = numbers.currentValue;
    var patt = /[-+|*|/]/;
    var res = patt.exec(str);
    console.log(res)

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

  const clearDisplay = () => {
    setNumber({
      currentValue: 0,
      prevValue: 0,
      total: 0,
      sign: ""
    });
  };

  return (
    <div style={{ marginLeft: 500 }}>
      <Buttons handeleButton={handeleButton} />
      <OperationItem
        handeleButton={handeleButton}
        clearDisplay={clearDisplay}
        arithmOperation={arithmOperation}
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
