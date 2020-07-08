export default interface FunctionInterface {
  handleOperators?(e: any): void;
  handleNumbers?(e: any): void;
  handleDecimal?(e: any): void;
  handleDisplay?(): void;
  handleEvaluate?(e: any): void;
  style?: any;
}
