import * as React from "react";
import ButtonItem from "./ButtonItem";

const App: React.FC = props => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <div onClick={() => setCount(count + 1)}>{count}</div>
      <button id="equals">=</button>
      <ButtonItem />
    </div>
  );
};

export default App;
