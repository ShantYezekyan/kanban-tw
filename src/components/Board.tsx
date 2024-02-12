import { useState } from "react";
import { CardData, DEFAULT_CARDS } from "../MOCK_DATA";
import { Column, DeleteBox } from ".";

const Board = () => {
  const [cards, setCards] = useState<CardData[]>(DEFAULT_CARDS);

  return (
    <div className="flex h-full w-full flex-col p-12">
      <div className="flex h-full w-full gap-3 overflow-scroll">
        <Column
          title="Backlog"
          column="backlog"
          headingColor="text-neutral-500"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="TODO"
          column="todo"
          headingColor="text-yellow-200"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="In progress"
          column="in-"
          headingColor="text-blue-200"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="Complete"
          column="done"
          headingColor="text-emerald-200"
          cards={cards}
          setCards={setCards}
        />
      </div>

      <DeleteBox setCards={setCards} />
    </div>
  );
};

export default Board;
