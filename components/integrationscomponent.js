import React, { useState, useMemo } from 'react';
import { activeintegrations } from './activedevelopment';

// Define some common quicksearch terms related to your integrations
const quicksearch = ['IBC', 'BTP'];

const IntegrationsComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlockchains = useMemo(() => {
    return activeintegrations.filter((chain) =>
      chain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chain.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chain.protocol.some(protocol => protocol.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (  
    <>       
      <div className="flex flex-col py-4 space-y-3">
        <div className='flex items-center'>
              <input
                type="text"
                className="px-4 py-2 bg-gray-100 rounded-md dark:bg-search-dark w-fit"
                placeholder="Filter integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg onClick={()=>{setSearchTerm('')}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 text-gray-100 cursor-pointer dark:text-search-dark">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div>
              {quicksearch.map((term, index) => (
                <button onClick={()=> {setSearchTerm(term)}} key={index} className="px-3 py-1 m-1 bg-gray-100 rounded-full w-fit dark:bg-search-dark">{term}</button>
              ))}
          </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-4 mt-8 sm:grid-cols-3">
        {filteredBlockchains.map((chain, index) => (
          <div key={index} className="mb-6">
            <div className="flex items-center mb-1">
              <img src={chain.logo} alt={`${chain.name} logo`} className="w-6 h-6 mr-2" />
              <h3 className="text-lg font-semibold capitalize">{chain.name}</h3>
            </div>
            <p>Status: <strong className='capitalize'>{chain.status}</strong></p>
            <p>Protocol: <strong>{chain.protocol.join(', ') || 'N/A'}</strong></p>
          </div>
        ))}
      </div>   
    </> 
  );
};

export default IntegrationsComponent;

