import { FC } from 'react';

import { formattedTime } from '../../helpers/formattedTime';
import { StockData } from '../../types';

type PropsType = {
  stock: StockData;
};

export const StockRow: FC<PropsType> = ({ stock }) => {
  const {
    askPrice,
    askSize,
    bidPrice,
    bidSize,
    lastSalePrice,
    lastSaleSize,
    lastSaleTime,
    lastUpdated,
    sector,
    securityType,
    symbol,
    volume,
  } = stock;

  return (
    <tr>
      <td className="font-normal w-1/13 md:font-medium p-1 md:p-2 border border-grayExtraLite">
        {symbol}
      </td>
      <td className="font-normal w-2/13 md:font-medium p-1 md:p-2 border border-grayExtraLite">
        {sector}
      </td>
      <td className="font-normal w-1/13 md:font-medium p-2 md:p-4 border border-grayExtraLite">
        {securityType}
      </td>
      <td className="font-normal w-1/13 md:font-medium p-2 md:p-4 border border-grayExtraLite">
        {bidPrice}
      </td>
      <td className="font-normal w-1/13 md:font-medium p-2 md:p-4 border border-grayExtraLite">
        {bidSize}
      </td>
      <td className="font-normal w-1/13 md:font-medium p-2 md:p-4 border border-grayExtraLite">
        {askPrice}
      </td>
      <td className="font-normal w-1/3 md:font-medium p-2 md:p-4 border border-grayExtraLite">
        {askSize}
      </td>
      <td className="font-normal w-1/3 md:font-medium p-2 md:p-4 border border-grayExtraLite">
        {formattedTime(lastUpdated)}
      </td>
      <td className="font-normal w-1/3 md:font-medium p-2 md:p-4 border border-grayExtraLite">
        {lastSalePrice}
      </td>
      <td className="font-normal w-1/3 md:font-medium p-2 md:p-4 border border-grayExtraLite">
        {lastSaleSize}
      </td>
      <td className="font-normal w-1/3 md:font-medium p-2 md:p-4 border border-grayExtraLite">
        {formattedTime(lastSaleTime)}
      </td>
      <td className="font-normal w-1/3 md:font-medium p-2 md:p-4 border border-grayExtraLite">
        {volume}
      </td>
    </tr>
  );
};
