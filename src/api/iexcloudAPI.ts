import ky from 'ky';

import { StockData } from '../types';

const api = ky.create({
  prefixUrl: 'https://cloud.iexapis.com/',
});

export const iexcloudAPI = {
  async fetchData(): Promise<StockData[]> {
    const token = process.env.REACT_APP_API_TOKEN_IEXCLOUD || '';

    const response = await api.get('stable/tops', {
      searchParams: {
        token,
      },
    });

    return response.json();
  },
};
