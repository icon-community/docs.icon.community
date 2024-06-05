"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { DataContextType } from "../types/DataTypes";

const APIDataContext = createContext<DataContextType | undefined>(undefined);

const XCALLTRACKER_ENDPOINT = '/api/statistics/total_messages';

const networks = [
    'icon', 'bsc', 'eth2', 'havah', 'ibc_archway', 'ibc_neutron', 'ibc_injective',
    'avax', 'base', 'arbitrum', 'optimism'
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const APIDataContextProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(true);
    const [totalMessages, setTotalMessages] = useState(0);
    const [networkMessages, setNetworkMessages] = useState<Record<string, { src: number, dest: number }>>({});

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const responseTracker = await fetch(XCALLTRACKER_ENDPOINT, { cache: 'force-cache' });
                const responseTrackerData = await responseTracker.json();
                setTotalMessages(responseTrackerData.data.total);

                const networkData: { network: string, src: number, dest: number }[] = [];

                for (const network of networks) {
                    const [srcResponse, destResponse] = await Promise.all([
                        fetch(`/api/statistics/total_messages?src_network=${network}`, { cache: 'force-cache' }),
                        fetch(`/api/statistics/total_messages?dest_network=${network}`, { cache: 'force-cache' })
                    ]);

                    const [srcData, destData] = await Promise.all([srcResponse.json(), destResponse.json()]);

                    networkData.push({ network, src: srcData.data.total, dest: destData.data.total });

                    await delay(1000); // delay for 1 second between each network fetch
                }

                const networkMessages = networkData.reduce((acc, { network, src, dest }) => {
                    acc[network] = { src, dest };
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
