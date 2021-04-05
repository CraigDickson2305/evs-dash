/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChargeProfile = /* GraphQL */ `
  query GetChargeProfile($id: ID!) {
    getChargeProfile(chargeLeft: $id) {
      id
      firstName
      lastName
      email
      carModel
      chargeLeft
      createdAt
      updatedAt
    }
  }
`;
export const listChargeProfiles = /* GraphQL */ `
  query ListChargeProfiles(
    $filter: ModelChargeProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChargeProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        carModel
        chargeLeft
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
