export type CardData = {
  title: string;
  id: string;
  column: string;
};

export const DEFAULT_CARDS: CardData[] = [
  // BACKLOG
  {
    title: "Evaluate UI framework for admin panel",
    id: "1",
    column: "backlog",
  },
  {
    title: "Update privacy policy for GDPR compliance",
    id: "2",
    column: "backlog",
  },
  {
    title: "[SPIKE] Explore serverless architecture benefits",
    id: "3",
    column: "backlog",
  },
  { title: "Revise API documentation structure", id: "4", column: "backlog" },
  // TODO
  {
    title: "Assess NoSQL databases for scalability",
    id: "5",
    column: "todo",
  },
  { title: "Review incident response strategy", id: "6", column: "todo" },
  { title: "Coordinate with design on new user flow", id: "7", column: "todo" },
  // DOING
  {
    title: "Implement feature flags for gradual rollouts",
    id: "8",
    column: "doing",
  },
  {
    title: "Optimize backend for speed improvements",
    id: "9",
    column: "doing",
  },
  // DONE
  {
    title: "Finalize CI/CD pipeline for mobile apps",
    id: "10",
    column: "done",
  },
];
