/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChargeProfile = /* GraphQL */ `
  mutation CreateChargeProfile(
    $input: CreateChargeProfileInput!
    $condition: ModelChargeProfileConditionInput
  ) {
    createChargeProfile(input: $input, condition: $condition) {
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
export const updateChargeProfile = /* GraphQL */ `
  mutation UpdateChargeProfile(
    $input: UpdateChargeProfileInput!
    $condition: ModelChargeProfileConditionInput
  ) {
    updateChargeProfile(input: $input, condition: $condition) {
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
export const deleteChargeProfile = /* GraphQL */ `
  mutation DeleteChargeProfile(
    $input: DeleteChargeProfileInput!
    $condition: ModelChargeProfileConditionInput
  ) {
    deleteChargeProfile(input: $input, condition: $condition) {
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
