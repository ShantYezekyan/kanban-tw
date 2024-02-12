import { DropIndicator } from ".";
import { motion } from "framer-motion";
import type { CardDragInfo } from "./Column";

type CardProps = {
  title: string;
  id: string;
  column: string;
  handleDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    card: CardDragInfo,
  ) => void;
};

const Card = ({ title, id, column, handleDragStart }: CardProps) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className=" text-sm text-neutral-100 ">{title}</p>
      </motion.div>
    </>
  );
};

export default Card;
