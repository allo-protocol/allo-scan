import Dashboard from "@/components/Dashboard";
import { IAlloTransactionLogResponse, TAlloTransactionLog } from "@/types/types";
import { graphqlEndpoint, getAlloTransactions } from "@/utils/query";
import { request } from "graphql-request";

const getAlloTransactionLog = async () => {
  const response: IAlloTransactionLogResponse = await request(
    graphqlEndpoint,
    getAlloTransactions
  );

  // console.log("response", Object.values(response).map((alloTransaction, index) => alloTransaction));

  return response.alloTransactions;
};

export default async function Home() {
  const alloTransactionLog: TAlloTransactionLog = await getAlloTransactionLog();

  // console.log("tx log", alloTransactionLog);

  return (
    <div className="bg-white">
      <main>
        <Dashboard alloTransactions={alloTransactionLog} />
      </main>
    </div>
  );
}



// {
//   hash: '0x56529fea7ac131d291bddc7a1b6d74d1af2886f3cc75a1c91ff2d54b61e98d4e',
//   fromAddress: '0xe8e1543235e6c35c656ef0b28526c61571583f4b',
//   toAddress: '0xaec621ec8d9de4b524f4864791171045d6bbbe27',
//   functionName: 'createProfile',
//   functionArgs: [ [Object], [Object], [Object], [Object], [Object] ],
//   status: '0',
//   blockHash: '0x1e36c9963b3376c1d6cde6f86ef391fe18589b7c4650eab867ceb043d831a195',
//   blockNumber: '9529493',
//   blockTimestamp: '2023-08-16T16:32:24-04:00',
//   chainId: '5'
// },
