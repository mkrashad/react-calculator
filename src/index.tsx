import * as React from "react";
import { render } from "react-dom";
import { StoreProvider } from "easy-peasy";
import App from "./App";
import store from "./store";

render(<StoreProvider store={store}>
  <App />
</StoreProvider>,
  document.getElementById("root")
);
