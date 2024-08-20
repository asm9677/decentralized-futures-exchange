import AccountBalanceABI from "./abis/AccountBalanceABI.json";
import ClearingHouseABI from "./abis/ClearingHouseABI.json";
import ERC20ABI from "./abis/ERC20ABI.json";
import MarketRegistryABI from "./abis/MarketRegistryABI.json";
import UniswapV2FactoryABI from "./abis/UniswapV2FactoryABI.json";
import UniswapV2PairABI from "./abis/UniswapV2PairABI.json";
import UniswapV2RouterABI from "./abis/UniswapV2RouterABI.json";
import VaultABI from "./abis/VaultABI.json";

export const contracts = {
  accountBalance: {
    address: "0x1a726A778C2c215D6B50CB1E87fdd7Dad3B05FA1",
    abi: AccountBalanceABI,
  },
  clearingHouse: {
    address: "0xAb0678c1B6AAb55820F74dC87E13DB61F77B5D90",
    abi: ClearingHouseABI,
  },
  marketRegistry: {
    address: "0x0b1Fb4727C2133269f09A743cbF4Cf9338811Ac7",
    abi: MarketRegistryABI,
  },
  vault: {
    address: "0x93b1C7fFbA83E18214F8370883AEC7daEE00557f",
    abi: VaultABI,
  },
  usdt: {
    address: "0x8e7eF834538bcBbCE5A546a31ed9b41F766A491c",
    abi: ERC20ABI,
  },
  virtualToken: {
    address: "",
    abi: ERC20ABI,
  },
  uniswapV2Router: {
    address: "0x4cA5Db20cAC8998bBB2Db00b25c0Bb86535fe68E",
    abi: UniswapV2RouterABI,
  },
  uniswapV2Factory: {
    address: "0x01b8293Ead41f293F91A630aD0697e0B2D92E6FC",
    abi: UniswapV2FactoryABI,
  },
  uniswapV2Pair: {
    address: "",
    abi: UniswapV2PairABI,
  },
};
