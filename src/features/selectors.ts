import { RootState } from '../app/store';
import { RequestStatusType, StockData } from '../types';

export const selectStatus = (state: RootState): RequestStatusType => state.stocks.status;
export const selectStocks = (state: RootState): StockData[] => state.stocks.stocks;
