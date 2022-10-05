import { MongoClient, Db } from "mongodb";
import url from "url";

let cachedDb: Db;

export async function connectToDb(uri = <string>process.env.MONGODB_URI) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri);

  const db = await client.db(url.parse(uri).pathname?.substr(1) as string);

  cachedDb = db;
  return db;
}
