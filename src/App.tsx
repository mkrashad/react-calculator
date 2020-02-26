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
    total: 0,
    sign: ""
  });

  const handeleButton = e => {
    let current: number = numbers.currentValue;
    let previous: number = numbers.prevValue;
    let target: any = e.target.innerHTML;
    setNumber({
      currentValue:
        current === 0 ||
        target === "+" ||
        target === "-" ||
        target === "*" ||
        target === "/"
          ? target
          : current + target,
      prevValue: numbers.currentValue,
      total: previous,
      sign:
        target === "+" || target === "-" || target === "*" || target === "/"
          ? target
          : numbers.sign
    });
  };

  const arithmOperation = e => {
    let target = e.target.innerHTML;
    let sign = numbers.sign;
    let total;
    if ((target === "=" && sign === "+") || (target === "=" && sign === "-")) {
      total = parseInt(numbers.currentValue) + parseInt(numbers.total);
      setNumber({
        currentValue: total,
        prevValue: numbers.currentValue,
        total: total,
        sign: numbers.sign
      });

      console.log(total);
    } else if (target === "=" && numbers.sign === "*") {
      total =
        parseInt(numbers.total) * parseInt(numbers.currentValue.substring(1));
      setNumber({
        currentValue: total,
        prevValue: 0,
        total: total,
        sign: numbers.sign
      });

      console.log(total);
    } else if (target === "=" && numbers.sign === "/") {
      total =
        parseInt(numbers.total) / parseInt(numbers.currentValue.substring(1));
      setNumber({
        currentValue: total,
        prevValue: 0,
        total: total,
        sign: numbers.sign
      });

      console.log(total);
    } else if (numbers.sign === ".") {
      total = parseFloat(numbers.currentValue);
      setNumber({
        currentValue: numbers.currentValue,
        prevValue: numbers.prevValue,
        total: total,
        sign: numbers.sign
      });

      console.log(numbers.currentValue);
    }
  };

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
