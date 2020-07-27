import * as React from "react";
import { render } from "react-dom";
import { StoreProvider } from "easy-peasy";
import store from './store';
import '../public/App.scss';
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";
import Display from "./components/Display";


const App: React.FC = () => {

  return (
    <StoreProvider store={store}>
      <div className="wrapper">
        <Numbers />
        <Operators />
        <Display />
      </div >
    </StoreProvider>
  );
};

render(<App />, document.getElementById("root"));
