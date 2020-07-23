import { Action, action } from "easy-peasy"

export interface ButtonsModel {
  currentValue: string;
  prevValue: string;
  formula: string,
  numbers: Action<ButtonsModel, string>;
  operators: Action<ButtonsModel, string>;
  decimal: Action<ButtonsModel, string>;
  evaluate: Action<ButtonsModel, string>;
  clear: Action<ButtonsModel, string>;
}

const buttons: ButtonsModel = {
  currentValue: "0",
  prevValue: "0",
  formula: "",

  // Actions 
  numbers: action((state, value) => {
    if (state.currentValue === "0") {
      state.currentValue = value
    } else {
      state.currentValue = state.currentValue + value
    }
    if (state.prevValue === "0") {
      state.prevValue = value
    } else {
      state.prevValue = state.prevValue + value
    }
    state.formula = value
  }),

  operators: action((state, value) => {
    const repeatedOperators = /[x÷+-]{2,}/
    let calculation
    state.currentValue = state.currentValue + value
    state.prevValue = state.currentValue
    state.formula = state.currentValue
    // Checking repeated operators in currentValue
    const reg = new RegExp('\\' + value)
    if (reg.test(state.currentValue)) {
      state.currentValue = state.formula + value
      state.prevValue = state.currentValue
    }
    // Checking operators in currentValue
    if (repeatedOperators.test(state.currentValue)) {
      calculation = state.currentValue.replace(repeatedOperators, '');
      state.currentValue = calculation + value
      state.prevValue = state.currentValue
    }
  }),

  decimal: action((state) => {
    const repeatedDecimals = /^(\d+)[.]$|[*\/+-](\d+)[.]$|[.](\d+)$/
    if (!repeatedDecimals.test(state.currentValue)) {
      state.currentValue = state.currentValue + "."
      state.prevValue = state.currentValue
    }
  }),

  evaluate: action((state) => {
    let expression = state.currentValue;
    expression = expression.replace(/x/g, "*").replace(/÷/g, "/");
    const answer = eval(expression)
    state.currentValue = answer
    state.prevValue = expression.replace(/\*/g, "x").replace(/\//g, "÷") + "=" + answer
  }),

  clear: action((state) => {
    state.currentValue = "0",
      state.prevValue = "0"
  }),
};

export default buttons;