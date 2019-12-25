import * as React from "react";
// import UserInterface from "./Interfaces/UserInterface";
import ButtonsInterface from "./Interfaces/ButtonsInterface";
import NumberItem from "./components/NumberItem";
import OperationItem from "./components/OperationItem";
import Display from "./components/Display";

const App: React.FC<ButtonsInterface> = () => {
  const [numbers, setNumber] = React.useState([
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
  ]);

  const addition = () => {
    let a,
      b = 0;
  };

  const clearDisplay = () => {
    console.log(numbers[6].label);
  };

  return (
    <React.Fragment>
      {/* <div onClick={() => setCount(count + 1)}>{count}</div> */}
      {numbers.map(number => (
        <NumberItem id={number.id} label={number.label} key={number.label} />
      ))}
      <OperationItem clearDisplay={clearDisplay} />
      <Display />
    </React.Fragment>
  );
};

export default App;
