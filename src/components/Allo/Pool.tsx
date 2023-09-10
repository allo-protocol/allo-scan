import { PoolContext } from "@/Context/PoolContext";
import { useContext } from "react";

const Pool = () => {
  const { pools } = useContext(PoolContext);

  const loadPools = () => {
    const poolData = [
      {
        id: 1,
        name: "test",
        address: "0x",
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

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <input
          className="p-2 mr-4 border border-gray-300 rounded-md"
          type="text"
          name="search"
          placeholder="search"
        />
        <button className="border border-gray-300 rounded-md p-2">
          Search
        </button>
      </div>
      <hr className="mt-2" />
      <div className="flex">
        <table className="table table-auto mt-2">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>{loadPools()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Pool;
