import { MongoClient } from 'mongodb';

// I am using directly my credentials to save some time but this could be handle with environment variables as well
export const connectDatabase = async () =>
  await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_NAME}.va0gp.mongodb.net/${process.env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority`
  );

export const insertDocument = async (client, collection, document) => {
  const db = client.db();
  return await db.collection(collection).insertOne(document);
};

export const updateDocument = async (client, collection, document, id) => {
  const db = client.db();
  return await db.collection(collection).updateOne({ id }, { $set: document });
};

export const getAllDocuments = async (
  client,
  collection,
  sort,
  filter = {},
  limit
) => {
  const db = client.db();

  return await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .limit(limit)
    .toArray();
};

export const deleteDocument = async (client, collection, id) => {
  const db = client.db();
  return await db.collection(collection).deleteOne({ id });
};
