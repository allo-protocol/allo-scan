import { getNetworks } from "./networks";
import { ethers } from "ethers";

const networks = getNetworks();

export const convertChainIdToNetworkName = (chainId: number) => {
  return `${networks[chainId]?.name} (${chainId})`;
};

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatAmount(amount: number, decimals: number) {
  return ethers.formatUnits(amount, decimals);
}

export function shortenPoolName(name: string) {
  return name.length > 10 ? `${name.slice(0, 10)}...` : name;
}
