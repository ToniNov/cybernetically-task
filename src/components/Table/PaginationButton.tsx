import React, { FC } from 'react';

type PropsType = {
  currentPage: number;
  changePage: () => void;
  children: React.ReactNode;
  disabledParameter: number;
};

export const PaginationButton: FC<PropsType> = ({
  currentPage,
  changePage,
  disabledParameter,
  children,
}) => {
  return (
    <li className={`page-item ${currentPage === disabledParameter ? 'opacity-50 ' : ''}`}>
      <button
        type="button"
        className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        onClick={changePage}
        disabled={currentPage === disabledParameter}
      >
        {children}
      </button>
    </li>
  );
};
