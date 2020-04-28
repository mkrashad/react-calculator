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
    let target: any = e.target.innerHTML;
    let current: number = numbers.currentValue;
    let previous: number = numbers.prevValue;


    setNumber({
      currentValue: current === 0
        ? target
        : current + target,
      prevValue: numbers.prevValue,
      sign: numbers.sign
    })

    // setNumber({
    //   currentValue:
    //     current === 0 ||
    //       target === "+" ||
    //       target === "-" ||
    //       target === "*" ||
    //       target === "/"
    //       ? target
    //       : current + target,
    //   prevValue: numbers.currentValue,
    //   total: previous,
    //   sign:
    //     target === "+" || target === "-" || target === "*" || target === "/"
    //       ? target
    //       : numbers.sign
    // });
  };

  const arithmOperation = e => {
    let sign = e.target.innerHTML;
      
    if (e.target.innerHTML === "*" || e.target.innerHTML === "/" ) {
      setNumber({
        currentValue: numbers.prevValue,
        prevValue: numbers.currentValue,
        sign: sign
      })
    }

    if (e.target.innerHTML === "=") {
      setNumber({
        total: numbers.sign === "*" ? parseInt(numbers.prevValue) * parseInt(numbers.currentValue) :
        parseInt(numbers.prevValue) / parseInt(numbers.currentValue)
      })
 
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
