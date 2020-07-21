export default interface FunctionInterface {
  handleNumbers?(e: any): void;
  handleOperators?(e: any): void;
  handleDecimal?(): void;
  handleEvaluate?(): void;
  handleDisplay?(): void;
}
