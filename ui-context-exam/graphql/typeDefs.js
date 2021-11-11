import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type User {
    _id: String!
    name: String!
    dob: String!
    address: String!
    description: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    users(limit: Int!): [User!]!
  }

  type Mutation {
    createUser(user: CreateUserInput!): User!
    deleteUser(id: String!): User!
    updateUser(id: String!, data: UpdateUserInput!): User!
  }

  input CreateUserInput {
    name: String!
    dob: String!
    address: String!
    description: String!
  }

  input UpdateUserInput {
    name: String
    address: String
    description: String
  }
`;
