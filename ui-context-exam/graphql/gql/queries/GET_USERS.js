import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query Users($limit: Int!, $filter: String) {
    users(limit: $limit, filter: $filter) {
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
