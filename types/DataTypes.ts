export interface XCallFee {
  [x: string]: any;
  amount: number;
  denomination: string;
  price: number;
}

export interface XCallFees {
  [key: string]: XCallFee;
}

export interface DataContextType {
  loading: boolean;
  totalMessages: number;
  networkMessages: Record<string, NetworkMessages>;
}

export interface DatabaseDataContextType {
  ICONArrayDaily: string[];
  ArchwayArrayDaily: string[];
  InjectiveArrayDaily: string[];
  BNBArrayDaily: string[];
  AvalancheArrayDaily: string[];
  EthereumArrayDaily: string[];
  NeutronArrayDaily: string[];
  BaseArrayDaily: string[];
  ArbArrayDaily: string[];
}

export interface RelayWallet {
  address: string;
  balance: number;
  denomination: string;
}

export type RelayWallets = Record<string, RelayWallet>;

export interface RelayDataContextType {
  relayWallets: RelayWallets;
  loading: boolean;
  error: string | null;
}

export interface NetworkMessages {
  src: number;
  dest: number;
}