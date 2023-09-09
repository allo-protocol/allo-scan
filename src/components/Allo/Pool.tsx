import { PoolContext } from "@/Context/PoolContext";
import { useContext } from "react";

const Pool = () => {
  const { pools } = useContext(PoolContext);

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
      <div>
        {pools.map((pool: any) => (
          <div key={pool.id}>
            <div>{pool.id}</div>
            <div>{pool.name}</div>
            <div>{pool.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pool;
