import { FC, useState } from 'react';

import { ReactComponent as Arrow } from '../../assets/Arrow.svg';
import { StockData } from '../../types';

type PropsType = {
  title: string;
  titleKey: keyof StockData;
  onClick: (key: keyof StockData, direction: string) => void;
};

type SortType = 'ascending' | 'descending';

export const TableHeaderTitle: FC<PropsType> = ({ title, onClick, titleKey }) => {
  const [sortDirection, setSortDirection] = useState<SortType>('ascending');

  const clickHandler = (): void => {
    const newSortDirection = sortDirection === 'ascending' ? 'descending' : 'ascending';

    setSortDirection(newSortDirection);
    onClick(titleKey, newSortDirection === 'ascending' ? 'ascending' : 'descending');
  };

  return (
    <th
      onClick={clickHandler}
      className={`md:p-6 p-2 cursor-pointer ${titleKey === 'sector' ? 'w-48' : ''}`}
      scope="col"
    >
      <div className="flex flex-col items-center justify-center ">
        <p className="pb-3">{title}</p>
        <Arrow
          className={sortDirection === 'ascending' ? '' : 'transform rotate-180'}
          style={{ transition: 'transform 0.2s ease-in-out', stroke: 'white' }}
        />
      </div>
    </th>
  );
};
