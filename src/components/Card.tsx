import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";

type CardProps = {
  title: string;
  id: string;
  index: number;
};

const Card = memo(({ title, id, index }: CardProps) => {
  return (
    <Draggable draggableId={id} index={index}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <div
          {...draggableProps}
          {...dragHandleProps}
          ref={innerRef}
          className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
        >
          <p className=" text-sm text-neutral-100 ">{title}</p>
        </div>
      )}
    </Draggable>
  );
});

export default Card;
