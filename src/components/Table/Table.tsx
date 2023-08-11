import { FC, useEffect, useState } from 'react';

import { createHeaderTitleFromData } from '../../helpers/createHeaderTitleFromData';
import { StockData } from '../../types';

import { Pagination } from './Pagination';
import { StockRow } from './StockRow';
import { TableHeaderTitle } from './TableHeadTitle';

type PropsType = {
  stocks: StockData[];
};

export const Table: FC<PropsType> = ({ stocks }) => {
  const [currentPortion, setCurrentPortion] = useState<StockData[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [stocksPerPage, setStocksPerPage] = useState<number>(10);
  const headerTitles = stocks.length > 0 ? createHeaderTitleFromData(stocks[0]) : [];

  const handleSort = (key: keyof StockData, direction: string): void => {
    const sign = direction === 'descending' ? -1 : 1;

    const sorted = currentPortion!.slice().sort((a, b) => {
      if (a[key] > b[key]) {
        return sign;
      }
      if (a[key] < b[key]) {
        return -sign;
      }

      return 0;
    });

    setCurrentPortion(sorted);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * stocksPerPage;
    const endIndex = startIndex + stocksPerPage;

    setCurrentPortion(stocks.slice(startIndex, endIndex));
  }, [currentPage, stocks, stocksPerPage]);

  const displayStocks = currentPortion?.map((stock) => {
    return <StockRow stock={stock} key={stock.symbol} />;
  });

  const handlePageClick = (newPage: number): void => {
    setCurrentPage(newPage);
  };
  const handleChangeStocksCount = (stocksCount: number): void => {
    setStocksPerPage(stocksCount);
  };

  return (
    <>
      <table className="w-full table-fixed">
        <thead className="bg-[#474955] text-white w-full">
          <tr className="w-11/12 md:w-full">
            {headerTitles.map((title) => (
              <TableHeaderTitle
                onClick={handleSort}
                key={title.key}
                title={title.title}
                titleKey={title.key as keyof StockData}
              />
            ))}
          </tr>
        </thead>
        <tbody>{displayStocks}</tbody>
      </table>
      <Pagination
        totalItems={stocks.length}
        itemsPerPage={stocksPerPage}
        currentPage={currentPage}
        onPageChange={handlePageClick}
        onChangePageCount={handleChangeStocksCount}
      />
    </>
  );
};
