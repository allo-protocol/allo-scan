import { gql } from "graphql-request";

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

export const getAlloStatsQuery = gql`
  AlloStats ($chainId: String!) {
    allo(chainId: $chainId) {
      registry
      feePercentage
      baseFee
      treasury
      cloneableStrategies
      updatedAt
    }
  }
`;

export const getAlloTransactions = gql`
  {
    alloTransactions {
      hash
      fromAddress
      toAddress
      functionName
      functionArgs
      status
      blockHash
      blockNumber
      blockTimestamp
      chainId
    }
  }
`;
