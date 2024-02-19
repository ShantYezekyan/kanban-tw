import { Droppable } from "@hello-pangea/dnd";
import { FaFire } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

const DeleteBox = () => {
  return (
    <Droppable droppableId="delete-box">
      {({ innerRef, droppableProps, placeholder }, snapshot) => (
        <div
          ref={innerRef}
          {...droppableProps}
          className={`relative mt-10 flex h-24 w-full shrink-0 items-center justify-center rounded border text-3xl ${snapshot.isDraggingOver ? "border-red-800 bg-red-800/20 text-red-500" : "border-neutral-500 bg-neutral-500/20 text-neutral-500"}`}
        >
          {snapshot.isDraggingOver ? (
            <FaFire className="animate-bounce" />
          ) : (
            <FiTrash className="" />
          )}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            {placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default DeleteBox;
