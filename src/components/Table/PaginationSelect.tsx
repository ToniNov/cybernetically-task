import React, { FC } from 'react';

type PropsType = {
  selectedItemsPerPage: number;
  onChangePageCount: (stocksCount: number) => void;
  setSelectedItemsPerPage: (stocksCount: number) => void;
  onChangeReset: (page: number) => void;
};

export const PaginationSelect: FC<PropsType> = ({
  selectedItemsPerPage,
  onChangePageCount,
  setSelectedItemsPerPage,
  onChangeReset,
}) => {
  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const newItemsPerPage = parseInt(event.target.value, 10);

    setSelectedItemsPerPage(newItemsPerPage);
    onChangePageCount(newItemsPerPage);
    onChangeReset(1); // Reset to the first page when changing items per page
  };

  return (
    <div className="flex items-center">
      <span className="mr-2">Show:</span>
      <select
        value={selectedItemsPerPage}
        onChange={handleItemsPerPageChange}
        className="px-2 py-1 border border-gray-300 rounded"
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
      </select>
      <span className="ml-2">items per page</span>
    </div>
  );
};
