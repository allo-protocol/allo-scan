import { Context } from "@/Context/Context";
import { getNetworks } from "@/api/networks";
import { useContext } from "react";
import { TbCopy, TbExternalLink } from "react-icons/tb";

export const Overview = () => {
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
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:pl-0">
          {_contract.name}
          <dl className="font-normal lg:hidden">
            <dd className="mt-1 truncate text-gray-700">
              <div
                className="cursor-pointer tooltip"
                data-tip="copy address"
                onClick={() => copyAddress(_contract.address)}
              >
                {_contract.address}
              </div>
            </dd>
            <dd className="mt-1 truncate text-gray-500 sm:hidden">
              <div
                className="cursor-pointer tooltip"
                data-tip="copy address"
                onClick={() => copyAddress(_contract.address)}
              >
                <TbCopy />
              </div>
            </dd>
            <dd className="mt-1 truncate text-gray-500 sm:hidden">
              <a
                // className="tooltip"
                // data-tip="view on explorer"
                target="_blank"
                href={networkData.explorer + "/address/" + _contract.address}
              >
                <TbExternalLink />
              </a>
            </dd>
          </dl>
        </td>
        <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
          <div
            className="cursor-pointer tooltip"
            data-tip="copy address"
            onClick={() => copyAddress(_contract.address)}
          >
            {_contract.address}
          </div>
        </td>
        <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
          <div
            className="cursor-pointer tooltip"
            data-tip="copy address"
            onClick={() => copyAddress(_contract.address)}
          >
            <TbCopy />
          </div>
        </td>
        <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
          <a
            // className="tooltip"
            // data-tip="view on explorer"
            target="_blank"
            href={networkData.explorer + "/address/" + _contract.address}
          >
            <TbExternalLink />
          </a>
        </td>
      </tr>
    ));
  };

  return (
    <div className="px-4 mt-2 sm:px-6 lg:px-8">
      <table className="min-w-full divide-y divide-gray-300">
        {/* head */}
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
            >
              Contract
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
            >
              Address
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
            >
              Copy
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
            >
              Explorer
            </th>
            {/* <th>Favorite Color</th> */}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">{loadContent()}</tbody>
      </table>
    </div>
  );
};
