import { DragDropContext } from "react-beautiful-dnd";
import { useBoardData } from "../hooks/useBoardData";
import { Column, DeleteBox } from ".";
import type { DropResult } from "react-beautiful-dnd";

const Board = () => {
  const { data, setData } = useBoardData();

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    // Checked if dropped outside of droppable area
    if (!destination) {
      return;
    }

    //Check if dropped in the same column
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = data.columns[source.droppableId];
    const newTaskIds = [...column.taskIds];
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex h-full w-full flex-col p-12">
        <div className="flex h-full w-full gap-3 overflow-scroll">
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

            return (
              <Column
                key={columnId}
                column={column}
                cards={tasks}
                setData={setData}
              />
            );
          })}
        </div>

        {/* <DeleteBox setCards={setCards} /> */}
      </div>
    </DragDropContext>
  );
};

export default Board;
