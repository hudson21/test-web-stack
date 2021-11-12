import { getAllDocuments } from '../helpers/db';

export const Query = {
  users: async (_parent, { limit, filter }, { client }) => {
    try {
      const documents = await getAllDocuments(
        client,
        'users',
        { _id: -1 }, // Descending Order
        {},
        limit
      );

      if (filter) {
        return documents.filter(({ _id, name, address, description }) => {
          const transformedFilter = filter.toLowerCase();
          const transformedId = _id.toString().toLowerCase();
          const transformedName = name.toLowerCase();
          const transformAddress = address.toLowerCase();
          const transformedDescription = description.toLowerCase();

          return (
            transformedId.includes(transformedFilter) ||
            transformedName.includes(transformedFilter) ||
            transformAddress.includes(transformedFilter) ||
            transformedDescription.includes(transformedFilter)
          );
        });
      }

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
