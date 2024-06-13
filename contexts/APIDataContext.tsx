"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { DataContextType } from "../types/DataTypes";

const APIDataContext = createContext<DataContextType | undefined>(undefined);

const XCALLTRACKER_ENDPOINT = '/api/statistics/total_messages';

const networks = [
    'icon', 'bsc', 'eth2', 'havah', 'ibc_archway', 'ibc_neutron', 'ibc_injective',
    'avax', 'base', 'arbitrum', 'optimism'
];

export const APIDataContextProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(true);
    const [totalMessages, setTotalMessages] = useState(0);
    const [networkMessages, setNetworkMessages] = useState<Record<string, { src: number, dest: number }>>({});

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Fetch total messages
                const responseTracker = await fetch(XCALLTRACKER_ENDPOINT, { cache: 'no-cache' });
                const responseTrackerData = await responseTracker.json();
                setTotalMessages(responseTrackerData.data.total);

                // Fetch source messages
                const srcResponse = await fetch(`${XCALLTRACKER_ENDPOINT}?src_networks=${networks.join(',')}`, { cache: 'no-cache' });
                const srcData = await srcResponse.json();

                // Fetch destination messages
                const destResponse = await fetch(`${XCALLTRACKER_ENDPOINT}?dest_networks=${networks.join(',')}`, { cache: 'no-cache' });
                const destData = await destResponse.json();

                // Combine source and destination messages
                const networkMessages = networks.reduce((acc, network) => {
                    acc[network] = {
                        src: srcData.data.src_networks[network]?.total || 0,
                        dest: destData.data.dest_networks[network]?.total || 0
                    };
                    return acc;
                }, {} as Record<string, { src: number, dest: number }>);

                setNetworkMessages(networkMessages);
            } catch (error) {
                console.error('Error fetching network messages:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <APIDataContext.Provider value={{ loading, totalMessages, networkMessages }}>
            {children}
        </APIDataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(APIDataContext);
    if (context === undefined) {
        throw new Error("useData must be used within a APIDataContextProvider");
    }
    return context;
};
