import { useState } from "react";
import { AddCard, Card, DropIndicator } from ".";
import type { CardData } from "../MOCK_DATA";

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

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    card: CardDragInfo,
  ) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        className={`h-full w-full transition-colors ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"}`}
      >
        {filteredCards.map((card) => {
          return (
            <Card key={card.id} {...card} handleDragStart={handleDragStart} />
          );
        })}
        <DropIndicator beforeId="-1" column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

export default Column;
