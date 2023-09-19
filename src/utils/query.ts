import { request, gql } from "graphql-request";
import { graphqlEndpoint } from "./utils";

export const getPoolDataQuery = gql`
  {
    pools {
      poolId
      chainId
      strategy
      token
      amount
      profile {
        name
        owner
        metadataPointer
      }
    }
  }
`;

export const getProfileDataQuery = gql`
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
