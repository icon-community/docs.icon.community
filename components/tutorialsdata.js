import React, { useState, useMemo } from 'react';
import Tile from "./tile"

  export const tutorials = [
      {
        title: "Setting up initCommissionRate, setCommissionRate and unjail",
        description: "Learn how to set up initCommissionRate, setCommissionRate and unjail in ICON platform",
        href: "tutorials/tutorials/commission-rate"
      },
      {
        title: "xCall Tutorials Part 1",
        description: "Creating a cross-chain voting dApp: Part 1.",
        href: "tutorials/2023-07-11-xcall-tutorials-creating-a-cross-chain-voting-dapp-part-1"
      },
      {
        title: "xCall Tutorials Part 2",
        description: "Creating a cross-chain voting dApp: Part 2.",
        href: "tutorials/2023-07-11-xcall-tutorials-creating-a-cross-chain-voting-dapp-part-2"
      },
      {
        title: "xCall Tutorials Part 3",
        description: "Creating a cross-chain voting dApp: Part 3.",
        href: "tutorials/2023-07-11-xcall-tutorials-creating-a-cross-chain-voting-dapp-part-3"
      },
      {
        title: "xCall Tutorials Part 4",
        description: "Creating a cross-chain voting dApp: Part 4.",
        href: "tutorials/2023-07-11-xcall-tutorials-creating-a-cross-chain-voting-dapp-part-4"
      },
      {
        title: "Zero Knowledge Proofs Part 1",
        description: "Introduction to zero knowledge proofs on ICON.",
        href: "tutorials/2023-05-10-zero-knowledge-proofs-on-icon-pt1"
      },
      {
        title: "Zero Knowledge Proofs Part 2",
        description: "Diving deeper into zero knowledge proofs.",
        href: "tutorials/2023-05-11-zero-knowledge-proofs-on-icon-pt2"
      },
      {
        title: "Zero Knowledge Proofs Part 3",
        description: "Advanced concepts in zero knowledge proofs.",
        href: "tutorials/2023-05-12-zero-knowledge-proofs-on-icon-pt3"
      },
      {
        title: "BTP Tutorial",
        description: "Setting up BTP locally for testing.",
        href: "tutorials/2023-05-02-btp-tutorial-setting-up-btp-locally-for-testing"
      },
      {
        title: "ICON Java Tutorial Part 1",
        description: "Setting up your development environment and writing your first smart contract.",
        href: "tutorials/2023-04-06-java-tutorial-part-1-setting-development-environment-and-writing-smart-contract"
      },
      {
        title: "ICON Java Tutorial Part 2",
        description: "Deploying and interacting with your smart contract.",
        href: "tutorials/2023-04-06-java-tutorial-part-2-deploying-and-interacting-with-smart-contract"
      },
      {
        title: "ICON Java Tutorial Part 3",
        description: "Unit testing your smart contracts.",
        href: "tutorials/2023-04-06-java-tutorial-part-3-unit-testing"
      },
      {
        title: "Interacting with ICON Wallets in the Browser",
        description: "Learn how to interact with ICON wallets in the browser.",
        href: "tutorials/2023-04-01-interacting-with-icon-wallets-in-the-browser"
      },
      {
        title: "How to Create a Custom Testnet",
        description: "Setting up a custom testnet for ICON development.",
        href: "tutorials/2023-03-26-how-to-create-a-custom-testnet"
      },
      {
        title: "How to Create a Wallet Account",
        description: "Creating a wallet account for ICON development.",
        href: "tutorials/2023-03-12-how-to-create-a-wallet-account"
      },
      {
        title: "How to Check if a Validator is Missing Blocks",
        description: "Checking if a validator is missing blocks on ICON.",
        href: "tutorials/2023-03-11-how-to-check-if-a-validator-is-missing-blocks"
      },
      {
        title: "How to Query an ICON Smart Contract",
        description: "Querying an ICON smart contract with Python.",
        href: "tutorials/2022-12-19-icon-with-python-how-to-query-an-icon-smart-contract"
      },
      {
        title: "How to Get Started with the ICON Python SDK",
        description: "Getting started with the ICON Python SDK.",
        href: "tutorials/2022-11-11-icon-with-python-getting-started-with-the-icon-python-sdk"
      },
      {
        title: "How to Interact with ICON Bridge Contracts & Proxy Contracts on EVM Blockchains",
        description: "Interacting with ICON bridge contracts and proxy contracts on EVM blockchains.",
        href: "tutorials/2022-11-09-interacting-with-icon-bridge-contracts-proxy-contracts-on-evm-blockchains"
      }
    ];

  const quicksearch = ['cross-chain', 'wallet', 'zero knowledge proofs', 'java']
  
  const TutorialsComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const filteredTutorials = useMemo(() => {
      return tutorials.filter((tutorial) =>
        tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tutorial.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [searchTerm]);
    
  
    return (
      <div>
        <div className="flex flex-col py-4 space-y-3">
          <div className='flex items-center'>
            <input
              type="text"
              className="px-4 py-2 bg-gray-100 rounded-md dark:bg-search-dark w-fit"
              placeholder="Filter tutorials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg onClick={()=>{setSearchTerm('')}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 text-gray-100 cursor-pointer dark:text-search-dark">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div>
            {quicksearch.map((search, index) => (
              <button onClick={()=> {setSearchTerm(search)}} key={index} className="px-3 py-1 m-1 bg-gray-100 rounded-full w-fit dark:bg-search-dark">{search}</button>
            ))}
          </div>
          
        </div>
        <div className="grid grid-cols-1 pt-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredTutorials.map((tutorial, index) => (
            <Tile
              key={index}
              title={tutorial.title}
              description={tutorial.description}
              href={tutorial.href}
            />
          ))}
        </div>
      </div>
    );
  };

  export default TutorialsComponent;