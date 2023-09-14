import { Context } from "@/Context/Context";
import { getAllContracts } from "@/api/networks";
import { useContext } from "react";
import { TbCopy, TbExternalLink } from "react-icons/tb";

export const ContractOverview = () => {
  const { network, setNetwork } = useContext(Context);
  const allContracts = getAllContracts();
  const coreContracts = allContracts.core;
  const strategyContracts = allContracts.strategy;

  const loadCoreContracts = () => {
    // filter coreContracts by network
    const coreContractData = coreContracts.filter(
      (_network) => _network.slug === network
    )[0];
    const contracts = coreContractData.coreContracts;

    const copyAddress = (address: string) => {
      navigator.clipboard.writeText(address);
    };

    return Object.values(contracts!).map((_contract) => {
      return (
        <tr key={_contract.address}>
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
                  href={
                    coreContractData.explorer + "/address/" + _contract.address
                  }
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
              href={coreContractData.explorer + "/address/" + _contract.address}
            >
              <TbExternalLink />
            </a>
          </td>
        </tr>
      );
    });
  };

  const loadCloneableStrategyContracts = () => {
    // filter strategies by network
    const strategyContractData = strategyContracts.filter(
      (_network) => _network.slug === network
    )[0];
    const contracts = strategyContractData.strategyContracts;

    const copyAddress = (address: string) => {
      navigator.clipboard.writeText(address);
    };

    return Object.values(contracts!).map((_contract) => {
      return (
        <tr key={_contract.address}>
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
                  href={
                    strategyContractData.explorer +
                    "/address/" +
                    _contract.address
                  }
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
              href={
                strategyContractData.explorer + "/address/" + _contract.address
              }
            >
              <TbExternalLink />
            </a>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="px-4 mt-2 sm:px-6 lg:px-8">
      <h2 className="text-lg text-center font-medium my-4 leading-6 text-gray-900">
        Core Contracts
      </h2>
      {/* Core Contracts */}
      <div className=" p-4 border rounded-md shadow-md">
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
          <tbody className="divide-y divide-gray-200">
            {loadCoreContracts()}
          </tbody>
        </table>
      </div>
      {/* Cloneable Strategy Contracts */}
      <h2 className="text-lg text-center font-medium my-4 leading-6 text-gray-900">
        Cloneable Strategy Contracts
      </h2>
      <div className=" p-4 border rounded-md shadow-md">
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
          <tbody className="divide-y divide-gray-200">
            {loadCloneableStrategyContracts()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContractOverview;
