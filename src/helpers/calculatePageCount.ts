import { StockData } from '../types';

export const calculatePageCount = (
  stockData: StockData[],
  postsPerPage: number,
): number[] => {
  const pageCount = Math.ceil(stockData.length / postsPerPage);

  return Array.from({ length: pageCount }, (_, i) => i + 1);
};
