import { Action, action } from "easy-peasy"

export interface ButtonsModel {
  currentValue: any;
  prevValue: string;
  formula: string,
  handle: Action<ButtonsModel, string>;
}

const buttons: ButtonsModel = {
  currentValue: "0",
  prevValue: "0",
  formula: "",
  handle: action((state, payload) => {
    const current = state.currentValue
    
    state.currentValue = 25,
      state.prevValue = state.currentValue
  })
};

export default buttons;