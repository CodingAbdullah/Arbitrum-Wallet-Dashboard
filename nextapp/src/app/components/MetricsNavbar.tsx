'use client';

import GenericFetcher from '@/app/utils/functions/GenericFetcher';
import useSWR from 'swr';
import NavbarArbitrumDataType from '../utils/types/NavbarArbitrumDataType';
import ArbitrumGasDataType from '../utils/types/ArbitrumGasDataType';

// Custom Metrics Navbar Component
// useSWR for efficient data fetching
export default function MetricsNavbar() {
    // Data fetching using the custom fetcher function and useSWR
    const { data: ethData, error: ethError, isLoading: ethLoading } = useSWR<NavbarArbitrumDataType>('/api/navbar/ethereum-price', GenericFetcher, { refreshInterval: 50000 });
    const { data: gasData, error: gasError, isLoading: gasLoading } = useSWR<ArbitrumGasDataType>('/api/navbar/gas-track', GenericFetcher, { refreshInterval: 50000 });

    // Conditionally rendering component
    if (ethError || gasError) 
        return <div className="bg-red-500 text-white p-2">Error fetching data</div>

    else if (ethLoading || gasLoading) 
        return <div className="bg-gray-800 text-white p-2">Loading...</div>

    else if (ethData && gasData) {
        const { arbitrum } = ethData;

        // Returning the final JSX code for component
        return (
            <nav className="bg-gray-900 text-white py-2 px-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex space-x-4 items-center">
                        <div className="flex items-center space-x-2">
                            <span className="ping-animation w-2 h-2 bg-green-500 rounded-full"></span>
                            <span className="text-green-500 text-xs font-semibold">Live</span>
                        </div>                        
                            <span>ETH Price: <span>${ Number(arbitrum?.usd).toFixed(2) }</span></span>
                        <span>
                            24-Hr % Chg: 
                            <span className={arbitrum?.usd_24h_change >= 0 ? 'text-green-500' : 'text-red-500'}>
                                { arbitrum?.usd_24h_change > 0 ? ' +' : ' ' }
                                { arbitrum?.usd_24h_change.toFixed(2) }%
                            </span>
                        </span>
                        <span>Gas Price: <span className="font-bold">{ String(gasData?.gasPrice) } Gwei</span></span>
                    </div>
                </div>
            </nav>
        )
    }
}