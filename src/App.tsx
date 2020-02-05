import * as React from "react";
import { useEffect } from "react";
import MainInterface from "./Interfaces/MainInterface";
import NumberItem from "./components/NumberItem";
import OperationItem from "./components/OperationItem";
import Display from "./components/Display";

const App: React.FC<MainInterface> = () => {
  const staticNumbers = [
    {
      id: "zero",
      label: 0
    },
    {
      id: "one",
      label: 1
    },
    {
      id: "two",
      label: 2
    },
    {
      id: "three",
      label: 3
    },
    {
      id: "four",
      label: 4
    },
    {
      id: "five",
      label: 5
    },
    {
      id: "six",
      label: 6
    },
    {
      id: "seven",
      label: 7
    },
    {
      id: "eight",
      label: 8
    },
    {
      id: "nine",
      label: 9
    }
  ];
  const [numbers, setNumber] = React.useState<any>({
    currentValue: 0,
    prevValue: 0,
    total: 0
  });

  const pressButton = e => {
    let a: number = e.target.innerHTML;
    numbers.currentValue = a;
    setNumber({ currentValue: a });
    console.log(numbers);
  };

  const clearDisplay = () => {
    setNumber({
      currentValue: 0,
      prevValue: 0,
      total: 0
    });
  };

  const arithmOperation = e => {
    let arithmOp: number;
    let floatValue: string;
    if (e.target.innerHTML === "+") {
      arithmOp = numbers + 21;
      console.log(typeof arithmOp);
    } else if (e.target.innerHTML === "-") {
      arithmOp = numbers - 2;
      setNumber(arithmOp);
      console.log(typeof arithmOp);
    } else if (e.target.innerHTML === "*") {
      arithmOp = numbers * 2;
      setNumber(arithmOp);
      console.log(arithmOp);
    } else if (e.target.innerHTML === "/") {
      arithmOp = numbers / 2;
      setNumber(arithmOp);
      console.log(arithmOp);
    } else if (e.target.innerHTML === ".") {
      floatValue = `${numbers}.${2}`;

      console.log(parseFloat(floatValue));
    } else {
      setNumber(0);
    }
  };

  return (
    <React.Fragment>
      {staticNumbers.map(number => (
        <NumberItem
          id={number.id}
          label={number.label}
          key={number.label}
          pressButton={pressButton}
        />
      ))}
      <OperationItem pressButton={pressButton} clearDisplay={clearDisplay} />
      <Display
        currentValue={numbers.currentValue}
        prevValues={numbers.prevValue}
      />
    </React.Fragment>
  );
};

export default App;
