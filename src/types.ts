export type Id = string | number;

export type Column = {
  id: number;
  title: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  content: string;
  total: number;
};
