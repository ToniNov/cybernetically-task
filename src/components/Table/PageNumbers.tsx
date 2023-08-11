import React from 'react';

type PropsType = {
  pageNumbers: Array<number>;
  currentPage: number;
  handlePageChange: (page: number) => void;
};

const itemsPerPage = 10;

export const PageNumbers: React.FC<PropsType> = ({
  pageNumbers,
  currentPage,
  handlePageChange,
}) => {
  const startIndex = currentPage - 1;
  const endIndex = startIndex + itemsPerPage;
  const displayedPages = pageNumbers.slice(startIndex, endIndex);

  return (
    <>
      {displayedPages.map((pageNumber) => (
        <li
          key={pageNumber}
          className={`relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
            pageNumber === currentPage ? 'bg-green' : ''
          }`}
        >
          <button
            onClick={() => handlePageChange(pageNumber)}
            type="button"
            className="page-link"
          >
            {pageNumber}
          </button>
        </li>
      ))}
    </>
  );
};
