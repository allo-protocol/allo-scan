import { getNetworks } from "./networks";
import { ethers } from "ethers";

const networks = getNetworks();

export const graphqlEndpoint = "http://localhost:5555/graphql";

export const convertChainIdToNetworkName = (chainId: number) => {
  return `${networks[chainId].name} (${chainId})`;
};

export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatAmount(amount: number) {
  return ethers.formatEther(amount);
}

export function shortenPoolName(name: string) {
  return name.length > 10 ? `${name.slice(0, 10)}...` : name;
}
