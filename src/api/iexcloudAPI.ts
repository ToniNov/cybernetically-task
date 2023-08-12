import axios from 'axios';

import { StockData } from '../types';

export const iexcloudAPI = {
  async fetchData(): Promise<StockData[]> {
    const token = process.env.REACT_APP_API_TOKEN_IEXCLOUD;

    try {
      const response = await axios.get('https://cloud.iexapis.com/stable/tops', {
        params: {
          token,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
};
