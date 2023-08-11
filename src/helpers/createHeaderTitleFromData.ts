import { StockData } from '../types';

export const createHeaderTitleFromData = (
  data: StockData,
): { key: string; title: string }[] => {
  return Object.keys(data).map((key) => {
    const words = key.split(/(?=[A-Z])/);
    const formattedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1),
    );

    return {
      key,
      title: formattedWords.join(' '),
    };
  });
};
