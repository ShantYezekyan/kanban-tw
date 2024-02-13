export type TaskType = {
  title: string;
  id: string;
};

export type ColumnType = {
  id: string;
  title: string;
  headingColor: string;
  taskIds: string[];
};

export type BoardData = {
  columns: {
    [key: string]: ColumnType;
  };
  tasks: {
    [key: string]: TaskType;
  };
  columnOrder: string[];
};
