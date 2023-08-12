import axios from 'axios';

import { StockData } from '../types';

const BASE_URL = 'https://cloud.iexapis.com';
const token = process.env.REACT_APP_API_TOKEN_IEXCLOUD;

const instance = axios.create({
  baseURL: BASE_URL,
  params: { token },
});

export const iexcloudAPI = {
  async fetchData(): Promise<StockData[]> {
    const response = await instance.get('/stable/tops');

    return response.data;
  },
};
