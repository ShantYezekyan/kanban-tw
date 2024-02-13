import { useContext } from 'react';
import { BoardDataContext } from '../contexts/BoardDataContext';
import type { BoardDataContextType } from '../contexts/BoardDataContext'; 

export const useBoardData = (): BoardDataContextType => {
  const context = useContext(BoardDataContext);
  if (!context) {
    throw new Error('useBoardData must be used within a BoardDataProvider');
  }
  return context;
};
