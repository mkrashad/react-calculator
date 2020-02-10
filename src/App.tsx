import * as React from "react";
import MainInterface from "./Interfaces/MainInterface";
import StateInterface from "./Interfaces/StateInterface";
import Buttons from "./components/Buttons";
import OperationItem from "./components/Operations";
import Display from "./components/Display";

const App: React.FC<MainInterface> = () => {
  const [numbers, setNumber] = React.useState<StateInterface>({
    currentValue: 0,
    prevValue: 0,
    total: 0
  });

  const pressButton = e => {
    let num1 = e.target.innerHTML;
    num1 = parseInt(num1);
    let num2 = numbers.currentValue;
    let sum = num1 + num2;
    setNumber({
      currentValue: num1,
      prevValue: num2,
      total: sum
    });
  };

  const clearDisplay = () => {
    setNumber({
      currentValue: 0,
      prevValue: 0,
      total: 0
    });
  };

  // const arithmOperation = e => {
  //   let arithmOp: number;
  //   let floatValue: string;
  //   if (e.target.innerHTML === "+") {
  //     arithmOp = numbers + 21;
  //     console.log(typeof arithmOp);
  //   } else if (e.target.innerHTML === "-") {
  //     arithmOp = numbers - 2;
  //     setNumber(arithmOp);
  //     console.log(typeof arithmOp);
  //   } else if (e.target.innerHTML === "*") {
  //     arithmOp = numbers * 2;
  //     setNumber(arithmOp);
  //     console.log(arithmOp);
  //   } else if (e.target.innerHTML === "/") {
  //     arithmOp = numbers / 2;
  //     setNumber(arithmOp);
  //     console.log(arithmOp);
  //   } else if (e.target.innerHTML === ".") {
  //     floatValue = `${numbers}.${2}`;

  //     console.log(parseFloat(floatValue));
  //   } else {
  //     setNumber(0);
  //   }
  // };

  return (
    <React.Fragment>
      <Buttons pressButton={pressButton} />
      <OperationItem pressButton={pressButton} clearDisplay={clearDisplay} />
      <Display
        prevValue={numbers.prevValue}
        currentValue={numbers.currentValue}
        total={numbers.total}
      />
    </React.Fragment>
  );
};

export default App;
