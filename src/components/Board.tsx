import { DragDropContext } from "react-beautiful-dnd";
import { useBoardData } from "../hooks/useBoardData";
import { Column, DeleteBox } from ".";
import type { DropResult, DraggableLocation } from "react-beautiful-dnd";
import type { ColumnType } from "../types";

const Board = () => {
  const { data, setData } = useBoardData();

  const deleteCard = (source: DraggableLocation, draggableId: string) => {
    setData((prevData) => {
      const startColumn = prevData.columns[source.droppableId];
      const newTaskIds = startColumn.taskIds.filter((id) => id !== draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      const newData = {
        ...prevData,
        columns: {
          ...prevData.columns,
          [newColumn.id]: newColumn,
        },
      };

      return newData;
    });
  };

  const moveWithinColumn = (
    start: ColumnType,
    source: DraggableLocation,
    destination: DraggableLocation,
    draggableId: string,
  ) => {
    const newTaskIds = [...start.taskIds];
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...start,
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

  const moveBetweenColumns = (
    start: ColumnType,
    finish: ColumnType,
    source: DraggableLocation,
    destination: DraggableLocation,
    draggableId: string,
  ) => {
    const startTaskIds = [...start.taskIds];
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };
    const finishTaskIds = [...finish.taskIds];
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };
    setData({
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    });
  };

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    // Checked if dropped outside of droppable area
    if (!destination) {
      return;
    }

    if (destination?.droppableId === "delete-box") {
      deleteCard(source, draggableId);
      return;
    }

    //Check if dropped in the same column
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      moveWithinColumn(start, source, destination, draggableId);
    } else {
      moveBetweenColumns(start, finish, source, destination, draggableId);
    }
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

        <DeleteBox />
      </div>
    </DragDropContext>
  );
};

export default Board;
