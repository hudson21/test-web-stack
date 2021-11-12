import { gql } from '@apollo/client';

export const GET_USERS_LENGTH = gql`
  query Query {
    getUsersLength
  }
`;
