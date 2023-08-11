import React, { FC } from 'react';

export const Loading: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
      <div className="flex space-x-2 animate-pulse">
        <div className="w-5 h-5 bg-gray rounded-full" />
        <div className="w-5 h-5 bg-gray rounded-full" />
        <div className="w-5 h-5 bg-gray rounded-full" />
      </div>
    </div>
  );
};
