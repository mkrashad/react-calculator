import * as React from "react";
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
  const [numbers, setNumber] = React.useState(0);

  const useEffect = () => {
    console.log("dsdsd");
  };

  const arithmOp = e => {
    // let num1, num2: number;
    let operator: any = e.target.innerHTML;
    console.log(operator);
  };

  const clearDisplay = () => {
    console.log(0);
  };

  const pushButton = e => {
    let a: number = numbers[e.target.innerHTML].label;
    let b: number = numbers[e.target.innerHTML].label;
    // a = numbers[e.target.innerHTML].label;
    // a = e.target.innerHTML;
    // sum = parseInt(a) + parseInt(a);
    console.log(a, b);
  };

  return (
    <React.Fragment>
      {/* <div onClick={() => setCount(count + 1)}>{count}</div> */}
      {staticNumbers.map(number => (
        <NumberItem
          id={number.id}
          label={number.label}
          key={number.label}
          pushButton={pushButton}
        />
      ))}
      <OperationItem clearDisplay={clearDisplay} arithmOp={arithmOp} />
      <Display arithmOp={arithmOp} />
    </React.Fragment>
  );
};

export default App;
