import { NetworkContext } from "@/Context/NetworkContext";
import { getNetworks, getNetworksBySlug } from "@/api/networks";
import { useContext } from "react";
import { TbCopy, TbExternalLink } from "react-icons/tb";
import SelectNetwork from "./SelectNetwork";

export const Dashboard = () => {
  const { network } = useContext(NetworkContext);
  const networkData = getNetworksBySlug(network);

  const loadCoreContracts = () => {
    const coreContracts = networkData.coreContracts;
    const copyAddress = (address: string) => {
      navigator.clipboard.writeText(address);
    };

    return Object.values(coreContracts).map((_contract) => (
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
        <td>network</td>
        {/* <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
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
        </td> */}
      </tr>
    ));
  };

  // lg:border lg:rounded-md lg:shadow-black lg:shadow-md

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-2">
      <div className="sm:flex flex flex-col items-center">
        <div className="sm:flex-auto flex-auto">
          <h1 className="text-center text-base font-semibold leading-6 text-gray-900">
            Allo At-A-Glance
          </h1>
          <p className="mt-2 text-center text-sm text-gray-700">
            
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 lg:border lg:rounded-md lg:shadow-black lg:shadow-md">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="hidden py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    <div className="group inline-flex">Contract</div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    <div className="group inline-flex">Address</div>
                  </th>
                  {/* TODO: add a filter/sort by network feature */}
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    <div className="group inline-flex">
                      <SelectNetwork />
                    </div>
                  </th>
                </tr>
              </thead>
              <CoreContractsTable loadCoreContracts={loadCoreContracts} />
              </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const CoreContractsTable = (props: { loadCoreContracts: any }) => {
  return (
    <tbody className="divide-y divide-gray-200">
      {props.loadCoreContracts()}
    </tbody>
  );
};

const StrategyContractsTable = () => {};

// TODO: add stat cards for core contracts and strategy contracts
const CoreContractsStats = () => {};

const StrategyContractsStats = () => {};

// Display the network name and chain ID with explorer link
const NetworkDisplay = () => {};

export default Dashboard;
