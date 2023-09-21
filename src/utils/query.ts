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

export const getPoolDetailDataQuery = gql`
  query GetPoolDetails($chainId: String!, $poolId: String!) {
    pool(chainId: $chainId, poolId: $poolId) {
        poolId
        chainId
        token
        amount
        strategy
        metadataProtocol
        metadataPointer
        tokenMetadata
        profile {
          profileId
          name
          owner
          anchor
          creator
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

export const getProfileDetailDataQuery = gql`
  query getProfileDetails($chainId: String!, $profileId: String!) {
    profile(chainId: $chainId, profileId: $profileId) {
      pools {
        poolId
        chainId
        token
        amount
        strategy
        metadataProtocol
        metadataPointer
        tokenMetadata
        profile {
          profileId
          name
          owner
          anchor
          creator
        }
      }

      profileId
      anchor
      name
      chainId
      creator
      createdAt
      metadataPointer
      metadataProtocol
      nonce
      owner

      role {
        roleAccounts {
          accountId
        }
      }
    }
  }
`;

export const getAlloStatsQuery = gql`
  query AlloStats ($chainId: String!) {
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
