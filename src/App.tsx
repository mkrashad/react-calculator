import * as React from "react";
import { render } from "react-dom";
import { StoreProvider } from "easy-peasy";
import store from './store';
import '../public/App.scss';
import Display from "./components/Display";
import Delete from "./components/Delete"
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";


const App: React.FC = () => {

  return (
    <StoreProvider store={store}>
      <div className="wrapper">
        <Display />
        <div className="grid-container">
          <div className="item1">
            <Delete />
            <Numbers />
          </div >
          <div className="item2">
            <Operators />
          </div>
        </div>
      </div>
    </StoreProvider>
  );
};

render(<App />, document.getElementById("root"));
