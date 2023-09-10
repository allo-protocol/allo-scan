"use client";

import { Context } from "@/Context/Context";
import { getNetworks } from "@/api/networks";
import { Network } from "@/types/types";
import { useContext } from "react";

const SelectNetwork = () => {
  const { network, setNetwork } = useContext(Context);
  const networks: Network[] = getNetworks();

  const setNetworkHandler = (event :any) => {
    setNetwork(event.target.value);
  };

  return (
    <select
      defaultValue={network}
      onChange={setNetworkHandler}
      className="tab tab-active text-left pr-1 bg-base rounded-md shadow-md p-2 border-none active:border-none focus:border-none"
    >
      {networks.map((_network: Network) => (
        <option
          key={_network.slug}
          value={_network.slug}
        >
          {_network.name}
        </option>
      ))}
    </select>
  );
};

export default SelectNetwork;
