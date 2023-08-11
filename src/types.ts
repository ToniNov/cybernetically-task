export interface StockData {
  askPrice: number;
  askSize: number;
  bidPrice: number;
  bidSize: number;
  lastSalePrice: number;
  lastSaleSize: number;
  lastSaleTime: number;
  lastUpdated: number;
  sector: string;
  securityType: string;
  symbol: string;
  volume: number;
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
