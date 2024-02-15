import React, { useState, useMemo } from 'react';
import Tile from "./tile"

export const learn = [
    {
      title: "Bringing Zero Knowledge Proofsd to the ICON network with zkSNARK",
      description: "Learn how to bring Zero Knowledge Proofs to the ICON network with zkSNARKs",
      href: "learn/bringing-zero-knowledge-proofs-to-icon"
    },
    {
      title: "Databases and Distributed Systems",
      description: "Learn about databases and distributed systems on the ICON network.",
      href: "learn/databases-and-distributed-systems"
    },
    {
      title: "Cryptocraphic primitives",
      description: "Learn about cryptographic primitives on the ICON network.",
      href: "learn/cryptographic-primitives"
    },
    {
      title: "What is indexing and how it works for ICON",
      description: "Learn about indexing and how it works for ICON.",
      href: "learn/what-is-indexing"
    },
    {
      title: "Clusters of users",
      description: "Learn about clusters of users on the ICON network.",
      href: "learn/clusters_of_users"
    },
    {
      title: "What is Zero Knowledge Protocol?",
      description: "A new paradigm for privacy, security and trust in blockchain world ",
      href: "learn/what-is-zk"
    },
    {
      title: "Buying a partial Bitcoin",
      description: "Learn how to buy a partial Bitcoin.",
      href: "learn/buying-a-partial-bitcoin"
    },
    {
      title: "Creating a crypto for users",
      description: "Learn how to create a crypto wallet.",
      href: "learn/creating-a-wallet"
    },
    {
      title: "What is ICON?",
      description: "ICON is an open-source layer 1 delegated proof-of-stake (DPoS) blockchain and smart contract platform",
      href: "learn/what-is-icon"
    },
    {
      title: "What is ICX?",
      description: "The value of cross-chain activity gets captured in the ICX token.",
      href: "learn/what-is-icx"
    },
    {
      title: "What is ICON governance?",
      description: "ICON is a DPoS network where stakers delegate ICX to validators that produce blocks and participate in governance.",
      href: "learn/what-is-icon-governance"
    },
    {
      title: "What is the Contribution Proposal System?",
      description: "ICON's Contribution Proposal System (CPS) is a decentralized grant program operated by validators on the ICON network.",
      href: "learn/what-is-cps"
    },
    {
      title: "What is ICON Bridge?",
      description: "ICON Bridge is an early iteration of ICON's cutting-edge interoperability product, BTP, which allows cross-chain transfers and integration with any blockchain that supports smart contracts.",
      href: "learn/what-is-icon-bridge"
    },
  ];

  const quicksearch = ['zkSNARK', 'interoperability', 'governance', 'zero knowledge', ];

  const LearnComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const filteredLearns = useMemo(() => {
      return learn.filter((learn) =>
        learn.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        learn.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [searchTerm]);
  
    return (
      <div>
        <div className="flex flex-col py-4 space-y-3">
          <div className='flex items-center'>
            <input
              type="text"
              className="px-4 py-2 bg-gray-100 rounded-md dark:bg-search-dark w-fit"
              placeholder="Filter articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg onClick={() => { setSearchTerm('') }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 text-gray-600 cursor-pointer dark:text-search-dark">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div>
            {quicksearch.map((search, index) => (
              <button
                onClick={() => { setSearchTerm(search) }}
                key={index}
                className="px-3 py-1 m-1 bg-gray-100 rounded-full w-fit dark:bg-search-dark">
                {search}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 pt-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredLearns.map((learn, index) => (
            <Tile
              key={index}
              title={learn.title}
              description={learn.description}
              href={learn.href}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default LearnComponent;