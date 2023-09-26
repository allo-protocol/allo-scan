import { Metadata, MetadataProtocol } from "@/types/types";
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

export function truncatePoolName(name: string) {
  return name.length > 10 ? `${name.slice(0, 10)}...` : name;
}

export function truncateTimestamp(timestamp: string) {
  return timestamp.slice(0, 10);
}

export const convertBytesToShortString = (address: string) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};

export const convertAddressToShortString = (address: string) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};

export const copy = (data: string) => {
  navigator.clipboard.writeText(data);
};

export const fetchIpfsMetadata = async (
  metadata: Metadata,
): Promise<Object> => {
  let metadataObj: Object = {};

  if (metadata.protocol === MetadataProtocol.IPFS) {
    try {
      const response = await fetch(
        `https://gitcoin.mypinata.cloud/ipfs/${metadata.pointer}`,
      );
      // Check if the response status is OK (200)
      if (response.ok) {
        const data = await response.text();
        try {
          let metadataObjJson = JSON.parse(data ?? "");
          metadataObj = metadataObjJson;
        } catch (error) {
          metadataObj = {
            error: "Error parsing metadata",
          };
        }
      } else {
        metadataObj = {
          error: "Error fetching metadata",
        };
      }
    } catch (error) {
      metadataObj = {
        error: "Error fetching metadata",
      };
    }
  }

  return metadataObj;
};
