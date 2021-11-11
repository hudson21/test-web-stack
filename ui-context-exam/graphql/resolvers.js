import {
  getAllDocuments,
  insertDocument,
  deleteDocument,
  updateDocument,
} from '../helpers/db';
import { ObjectId } from 'mongodb';

export const resolvers = {
  Query: {
    users: async (_parent, { limit }, { client }) => {
      try {
        const documents = await getAllDocuments(
          client,
          'users',
          { _id: -1 }, // Descending Order
          {},
          limit
        );
        return documents;
      } catch (e) {
        throw new Error('Users could not be found.');
      }
    },
  },

  Mutation: {
    createUser: async (_parent, { user }, { client }) => {
      const userToCreate = {
        ...user,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      try {
        const createdUser = await insertDocument(client, 'users', userToCreate);
        userToCreate._id = createdUser.insertedId;
        return userToCreate;
      } catch (e) {
        throw new Error('User could not be created.');
      }
    },

    deleteUser: async (_parent, { id }, { client }) => {
      const idToDelete = ObjectId(id);
      try {
        const userToDelete = await getAllDocuments(
          client,
          'users',
          { _id: -1 }, // Descending Order
          { _id: idToDelete },
          1
        );

        if (!userToDelete[0]) {
          throw new Error('User not found.');
        }

        await deleteDocument(client, 'users', idToDelete);

        return userToDelete[0];
      } catch (e) {
        throw new Error('User could not be deleted.');
      }
    },

    updateUser: async (_parent, { id, data }, { client }) => {
      const idToUpdate = ObjectId(id);
      const userToUpdate = {
        ...data,
        updatedAt: Date.now(),
      };

      try {
        const existingUser = await getAllDocuments(
          client,
          'users',
          { _id: -1 }, // Descending Order
          { _id: idToUpdate },
          1
        );

        if (!existingUser[0]) {
          throw new Error('User not found.');
        }

        await updateDocument(client, 'users', userToUpdate, idToUpdate);

        const updatedUser = {
          ...existingUser[0],
          ...userToUpdate,
        };

        return updatedUser;
      } catch (e) {
        throw new Error('User could not be updated.');
      }
    },
  },
};
