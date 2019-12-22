import * as React from "react";
import UserInterface from "./Interfaces/UserInterface";
import NumberItem from "./components/NumberItem";
import OperationItem from "./components/OperationItem";
import Display from "./components/Display";

const App: React.FC<UserInterface> = props => {
  const [count, setCount] = React.useState(0);

  const numbers = [
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

  return (
    <div>
      {/* <div onClick={() => setCount(count + 1)}>{count}</div> */}
      {numbers.map(number => (
        <NumberItem id={number.id} label={number.label} />
      ))}
      <OperationItem />
      <Display />
    </div>
  );
};

export default App;
