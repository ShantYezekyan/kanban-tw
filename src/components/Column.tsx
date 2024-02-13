import { Droppable } from "react-beautiful-dnd";
import { AddCard, Card } from ".";
import type { BoardData, Column, Task } from "../types";

type ColumnProps = {
  column: Column;
  cards: Task[];
  setData: React.Dispatch<React.SetStateAction<BoardData>>;
};

const Column = ({
  column: { title, id, headingColor },
  cards,
}: ColumnProps) => {
  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">{cards.length}</span>
      </div>
      <Droppable droppableId={id}>
        {({ innerRef, droppableProps, placeholder }, snapshot) => (
          <div
            ref={innerRef}
            {...droppableProps}
            className={`flex h-full w-full flex-col gap-1.5 transition-colors ${snapshot.isDraggingOver ? "bg-neutral-800/50" : "bg-neutral-800/0"}`}
          >
            {cards.map((card, index) => {
              return <Card key={card.id} index={index} {...card} />;
            })}
            {placeholder}
            <AddCard columnId={id} />
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
