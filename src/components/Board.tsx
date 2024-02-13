import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Column, DeleteBox } from ".";
import { DEFAULT_CARDS } from "../MOCK_DATA";
import type { BoardData } from "../MOCK_DATA";

const Board = () => {
  const [data, setData] = useState<BoardData>(DEFAULT_CARDS);

  const handleDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex h-full w-full flex-col p-12">
        <div className="flex h-full w-full gap-3 overflow-scroll">
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

            return <Column key={columnId} column={column} cards={tasks} />;
          })}
        </div>

        {/* <DeleteBox setCards={setCards} /> */}
      </div>
    </DragDropContext>
  );
};

export default Board;
