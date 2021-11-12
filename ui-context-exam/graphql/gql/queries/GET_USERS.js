import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query Users($limit: Int!) {
    users(limit: $limit) {
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
