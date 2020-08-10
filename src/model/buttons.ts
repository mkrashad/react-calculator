import { Action, action } from "easy-peasy"

export interface ButtonsModel {
  currentValue: string;
  prevValue: string;
  formula: string,
  keyPress: Action<ButtonsModel, string>;
  numbers: Action<ButtonsModel, string>;
  operators: Action<ButtonsModel, string>;
  decimal: Action<ButtonsModel, string>;
  evaluate: Action<ButtonsModel, string>;
  percent: Action<ButtonsModel, string>;
  delete: Action<ButtonsModel, string>;
  clear: Action<ButtonsModel, string>;
}

const buttonsModel: ButtonsModel = {
  currentValue: "0",
  prevValue: "0",
  formula: "",

  // Actions 
  keyPress: action((state, value) => {
    const current = state.currentValue
    if ((value >= '0' && value <= '9') ||
      (value === '+' || value === '-') ||
      (value === '/' || value === '*') ||
      (value === '.' || value === '%')) {
      if (state.currentValue.length < 10) {
        if (current === "0") {
          state.currentValue = value
        } else {
          state.currentValue = current + value
        }
        state.formula = value
      }
      else {
        state.currentValue = "0"
      }
    }
    if (value === 'Enter') {
      let expression = state.currentValue;
      const answer = eval(state.currentValue)
      state.currentValue = answer
      state.prevValue = expression + '=' + answer
    }
    if (value === 'Escape') {
      state.currentValue = "0",
        state.prevValue = "0"
    }
    if (value === 'Backspace') {
      state.currentValue = state.currentValue.slice(0, state.currentValue.length - 1)
      if (state.currentValue === "") {
        state.currentValue = "0"
      }
    }
  }),


  numbers: action((state, value) => {
    const current = state.currentValue
    if (state.currentValue.length < 10) {
      if (current === "0") {
        state.currentValue = value
      } else {
        state.currentValue = current + value
      }
      state.formula = value
    }
    else {
      state.currentValue = "0"
    }
  }),


  operators: action((state, value) => {
    const repeatedOperators = /[x÷+-]{3,}/
    let calculation
    state.currentValue = state.currentValue + value
    state.formula = state.currentValue

    if (state.currentValue.length < 10) {
      // Checking repeated operators in currentValue
      const reg = new RegExp('\\' + value)
      if (reg.test(state.currentValue)) {
        state.currentValue = state.currentValue.replace(/\++/g, '+')
          .replace(/\--/g, '-')
          .replace(/\xx/g, 'x')
          .replace(/\÷÷/g, '÷')
      }
      // Checking operators in currentValue
      if (repeatedOperators.test(state.currentValue)) {
        calculation = state.currentValue.replace(repeatedOperators, '');
        state.currentValue = calculation + value

      }
    }
    else {
      state.currentValue = "0"
    }
  }),


  decimal: action((state) => {
    if (state.currentValue.length < 10) {
      const repeatedDecimals = /^(\d+)[.]$|[*\/+-](\d+)[.]$|[.](\d+)$/
      if (!repeatedDecimals.test(state.currentValue)) {
        state.currentValue = state.currentValue + "."
      }
    }
    else {
      state.currentValue = "0"
    }
  }),

  evaluate: action((state) => {
    let expression = state.currentValue;
    expression = expression.replace(/x/g, "*").replace(/÷/g, "/")
    let pattern = /%/g
    if (pattern.test(state.currentValue)) {
      expression = expression.replace(/%/g, "*")
      const answer = eval(expression + "/100")
      state.currentValue = answer
      state.prevValue = expression.replace(/\*/g, "%") + "=" + answer
    }
    else {
      const answer = eval(expression)
      state.currentValue = answer
      state.prevValue = answer.length < 11 ? answer : expression.replace(/\*/g, "x").replace(/\//g, "÷") + "=" + answer
    }
  }),

  percent: action((state, value) => {
    state.currentValue = state.currentValue + value
  }),


  delete: action((state) => {
    state.currentValue = state.currentValue.slice(0, state.currentValue.length - 1)
    if (state.currentValue === "") {
      state.currentValue = "0"
    }
  }),

  clear: action((state) => {
    state.currentValue = "0",
      state.prevValue = "0"
  }),
};

export default buttonsModel;