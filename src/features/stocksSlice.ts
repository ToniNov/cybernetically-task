import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { iexcloudAPI } from '../api/iexcloudAPI';
import { RequestStatusType, StockData } from '../types';

export const fetchStockData = createAsyncThunk<
  StockData[],
  void,
  { rejectValue: string }
>('stocks/fetchStockData', async (): Promise<StockData[]> => {
  try {
    return await iexcloudAPI.fetchData();
  } catch (error: any) {
    throw new Error(`Error fetching stock: ${error.message}`);
  }
});

export interface StocksState {
  stocks: StockData[];
  originalStocks: StockData[];
  status: RequestStatusType;
  error?: any;
}

const initialState: StocksState = {
  stocks: [],
  originalStocks: [],
  status: 'idle',
  error: '',
};

export const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    searchString: (state, action: PayloadAction<string>) => {
      const query = action.payload.toLowerCase();
      const filteredPosts = state.originalStocks.filter((post) => {
        const postValues = Object.values(post);
        const includesQuery = postValues.some(
          (value) => typeof value === 'string' && value.toLowerCase().includes(query),
        );
        const includesNumber = postValues.some(
          (value) => typeof value === 'number' && value.toString().includes(query),
        );

        return includesQuery || includesNumber;
      });

      return { ...state, stocks: filteredPosts };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStockData.fulfilled, (state, action) => {
        state.stocks = action.payload;
        state.originalStocks = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchStockData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action;
      });
  },
});

export const { searchString } = stocksSlice.actions;

export default stocksSlice.reducer;
