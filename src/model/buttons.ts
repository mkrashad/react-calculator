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

const buttonsModel: ButtonsModel = {
  currentValue: "0",
  prevValue: "0",
  formula: "",

  // Actions 
  numbers: action((state, payload) => {
    const current = state.currentValue
    if (current === "0") {
      state.currentValue = payload
      state.prevValue = payload
    } else {
      state.currentValue = current + payload
      state.prevValue = current + payload
    }
    state.formula = payload
    // console.log(value)
  }),

  operators: action((state, value) => {
    const repeatedOperators = /[x÷+-]{3,}/
    let calculation
    state.currentValue = state.currentValue + value
    state.prevValue = state.currentValue
    state.formula = state.currentValue

    // Checking repeated operators in currentValue
    const reg = new RegExp('\\' + value)
    if (reg.test(state.currentValue)) {
      state.currentValue = state.currentValue.replace(/\++/g, '+')
        .replace(/\--/g, '-')
        .replace(/\xx/g, 'x')
        .replace(/\÷÷/g, '÷'),
        state.prevValue = state.currentValue
      console.log(reg)
    }
    // Checking operators in currentValue
    if (repeatedOperators.test(state.currentValue)) {
      calculation = state.currentValue.replace(repeatedOperators, '');
      state.currentValue = calculation + value
      // state.prevValue = state.currentValue
      console.log(calculation, value)
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

export default buttonsModel;