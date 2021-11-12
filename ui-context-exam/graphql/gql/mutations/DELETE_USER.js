import { gql } from '@apollo/client';

export const DELETE_USER = gql`
  mutation Mutation($userId: String!) {
    deleteUser(id: $userId) {
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
