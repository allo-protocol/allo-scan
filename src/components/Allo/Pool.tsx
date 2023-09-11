import { PoolContext } from "@/Context/PoolContext";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";

const Pool = () => {
  const { pools } = useContext(PoolContext);

  const loadPools = () => {
    const poolData = [
      {
        id: 1,
        name: "test",
        address: "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27",
        balance: 500,
      },
    ];

    return Object.values(poolData).map((pool) => (
      <tr key={pool.address}>
        <td>{pool.id}</td>
        <td>{pool.name}</td>
        <td>{pool.address}</td>
        <td>{pool.balance}</td>
      </tr>
    ));
  };

  return <PoolTable />;
};

export default Pool;

const stats = [
  {
    name: "Revenue",
    value: "$405,091.00",
    change: "+4.75%",
    changeType: "positive",
  },
  {
    name: "Overdue invoices",
    value: "$12,787.00",
    change: "+54.02%",
    changeType: "negative",
  },
  {
    name: "Outstanding invoices",
    value: "$245,988.00",
    change: "-1.39%",
    changeType: "positive",
  },
  {
    name: "Expenses",
    value: "$30,156.00",
    change: "+10.18%",
    changeType: "negative",
  },
];

const pools = [
  {
    address: "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27",
    strategyName: "DonationVotingMerklePayout",
    balance: 50000,
    status: true,
  },
  // More pools...
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function PoolStats() {
  return (
    <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
        >
          <dt className="text-sm font-medium leading-6 text-gray-500">
            {stat.name}
          </dt>
          <dd
            className={classNames(
              stat.changeType === "negative"
                ? "text-rose-600"
                : "text-gray-700",
              "text-xs font-medium"
            )}
          >
            {stat.change}
          </dd>
          <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

const PoolTable = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex flex flex-col items-center">
        <div className="sm:flex-auto flex-auto">
          <h1 className="mt-2 text-center text-base font-semibold leading-6 text-gray-900">
            Pools
          </h1>
          <p className="mt-2 text-center text-sm text-gray-700">
            A list of all the pools
          </p>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                <div className="group inline-flex">
                  Address
                  <span className="ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                    <ChevronDownIcon
                      className="ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                <div className="group inline-flex">
                  Strategy Name
                  <span className="ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                    <ChevronDownIcon
                      className="ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                <div className="group inline-flex">
                  Balance
                  <span className="ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                    <ChevronDownIcon
                      className="ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                <div className="group inline-flex">
                  Status
                  <span className="ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                    <ChevronDownIcon
                      className="ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {pools.map((pool) => (
              <tr key={pool.address}>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                  {pool.address}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Pool Address</dt>
                    <dd className="mt-1 truncate text-gray-700">
                      {pool.strategyName}
                    </dd>
                    <dt className="sr-only sm:hidden">Email</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">
                      {pool.balance}
                    </dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {pool.strategyName}
                </td>
                <td>
                  {pool.balance}
                </td>
                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {pool.status ? "Active" : "Inactive"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
