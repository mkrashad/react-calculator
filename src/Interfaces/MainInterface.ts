export default interface MainInterface {
  numbers?: number;
  id?: string;
  label?: number;
  arithmOperation?(e: any): void;
  pressButton?(e: any): void;
  useEffect?(): void;
}
