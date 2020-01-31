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

  useEffect(() => {
    document.title = `Hello ${name}`;
  }, [name])

  const pressButton = e => {
    // let a: any = e.target.innerHTML;
    // let sum: any = [];
    // for (let i: number; i < 10; i++) {
    //   sum.push(a);
    // }
    // console.log(sum);
    // // setNumber(a);
    setNumber(5);
  };

  const arithmOperation = e => {
    let arithmOp: number;
    if (e.target.innerHTML === "+") {
      arithmOp = numbers + e.target.innerHTML;
      console.log(arithmOp);
    } else if (e.target.innerHTML === "-") {
      arithmOp = numbers - 2;
      console.log(arithmOp);
    } else if (e.target.innerHTML === "*") {
      arithmOp = numbers * 2;
      console.log(arithmOp);
    } else if (e.target.innerHTML === "/") {
      arithmOp = numbers / 2;
      console.log(arithmOp);
    } else {
      setNumber(0);
      arithmOp = 0;
      console.log(arithmOp);
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
      <OperationItem pressButton={pressButton} />
      <Display numbers={numbers} />
    </React.Fragment>
  );
};

export default App;
