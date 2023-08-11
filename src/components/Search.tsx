import { ChangeEvent, FC, useEffect, useState } from 'react';

import { ReactComponent as Loupe } from '../assets/Loupe.svg';
import { searchString } from '../features/stocksSlice';
import { useAppDispatch } from '../hooks/reduxHooks';
import { useDebounce } from '../hooks/useDebounce';

export const Search: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useAppDispatch();
  const debouncedSearchValue = useDebounce<string>(searchValue, 500);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    const newSearchString = event.target.value.trim();

    setSearchValue(newSearchString);
  };

  useEffect(() => {
    dispatch(searchString(debouncedSearchValue));
  }, [dispatch, debouncedSearchValue]);

  return (
    <div className="bg-grayLite w-full md:w-1/2 my-4 px-7 py-5 flex items-center justify-between">
      <input
        placeholder="Search"
        className="bg-grayLite w-11/12 text-white outline-none focus:none"
        value={searchValue}
        onChange={handleSearch}
      />
      <Loupe />
    </div>
  );
};
