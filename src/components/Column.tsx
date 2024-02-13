import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { AddCard, Card } from ".";
import type { Column, Task } from "../MOCK_DATA";

type ColumnProps = {
  column: Column;
  cards: Task[];
};

const Column = ({
  column: { title, id, headingColor },
  cards,
}: ColumnProps) => {
  const [active, setActive] = useState(false);

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">{cards.length}</span>
      </div>
      <Droppable droppableId={id}>
        {({ innerRef, droppableProps, placeholder }) => (
          <div
            ref={innerRef}
            {...droppableProps}
            className={`flex h-full w-full flex-col gap-1.5 transition-colors ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"}`}
          >
            {cards.map((card, index) => {
              return <Card key={card.id} index={index} {...card} />;
            })}
            {placeholder}
            {/* <AddCard column={column} /> */}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
