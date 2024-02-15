import React, { useState, useEffect } from 'react';
import { allintegrations } from './activedevelopment';
import Link from 'next/link';
import Image from 'next/image';

const ChainChecker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [matchingChains, setMatchingChains] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(true);
  const displayAnimation = isVisible ? 'animate-fadeIn' : 'animate-fadeOut';
  const displayAnimation2 = isVisible2 ? 'animate-fadeIn' : 'animate-fadeOut';
  
  useEffect(() => {
    const debounceId = setTimeout(() => {
      if (searchTerm.length >= 2) {
        const filteredChains = allintegrations.filter(chain =>
          chain.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setMatchingChains(filteredChains);
        setIsVisible(filteredChains.length > 0);
        setIsVisible2(false);
      } else {
        setIsVisible(false);
        setIsVisible2(true);
        setMatchingChains([]);
      }
    }); 

    return () => clearTimeout(debounceId); // Cleanup function to clear the timeout
  }, [searchTerm]);

  return (
    <div className='relative z-10 flex flex-col items-center w-full px-1 py-0 sm:py-4 sm:items-start transform-all'>
      {/* Search Bar */}
      <div className='flex w-full sm:justify-start'>
          <div className='flex items-center'>          
            <input 
              type="text" 
              className='px-8 py-3 sm:py-4 border-2 rounded-full border-dark dark:border-light w-[320px] sm:w-[400px]' 
              placeholder="Type in your Blockchain"
              onChange={(e) => setSearchTerm(e.target.value)} 
              value={searchTerm} 
            />
          </div>
      </div>

      {/* Connected Protocols Display */}
      {searchTerm.length < 1 && <div className={`absolute font-exo left-0 top-[100px] ${displayAnimation2} ` }>           
            <div className='flex flex-row items-start '>
              
              <div className='space-'>
                <p className=''>Connected</p>
                <p className=''>Protocols</p>
              </div>  
              
              <div className='relative flex items-center h-12 px-4 py-1 ml-4 space-x-2 font-medium border-l-2 border-dark/60 dark:border-light/60' >
                <Image src='/images/connected-protocols/ibc.svg' alt='IBC' width={40} height={40} />
                <Image src='/images/connected-protocols/btp.svg' alt='BTP' width={40} height={40} />
                <Image src='/images/connected-protocols/wormhole.svg' alt='Wormhole' width={40} height={40} />
                <Image src='/images/connected-protocols/layerzero.svg' alt='Layerzero' width={40} height={40} />
                <Image src='/images/connected-protocols/icon-bridge.svg' alt='ICON Bridge' width={40} height={40} />
              </div>
            </div>  
      </div>}

      {/* Matching Chains Display 2*/}
      {searchTerm && <div className={`absolute font-exo left-0 top-[100px] ${displayAnimation} `}>
            
            {matchingChains[0] && <div className='flex flex-row items-start '>
              
              <div className='flex items-center'>
              <img className='w-8 h-8 grayscale' src={matchingChains[0]?.logo} alt={matchingChains[0]?.name} />
              <p className='ml-2 font-bold'>{matchingChains[0]?.name}</p>
              </div>  
              
              <div className='relative h-[74px] px-4 py-1 ml-4 font-medium border-l-2 border-dark/40 dark:border-light/40' >
                {matchingChains[0]?.status === 'not started' && <p>Currently on our waiting list</p>}
                {matchingChains[0]?.status === 'development' && <p>Currently under development</p>}
                {matchingChains[0]?.status === 'testnet' && <p>Available on testnet</p>}
                {matchingChains[0]?.status === 'internal audits' && <p>Undergoing internal audits</p>}
                {matchingChains[0]?.status === 'mainnet' && <p >Available on mainnet</p>}
                
                
                {matchingChains[0]?.status === 'not started' && <Link className="absolute block font-bold top-10 left-4 text-xteal" href='/cross-chain-communication/general-message-passing-xcall'>View active development</Link>}
                {matchingChains[0]?.status === 'development' && <a className="absolute block font-bold top-10 left-4 text-xteal" href='cross-chain-communication/active-development'>Keep track here</a>}
                {matchingChains[0]?.status === 'testnet' && <a className="absolute block font-bold top-10 left-4 text-xteal" href='cross-chain-communication/active-development'>Keep track here</a>}
                {matchingChains[0]?.status === 'internal audits' && <a className="absolute block font-bold top-10 left-4 text-xteal" href='cross-chain-communication/active-development'>Keep track here</a>}
                {matchingChains[0]?.status === 'mainnet' && <Link className="absolute block font-bold top-10 left-4 text-xteal" href='/cross-chain-communication/general-message-passing-xcall'>Get started</Link>}
                
              </div>
            </div>} 
              
      </div>}
      
    </div>
  );
};

export default ChainChecker;

