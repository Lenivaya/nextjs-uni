## Task 1

![task11](.assets/task11.png)

![task12](.assets/task12.png)

# Task 2

Migrating newly created db schema to prod detabase on neon.

![task21](.assets/task21.png)

# Task 3

Seeding the local dev database

![task31](.assets/task31.png)

![task32](.assets/task32.png)

All differences related to connecting to different type of database on prod and development environment are handled automaticaly based on evnironment variables.

```typescript
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
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
