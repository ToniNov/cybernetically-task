import { FC, useEffect } from 'react';

import { Loading } from '../components/Loading';
import { Search } from '../components/Search';
import { Table } from '../components/Table/Table';
import { selectStatus, selectStocks } from '../features/selectors';
import { fetchStockData } from '../features/stocksSlice';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';

export const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const stocksData = useAppSelector(selectStocks);
  const status = useAppSelector(selectStatus);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(fetchStockData());
  }, []);

  if (status === 'loading') return <Loading />;

  return (
    <main className="w-full md:p-0 md:w-11/12 mx-auto p-2">
      <Search />
      <Table stocks={stocksData} />
    </main>
  );
};
