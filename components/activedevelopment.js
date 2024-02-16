// These are your options for status: "mainnet", "testnet", "development", "audits", "not started"

export const activeintegrations = [
    {"name": "Archway", "status": "mainnet", "protocol": ["IBC"], "logo": "/chainlogos/Archway.svg"},
    {"name": "Injective", "status": "mainnet", "protocol": ["IBC"], "logo": "/chainlogos/Injective.svg"},
    {"name": "Neutron", "status": "mainnet", "protocol": ["IBC"], "logo": "/chainlogos/Neutron.svg"},
    {"name": "BNB Chain", "status": "mainnet", "protocol": ["BTP"], "logo": "/chainlogos/Binance-Smart-Chain.svg"},
    {"name": "Ethereum", "status": "mainnet", "protocol": ["BTP"], "logo": "/chainlogos/Ethereum.svg"},
    {"name": "Havah", "status": "testnet", "protocol": ["BTP"], "logo": "/chainlogos/Havah.svg"},
    {"name": "Base", "status": "testnet", "protocol": ["xCall Path"], "logo": "/chainlogos/Base.svg"},
    {"name": "Avalanche", "status": "testnet", "protocol": ["xCall Path"], "logo": "/chainlogos/Avalanche.svg"},
    {"name": "Composable", "status": "development", "protocol": ["IBC"], "logo": "/chainlogos/Composable.svg"},
    {"name": "Optimism", "status": "development", "protocol": [""], "logo": "/chainlogos/Optimism.svg"},
    {"name": "Arbitrum", "status": "development", "protocol": [""], "logo": "/chainlogos/Arbitrum.svg"},
    {"name": "ICON", "status": "mainnet", "protocol": ["BTP", "IBC"], "logo": "/chainlogos/ICON.svg"}
];

// These are your options for status: "mainnet", "testnet", "development", "audits", "not started"

export const additionaldevelopment = [
    {
        "name": "Wormhole xCall adaptor",
        "status": "mainnet",
        "description": "xCall is not an interoperability solution, it is a messaging standard. The adaptors we have built make xCall compatible with Wormhole and Layerzero, which are interoperable protocols.",
        "notes": "Wormhole adaptors have been released on mainnet for Optimism, Base, Arbitrum, and Avalanche."
    },
    {
        "name": "LayerZero Relay",
        "status": "mainnet",
        "description": "xCall is not an interoperability solution, it is a messaging standard. The adaptors we have built make xCall compatible with Wormhole and Layerzero, which are interoperable protocols.",
        "notes": "Layerzero adaptors have been released for BSC, Optimism, Avalanche, Arbitrum, and Ethereum."
    },
    {
        "name": "xCall v2.1",
        "status": "audits",
        "description": "Ongoing work undergoing internal audit processes",
        "notes": "Includes ICON emission contracts related to the enshrinement of Balanced."
    }
]

export const allintegrations = [
    ...activeintegrations,
    {"name": "Bitcoin", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Solana", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Ripple", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Cardano", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Dogecoin", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Chainlink", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "TRON", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Polkadot", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Polygon", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Toncoin", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Internet Computer", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Shiba Inu", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Immutable", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Aptos", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "NEAR", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Stellar", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Kaspa", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Celestia", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "OKB", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "VeChain", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Mantle", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Sui", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Algorand", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
    {"name": "Mina", "status": "not started", "protocol": ["N/A"], "logo": "chainlogos/logo-placeholder.png"},
]
