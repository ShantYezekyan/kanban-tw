import { CSSProperties, memo } from "react";
import { Draggable } from "@hello-pangea/dnd";
import type {
  DraggableStateSnapshot,
  DraggingStyle,
  NotDraggingStyle,
} from "@hello-pangea/dnd";

type CardProps = {
  title: string;
  id: string;
  index: number;
};

const getStyle = (
  style: DraggingStyle | NotDraggingStyle | undefined,
  snapshot: DraggableStateSnapshot,
): CSSProperties => {
  if (!snapshot.isDropAnimating) {
    return style || {};
  }

  return {
    ...style,
    transitionDuration: `0.001s`,
    opacity: 0,
  };
};

const Card = memo(({ title, id, index }: CardProps) => {
  return (
    <Draggable draggableId={id} index={index}>
      {({ innerRef, draggableProps, dragHandleProps }, snapshot) => (
        <div
          {...draggableProps}
          {...dragHandleProps}
          ref={innerRef}
          style={getStyle(draggableProps.style, snapshot)}
          className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
        >
          <p className=" text-sm text-neutral-100 ">{title}</p>
        </div>
      )}
    </Draggable>
  );
});

export default Card;
