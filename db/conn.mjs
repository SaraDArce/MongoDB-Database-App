import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI;

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();

  console.log("Successfully connected to Mongo");
} catch (err) {
  console.log(err);
}

let db = conn.db("madland_booking.users");

export default db;
