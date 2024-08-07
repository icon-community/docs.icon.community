// These are your options for status: "mainnet", "testnet", "development", "audits", "not started"

export const activeintegrations = [
    {"name": "Archway", "status": "mainnet", "protocol": ["IBC"], "logo": "/chainlogos/Archway.svg"},
    {"name": "Injective", "status": "mainnet", "protocol": ["IBC"], "logo": "/chainlogos/Injective.svg"},
    {"name": "Neutron", "status": "mainnet", "protocol": ["IBC"], "logo": "/chainlogos/Neutron.svg"},
    {"name": "BNB Chain", "status": "mainnet", "protocol": ["BTP"], "logo": "/chainlogos/Binance-Smart-Chain.svg"},
    {"name": "Ethereum", "status": "mainnet", "protocol": ["BTP"], "logo": "/chainlogos/Ethereum.svg"},
    {"name": "Havah", "status": "mainnet", "protocol": ["BTP"], "logo": "/chainlogos/Havah.svg"},
    {"name": "Base", "status": "mainnet", "protocol": ["Centralised Relay"], "logo": "/chainlogos/Base.svg"},
    {"name": "Avalanche", "status": "mainnet", "protocol": ["Centralised Relay"], "logo": "/chainlogos/Avalanche.svg"},
    {"name": "Composable", "status": "testnet", "protocol": ["IBC"], "logo": "/chainlogos/Composable.svg"},
    {"name": "Optimism", "status": "mainnet", "protocol": ["Centralised Relay"], "logo": "/chainlogos/Optimism.svg"},
    {"name": "Arbitrum", "status": "mainnet", "protocol": ["Centralised Relay"], "logo": "/chainlogos/Arbitrum.svg"},
    {"name": "ICON", "status": "mainnet", "protocol": ["BTP", "IBC"], "logo": "/chainlogos/ICON.svg"},
    {"name": "Sui", "status": "development", "protocol": ["Centralised Relay"], "logo": "/chainlogos/Sui.svg"},
    {"name": "Solana", "status": "development", "protocol": ["Centralised Relay"], "logo": "/chainlogos/Solana.svg"},
    {"name": "Stacks", "status": "development", "protocol": ["Centralised Relay"], "logo": "/chainlogos/Stacks.svg"},
    {"name": "Stellar", "status": "development", "protocol": ["Centralised Relay"], "logo": "/chainlogos/Stellar.svg"},
];

// These are your options for status: "mainnet", "testnet", "development", "audits", "not started"

export const additionaldevelopment = [
    {
        "name": "Wormhole GMP adaptor",
        "status": "mainnet",
        "description": "GMP is not an interoperability solution, it is a messaging standard. The adaptors we have built make GMP compatible with Wormhole and Layerzero, which are interoperable protocols.",
        "notes": "Wormhole adaptors have been released on mainnet for Optimism, Base, Arbitrum, and Avalanche."
    },
    {
        "name": "LayerZero GMP adaptor",
        "status": "mainnet",
        "description": "GMP is not an interoperability solution, it is a messaging standard. The adaptors we have built make GMP compatible with Wormhole and Layerzero, which are interoperable protocols.",
        "notes": "Layerzero adaptors have been released for BSC, Optimism, Avalanche, Arbitrum, and Ethereum."
    },
    {
        "name": "GMP v2.1",
        "status": "audits",
        "description": "Ongoing work undergoing internal audit processes",
        "notes": "Includes ICON emission contracts related to the enshrinement of Balanced."
    },
    {
        "name": "Central Relay Sui module",
        "status": "not started",
        "description": "Adaptor for relay to make it compatible with ICON's GMP on Sui",
        "notes": "Currently in the Discovery phase."
    }
]

export const allintegrations = [
    ...activeintegrations,
    {"name": "Bitcoin", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "Ripple", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "Cardano", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "Chainlink", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "TRON", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "Polkadot", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "Polygon", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "Toncoin", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "Internet Computer", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "Shiba Inu", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "Immutable", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "Aptos", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "NEAR", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "Kaspa", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "Celestia", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "OKB", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "VeChain", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "Mantle", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "Sui", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "Algorand", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
    {"name": "Mina", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/no-results.svg"},
]
