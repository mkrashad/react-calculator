export default interface MainInterface {
  id?: string;
  label?: number;
  clearDisplay?(): void;
  arithmOp?(e: any): void;
  pushButton?(e: any): any;
}

export default interface Functions {
  // numbers?: {
  //   id: string;
  //   label: number;
  // };
}
