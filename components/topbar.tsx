"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { useData } from "../contexts/APIDataContext";

const chainDetailsMapping = {
  arbitrum: { displayName: "Arbitrum", imageName: "Arbitrum.svg" },
  avax: { displayName: "Avalanche", imageName: "Avalanche.svg" },
  base: { displayName: "Base", imageName: "Base.svg" },
  bsc: { displayName: "BNB Chain", imageName: "Binance-Smart-Chain.svg" },
  eth2: { displayName: "Ethereum", imageName: "Ethereum.svg" },
  havah: { displayName: "Havah", imageName: "Havah.svg" },
  ibc_archway: { displayName: "Archway", imageName: "Archway.svg" },
  ibc_injective: { displayName: "Injective", imageName: "Injective.svg" },
  ibc_neutron: { displayName: "Neutron", imageName: "Neutron.svg" },
  icon: { displayName: "ICON", imageName: "ICON.svg" },
  optimism: { displayName: "Optimism", imageName: "Optimism.svg" },
};

export function Topbar() {
  const { networkMessages, loading } = useData();
  const [chainmessages, setChainMessages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      const generateChainMessages = () => {
        const messages = [];
        for (const [key, value] of Object.entries(networkMessages)) {
          const chainDetails = chainDetailsMapping[key];
          if (chainDetails) {
            messages.push(
              { messages: value.src, chain: chainDetails.displayName, role: "src", image: chainDetails.imageName },
              { messages: value.dest, chain: chainDetails.displayName, role: "dest", image: chainDetails.imageName }
            );
          }
        }
        return messages;
      };
      setChainMessages(generateChainMessages());
      setIsLoaded(true);
    }
  }, [loading, networkMessages]);

  return (
    <div
      className={`h-fit rounded-md flex flex-col antialiased bg-transparent w-full dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden transition-all duration-1000 ease-in-out transform ${
        isLoaded ? "max-h-64 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-10"
      }`}
    >
      {isLoaded && (
        <InfiniteMovingCards
          items={chainmessages}
          direction="right"
          speed="slow"
        />
      )}
    </div>
  );
}
