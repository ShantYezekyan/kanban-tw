export type Task = {
  title: string;
  id: string;
};

export type Column = {
  id: string;
  title: string;
  headingColor: string;
  taskIds: string[];
};

export type BoardData = {
  columns: {
    [key: string]: Column;
  };
  tasks: {
    [key: string]: Task;
  };
  columnOrder: string[];
};
