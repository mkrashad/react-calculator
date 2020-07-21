export interface StateModel {
  currentValue: string;
  prevValue: string;
  formula: string
}

const state: StateModel = {
  currentValue: "",
  prevValue: "",
  formula: ""
};

export default state;