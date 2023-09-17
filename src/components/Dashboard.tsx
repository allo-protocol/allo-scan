import { NetworkContext } from "@/Context/NetworkContext";
import { getNetworksBySlug } from "@/api/networks";
import { useContext } from "react";
import { Address, AddressFull } from "./Address";

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
              <Address
                address={_contract.address}
                chainId={Number(networkData.id)}
              />
            </dd>
          </dl>
        </td>
        <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
          <AddressFull
            address={_contract.address}
            chainId={Number(networkData.id)}
          />
        </td>
        {/* <td>{_contract.chainId}</td> */}
      </tr>
    ));
  };

  const loadStrategyContracts = () => {
    const strategyContracts = networkData.strategyContracts;
    const copyAddress = (address: string) => {
      navigator.clipboard.writeText(address);
    };

    return Object.values(strategyContracts).map((_contract: any) => (
      <tr key={_contract}>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:pl-0">
          {_contract.name}
          <dl className="font-normal lg:hidden">
            <dd className="mt-1 truncate text-gray-700">
              <Address
                address={_contract.address}
                chainId={Number(networkData.id)}
              />
            </dd>
          </dl>
        </td>
        <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
          <AddressFull
            address={_contract.address}
            chainId={Number(networkData.id)}
          />
        </td>
        {/* <td>{_contract.chainId}</td> */}
      </tr>
    ));
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-2">
      <div className="sm:flex flex flex-col items-center">
        <div className="sm:flex-auto flex-auto">
          <h1 className="text-center text-2xl font-semibold leading-6 text-gray-900">
            Allo At-A-Glance
          </h1>
          <p className="mt-2 text-center text-sm text-gray-700"></p>
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
                  {/* <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    <div className="group inline-flex">
                      <SelectNetwork />
                    </div>
                  </th> */}
                </tr>
              </thead>
              <CoreContractsTable loadCoreContracts={loadCoreContracts} />
            </table>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10">
        <div className="flex-auto">
          <h1 className="text-center text-2xl font-semibold leading-6 text-gray-900">
            Cloneable Strategy Contracts
          </h1>
          <p className="mt-2 text-center text-sm text-gray-700"></p>
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
                  {/* <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    <div className="group inline-flex">
                      <SelectNetwork />
                    </div>
                  </th> */}
                </tr>
              </thead>
              <StrategyContractsTable
                loadStrategyContracts={loadStrategyContracts}
              />
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

const StrategyContractsTable = (props: { loadStrategyContracts: any }) => {
  return (
    <tbody className="divide-y divide-gray-200">
      {props.loadStrategyContracts()}
    </tbody>
  );
};

// TODO: add stat cards for core contracts and strategy contracts
const CoreContractsStats = () => {};

const StrategyContractsStats = () => {};

// Display the network name and chain ID with explorer link
const NetworkDisplay = () => {};

export default Dashboard;
