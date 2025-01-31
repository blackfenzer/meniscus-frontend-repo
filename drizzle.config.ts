import type { Config } from 'drizzle-kit';
import 'dotenv/config';
export default {
  schema: './db/schema.ts',
  out: './db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url:
      process.env.POSTGRES_URL ||
      'postgresql://postgres:postgres@localhost:5432/postgres'
  }
} satisfies Config;
