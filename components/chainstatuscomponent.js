import React from 'react';
import { activeintegrations } from './activedevelopment';

const ChainStatusComponent = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-4 mt-8 mb-4 sm:grid-cols-3">
      {activeintegrations.map((chain, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center mb-1">
            <img src={chain.logo} alt={chain.name + " logo"} className="w-6 h-6 mr-2" />
            <h3 className="text-lg font-semibold capitalize">{chain.name}</h3>
          </div>
          {/* <p>Status: <strong className='capitalize'>{chain.status}</strong></p>
          <p>Protocol: <strong>{chain.protocol.join(', ') || 'N/A'}</strong></p> */}
        </div>
      ))}
    </div>
  );
};

export default ChainStatusComponent;
``
