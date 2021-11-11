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
};
