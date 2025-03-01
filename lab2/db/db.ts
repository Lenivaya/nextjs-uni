import { drizzle as drizzleNeonPostgres } from "drizzle-orm/neon-http";
import { drizzle as drizzlePostgres } from "drizzle-orm/node-postgres";
import { env } from "@/env";
import { Pool } from "pg";

const isProduction = env.NODE_ENV === "production";

// use neon for production, just postgres driver for development
export const db = isProduction
  ? drizzleNeonPostgres(env.DATABASE_URL)
  : drizzlePostgres({
      client: new Pool({
        connectionString: env.DATABASE_URL,
      }),
    });

export type DB = typeof db;
