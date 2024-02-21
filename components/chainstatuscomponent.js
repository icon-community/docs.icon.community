import React from 'react';
import { activeintegrations } from './activedevelopment';

const ChainStatusComponent = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-2 mb-4 sm:gap-4 md:grid-cols-3">
      {activeintegrations.map((chain, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center mb-1 dark:text-white ">
            <img src={chain.logo} alt={chain.name + " logo"} className="w-6 h-6 mr-2 " />
            <h3 className="text-base font-semibold capitalize sm:text-lg">{chain.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChainStatusComponent;
``
