import { useState } from "react";
import { AddCard, Card } from ".";
import type { CardData } from "../MOCK_DATA";
import { Droppable } from "react-beautiful-dnd";

export type CardDragInfo = {
  title: string;
  id: string;
  column: string;
};

type ColumnProps = {
  title: string;
  column: string;
  headingColor: string;
  cards: CardData[];
  setCards: React.Dispatch<React.SetStateAction<CardData[]>>;
};

const Column = ({
  title,
  headingColor,
  column,
  cards,
  setCards,
}: ColumnProps) => {
  const [active, setActive] = useState(false);

  const filteredCards = cards.filter((card) => card.column === column);

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <Droppable droppableId={column}>
        {({ innerRef, droppableProps, placeholder }) => (
          <div
            ref={innerRef}
            {...droppableProps}
            className={`flex h-full w-full flex-col gap-2 transition-colors ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"}`}
          >
            {filteredCards.map((card, index) => {
              return <Card key={card.id} index={index} {...card} />;
            })}
            {placeholder}
            <AddCard column={column} setCards={setCards} />
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
