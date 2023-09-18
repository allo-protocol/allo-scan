import Profile from "@/components/Registry/Profile";
import { request, gql } from "graphql-request";

export default async function ProfileHome() {
  const query = gql`
    {
      profiles {
        profileId
        anchor
        name
        chainId
        creator
      }
    }
  `;
  const data: any = await request("http://localhost:5555/graphql", query);
  const { profiles } = data;

  console.log("Pleasse work...", data);

  return <Profile data={profiles} />;
}
