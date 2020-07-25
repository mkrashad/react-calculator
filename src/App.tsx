import * as React from "react";
import { render } from "react-dom";
import { StoreProvider } from "easy-peasy";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";
import Display from "./components/Display";
import store from './store';


const App: React.FC = () => {

  return (
    <StoreProvider store={store}>
      <div style={{ marginLeft: 500 }}>
        <Numbers />
        <Operators />
        <Display />
      </div>
    </StoreProvider>
  );
};

render(<App />, document.getElementById("root"));
