import { getNetworks } from "./api/networks";

const networks = getNetworks();

export const convertChainIdToNetworkName = (chainId: number) => {
  return `${networks[chainId].name} (${chainId})`;
};

export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}