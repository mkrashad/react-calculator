import * as React from "react";
import FunctionInterface from "./Interfaces/FunctionInterface";
import StateInterface from "./Interfaces/StateInterface";
import Buttons from "./components/Buttons";
import OperationItem from "./components/Operations";
import Display from "./components/Display";

const App: React.FC<FunctionInterface> = () => {
  const [numbers, setNumber] = React.useState<StateInterface>({
    currentValue: 0,
    prevValue: 0,
    total: 0
  });

  const handeleButton = e => {
    let num1: number = numbers.currentValue;
    let num2: number = e.target.innerHTML;
    setNumber({
      currentValue: num1 != 0 ? num1 + num2 : num2,
      prevValue: num2,
      total: 0
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
    <div style={{ marginLeft: 500 }}>
      <Buttons handeleButton={handeleButton} />
      <OperationItem
        handeleButton={handeleButton}
        clearDisplay={clearDisplay}
      />
      <Display
        currentValue={numbers.currentValue}
        prevValue={numbers.prevValue}
        total={numbers.total}
      />
    </div>
  );
};

export default App;
