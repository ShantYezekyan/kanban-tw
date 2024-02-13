import { createContext, useState, ReactNode } from "react";
import { DEFAULT_CARDS } from "../MOCK_DATA";
import type { BoardData } from "../types"

export type BoardDataContextType = {
  data: BoardData;
  setData: React.Dispatch<React.SetStateAction<BoardData>>;
};

type BoardDataProviderProps = {
  children: ReactNode;
};

export const BoardDataContext = createContext<BoardDataContextType | null>(
  null,
);

export const BoardDataProvider: React.FC<BoardDataProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState<BoardData>(DEFAULT_CARDS);

  return (
    <BoardDataContext.Provider value={{ data, setData }}>
      {children}
    </BoardDataContext.Provider>
  );
};
