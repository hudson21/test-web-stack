import { getAllDocuments } from '../helpers/db';

export const Query = {
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
  getUsersLength: async (_parent, { limit }, { client }) => {
    try {
      const db = client.db();
      const documents = await db.collection('users').find().toArray();

      return documents.length;
    } catch (e) {
      throw new Error('Users could not be found.');
    }
  },
};
