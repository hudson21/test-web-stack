import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($data: CreateUserInput!) {
    createUser(user: $data) {
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
