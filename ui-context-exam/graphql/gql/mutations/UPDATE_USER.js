import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
  mutation UpdateUser($updateUserId: String!, $data: UpdateUserInput!) {
    updateUser(id: $updateUserId, data: $data) {
      _id
      address
      description
      dob
      name
      createdAt
      updatedAt
    }
  }
`;
