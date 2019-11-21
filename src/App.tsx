import * as React from "react";
import NumberItem from "./components/NumberItem";
import OperationItem from "./components/OperationItem";
import Display from "./components/Display";

const App: React.FC = props => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <div onClick={() => setCount(count + 1)}>{count}</div>
      <NumberItem />
      <OperationItem />
      <Display />
    </div>
  );
};

export default App;
