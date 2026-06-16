// Connects to Postgres and runs a simple query.
// Connection details come from environment variables (set in the workflow).
import pg from "pg";

const { Client } = pg;

const client = new Client({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "postgres",
});

await client.connect();
const result = await client.query("SELECT version();");
console.log("✅ Connected to Postgres!");
console.log(result.rows[0].version);
await client.end();
