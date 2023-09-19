import { TPoolDetail } from "@/components/Pool/types";

export default function PoolDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const pool: TPoolDetail = {
    poolId: Number(params.id),
    chainId: 58008,
    strategy: "0x1a749965c9142c873298362333ed2545d4edd2da",
    token: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    amount: 1e17,
    profile: {
      name: "Apollo Pool",
      owner: "0xe7eb5d2b5b188777df902e89c54570e7ef4f59ce",
    },
    metadata: {
      protocol: 1,
      pointer: "0x123",
    },
  };

  return <h1>My Page</h1>;
}
