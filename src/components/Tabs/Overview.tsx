import { Context } from "@/Context/Context";
import { getNetworks } from "@/api/networks";
import { useContext } from "react";
import { TbExternalLink, TbCopy } from "react-icons/tb";

const Overview = () => {
  const { network, setNetwork } = useContext(Context);
  const networks = getNetworks();

  const loadContent = () => {
    // filter networks by network
    const networkData = networks.filter(
      (_network) => _network.slug === network
    )[0];
    const contracts = networkData.contracts;

    const copyAddress = (address: string) => {
      navigator.clipboard.writeText(address);
    };

    return Object.values(contracts).map((_contract) => (
      <tr key={_contract}>
        <td>{_contract.name}</td>
        <td className="font-mono">
          <div
            className="cursor-pointer tooltip"
            data-tip="copy address"
            onClick={() => copyAddress(_contract.address)}
          >
            {_contract.address}
          </div>
        </td>
        <th>
          <div
            className="cursor-pointer tooltip"
            data-tip="copy address"
            onClick={() => copyAddress(_contract.address)}
          >
            <TbCopy />
          </div>
        </th>
        <th>
          <a
            // className="tooltip"
            // data-tip="view on explorer"
            target="_blank"
            href={networkData.explorer + "/address/" + _contract.address}
          >
            <TbExternalLink />
          </a>
        </th>
      </tr>
    ));
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <table className="table table-auto">
          {/* head */}
          <thead>
            <tr>
              <th>Contract</th>
              <th>Address</th>
              <th></th>
              <th></th>
              {/* <th>Favorite Color</th> */}
            </tr>
          </thead>
          <tbody>{loadContent()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
