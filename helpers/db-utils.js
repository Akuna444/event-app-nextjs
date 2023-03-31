import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://akuna444:fuMsdwUYBCeWKhqH@cluster0.ex41jje.mongodb.net/?retryWrites=true&w=majority"
  );

  return client;
}

export async function insertDocuments(client, collection, documents) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(documents);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
