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

export const DEFAULT_CARDS: BoardData = {
  columns: {
    "column-1": {
      id: "column-1",
      title: "BACKLOG",
      headingColor: "text-neutral-500",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "TODO",
      headingColor: "text-yellow-200",
      taskIds: ["task-5", "task-6", "task-7"],
    },
    "column-3": {
      id: "column-3",
      title: "In Progress",
      headingColor: "text-blue-200",
      taskIds: ["task-8", "task-9"],
    },
    "column-4": {
      id: "column-4",
      title: "DONE",
      headingColor: "text-emerald-200",
      taskIds: ["task-10"],
    },
  },
  tasks: {
    "task-1": { title: "Evaluate UI framework for admin panel", id: "task-1" },
    "task-2": {
      title: "Update privacy policy for GDPR compliance",
      id: "task-2",
    },
    "task-3": {
      title: "[SPIKE] Explore serverless architecture benefits",
      id: "task-3",
    },
    "task-4": { title: "Revise API documentation structure", id: "task-4" },
    "task-5": { title: "Assess NoSQL databases for scalability", id: "task-5" },
    "task-6": { title: "Review incident response strategy", id: "task-6" },
    "task-7": {
      title: "Coordinate with design on new user flow",
      id: "task-7",
    },
    "task-8": {
      title: "Implement feature flags for gradual rollouts",
      id: "task-8",
    },
    "task-9": {
      title: "Optimize backend for speed improvements",
      id: "task-9",
    },
    "task-10": {
      title: "Finalize CI/CD pipeline for mobile apps",
      id: "task-10",
    },
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};
