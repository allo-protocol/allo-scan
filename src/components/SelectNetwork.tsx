"use client";

import { Context } from "@/Context/Context";
import { getNetworks } from "@/api/networks";
import { Network } from "@/types";
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
      className="tab tab-active text-left"
    >
      {networks.map((_network: Network) => (
        <option
          value={_network.slug}
        >
          {_network.name}
        </option>
      ))}
    </select>
  );
};

export default SelectNetwork;
