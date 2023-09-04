export type NavigationItem = {
  text: string;
  path: string;
  Icon: JSX.Element;
};

export type TableProps<T> = {
  schema: Schema<T>[];
  data: T[];
  onRowClick: (value: T) => void;
};

export type Schema<T> = {
  visible?: boolean;
  accessor?: string | null;
  text?: string | null;
  render?: (value: T, functions?: Function) => JSX.Element;
  functions?: Function;
};
