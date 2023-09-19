import PoolDetailPage from "@/components/Pool/PoolDetail";
import { TPoolDetail } from "@/components/Pool/types";

export default async function PoolDetail({
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
      pointer: "bafkreigwiljyskihuaeyjsedoei3taprwbbheldxig25lhoqvw2kpcf4bu",
    },
    creator: "0x3f15B8c6F9939879Cb030D6dd935348E57109637"
  };

  const response = await fetch(
    `https://ipfs.io/ipfs/${pool.metadata.pointer}`,
  );

  let metadata = "";
  // Check if the response status is OK (200)
  if (response.ok) {
    metadata = await response.text();
  }

  return <PoolDetailPage pool={pool} metadata={metadata} />;
}
