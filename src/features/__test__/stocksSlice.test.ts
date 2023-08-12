import { store } from '../../app/store';
import { StockData } from '../../types';
import { fetchStockData } from '../stocksSlice';

let mockPayload: StockData[];

beforeEach(() => {
  mockPayload = [
    {
      symbol: 'SRC',
      sector: 'finance',
      securityType: 'cs',
      bidPrice: 0,
      bidSize: 0,
      askPrice: 0,
      askSize: 0,
      lastSalePrice: 39.79,
      lastSaleSize: 13,
      lastSaleTime: 1691783990447,
      lastUpdated: 1691784000000,
      volume: 16281,
    },
    {
      symbol: 'DBRG',
      sector: 'n/a',
      securityType: 'n/a',
      bidPrice: 0,
      bidSize: 0,
      askPrice: 0,
      askSize: 0,
      lastSalePrice: 17.17,
      lastSaleSize: 100,
      lastSaleTime: 1691783994535,
      lastUpdated: 1691784000000,
      volume: 58307,
    },
    {
      symbol: 'XPDBU',
      sector: 'n/a',
      securityType: 'n/a',
      bidPrice: 0,
      bidSize: 0,
      askPrice: 10.82,
      askSize: 200,
      lastSalePrice: 0,
      lastSaleSize: 0,
      lastSaleTime: 0,
      lastUpdated: 1691784001431,
      volume: 0,
    },
    {
      symbol: 'VALQ',
      sector: 'miscellaneous',
      securityType: 'et',
      bidPrice: 0,
      bidSize: 0,
      askPrice: 0,
      askSize: 0,
      lastSalePrice: 50.335,
      lastSaleSize: 50,
      lastSaleTime: 1691776586116,
      lastUpdated: 1691784000000,
      volume: 50,
    },
  ];
});

afterEach(() => {
  store.dispatch(fetchStockData.fulfilled([], 'succeeded'));
});
describe('extraReducers', () => {
  it('handles fetchStockData.pending correctly', () => {
    store.dispatch(fetchStockData.pending('loading'));

    const { stocks } = store.getState();

    expect(stocks.status).toEqual('loading');
  });

  it('handles fetchStockData.fulfilled correctly', () => {
    store.dispatch(fetchStockData.fulfilled(mockPayload, 'succeeded'));

    const { stocks } = store.getState();

    expect(stocks.stocks).toEqual(mockPayload);
    expect(stocks.originalStocks).toEqual(mockPayload);
    expect(stocks.status).toEqual('succeeded');
  });

  it('handles fetchStockData.rejected correctly', () => {
    const mockError = { name: 'Error', message: 'Error message' };

    store.dispatch(fetchStockData.rejected(mockError, 'failed'));

    const { stocks } = store.getState();

    expect(stocks.status).toEqual('failed');
    expect(stocks.stocks).toEqual([]);
  });
});
