import React, { useState } from 'react';

import { ReactComponent as Arrow } from '../../assets/Arrow.svg';

import { PageNumbers } from './PageNumbers';
import { PaginationButton } from './PaginationButton';
import { PaginationSelect } from './PaginationSelect';

interface PropsType {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onChangePageCount: (stocksCount: number) => void;
}

export const Pagination: React.FC<PropsType> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onChangePageCount,
}) => {
  const [selectedItemsPerPage, setSelectedItemsPerPage] = useState(itemsPerPage);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (page: number): void => {
    console.log(page, 'handlePageChange');
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePrevPage = (): void => {
    handlePageChange(currentPage - 1);
  };

  const handleNextPage = (): void => {
    handlePageChange(currentPage + 1);
  };

  return (
    <div className="pt-2 flex justify-between ">
      <PaginationSelect
        onChangePageCount={onChangePageCount}
        selectedItemsPerPage={selectedItemsPerPage}
        setSelectedItemsPerPage={setSelectedItemsPerPage}
        onChangeReset={onPageChange}
      />

      <ul className="flex justify-center items-center list-none m-1 p-1">
        <PaginationButton
          disabledParameter={1}
          currentPage={currentPage}
          changePage={() => handlePrevPage()}
        >
          <Arrow className="w-5 h-5 stroke-black transform rotate-90" />
        </PaginationButton>

        <PageNumbers
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />

        <PaginationButton
          disabledParameter={totalPages}
          currentPage={currentPage}
          changePage={() => handleNextPage()}
        >
          <Arrow className="w-5 h-5 stroke-black transform -rotate-90" />
        </PaginationButton>
      </ul>
    </div>
  );
};
