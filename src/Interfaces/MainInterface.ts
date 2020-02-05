export default interface MainInterface {
  numbers?: number;
  id?: string;
  currentValue?: any;
  prevValues?: any;
  label?: number;
  arithmOperation?(e: any): void;
  pressButton?(e: any): void;
  clearDisplay?(): void;
  useEffect?: void;
}
