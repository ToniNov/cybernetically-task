import { createHeaderTitleFromData } from '../createHeaderTitleFromData';

describe('createHeaderTitleFromData', () => {
  it('should return an array of objects with formatted titles', () => {
    const data = {
      askPrice: 0,
      askSize: 0,
      bidPrice: 0,
      bidSize: 0,
      lastSalePrice: 39.79,
      lastSaleSize: 13,
      lastSaleTime: 1691783990447,
      lastUpdated: 1691784000000,
      sector: 'finance',
      securityType: 'cs',
      symbol: 'SRC',
      volume: 16281,
    };

    const expectedResult = [
      { key: 'askPrice', title: 'Ask Price' },
      { key: 'askSize', title: 'Ask Size' },
      { key: 'bidPrice', title: 'Bid Price' },
      { key: 'bidSize', title: 'Bid Size' },
      { key: 'lastSalePrice', title: 'Last Sale Price' },
      { key: 'lastSaleSize', title: 'Last Sale Size' },
      { key: 'lastSaleTime', title: 'Last Sale Time' },
      { key: 'lastUpdated', title: 'Last Updated' },
      { key: 'sector', title: 'Sector' },
      { key: 'securityType', title: 'Security Type' },
      { key: 'symbol', title: 'Symbol' },
      { key: 'volume', title: 'Volume' },
    ];

    const result = createHeaderTitleFromData(data);

    expect(result).toEqual(expectedResult);
  });
});
