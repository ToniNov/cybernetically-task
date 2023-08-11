import { FC } from 'react';

import { Draggable } from 'react-beautiful-dnd';

import { formattedTime } from '../../helpers/formattedTime';
import { StockData } from '../../types';

type PropsType = {
  stock: StockData;
  index: number;
};

export const StockRow: FC<PropsType> = ({ stock, index }) => {
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
    <Draggable draggableId={stock.symbol} index={index} key={stock.symbol}>
      {(provided, snapshot) => (
        <tr
          className={`w-36 ${snapshot.draggingOver ? 'bg-green' : ''}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
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
      )}
    </Draggable>
  );
};
