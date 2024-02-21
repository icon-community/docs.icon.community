import React, { useState, useMemo } from 'react';
import { additionaldevelopment } from './activedevelopment';

const quicksearch = ["mainnet", "testnet", "development", "audits", "not started"]; 

const AdditionalDevelopment = () => {
  
  const [searchTerm, setSearchTerm] = useState('');

  const statusOrder = {
    'not started': 1,
    'testnet': 2,
    'audits': 3,
    'mainnet': 4,
  };

  
  const filteredAndSortedAdditionalDevelopment = useMemo(() => {
    // First, filter the array based on the search term
    const filtered = additionaldevelopment.filter((work) =>
      work.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      work.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Then, sort the filtered array based on the predefined status order
    const sorted = filtered.sort((a, b) => {
      return statusOrder[a.status.toLowerCase()] - statusOrder[b.status.toLowerCase()];
    });

    return sorted;
  }, [searchTerm]);

  return (  
    <>       
      <div className="flex flex-col py-4 space-y-3">
        <div className='flex items-center'>
          <input
            type="text"
            className="px-4 py-2 bg-gray-100 rounded-md dark:bg-search-dark w-fit"
            placeholder="Filter development..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg onClick={()=>{setSearchTerm('')}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 text-gray-400 cursor-pointer ">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <div>
          {quicksearch.map((term, index) => (
            <button onClick={()=> {setSearchTerm(term)}} key={index} className="px-3 py-1 m-1 bg-gray-100 rounded-full w-fit dark:bg-search-dark">{term}</button>
          ))}
        </div>
      </div>
      <div className="grid w-full grid-cols-3 gap-4 mt-8">
        {filteredAndSortedAdditionalDevelopment.map((work, index) => (
          <div key={index} className="col-span-3 mb-6">
            <div className="flex items-center mb-1">
              {work.status === 'development' && (<div className='flex items-center px-2 py-1.5 mr-2 rounded bg-red-600/10 text-sm'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
              </svg>{work.status}</div>)
              }
              {work.status === 'testnet' && (<div className='flex items-center px-2 py-1.5 mr-2 rounded bg-orange-400/10 text-sm'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>{work.status}</div>)
              }
              {work.status === 'mainnet' && (<div className='flex items-center px-2 py-1.5 mr-2 rounded bg-xteal/10 text-sm'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>{work.status}</div>)
              }
              {work.status === 'audits' && (<div className='flex items-center px-2 py-1.5 mr-2 rounded bg-blue-400/10 text-sm'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>{work.status}</div>)
              }
              {work.status === 'not started' && (<div className='flex items-center px-2 py-1.5 mr-2 rounded bg-gray-400/10 text-sm'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>{work.status}</div>)
              }
              <h3 className="text-lg font-semibold capitalize">{work.name}</h3>
            </div>
            <p>{work.description}</p>
            <p className='p-2 my-1 border rounded border-dark/20 w-fit'>📢 {work.notes}</p>
          </div>
        ))}
      </div>   
    </> 
  );
};

export default AdditionalDevelopment;
