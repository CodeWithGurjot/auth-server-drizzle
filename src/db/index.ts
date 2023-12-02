import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import schema from "../schemas";

if (!process.env.DATABASE_URL) {
  throw new Error("DB url missing");
}

const client = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

const db = drizzle(client, { schema });

export default db;
