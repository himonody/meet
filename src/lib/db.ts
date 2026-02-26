import { neon } from '@neondatabase/serverless';

if (!import.meta.env.DATABASE_URL) {
  throw new Error('Missing DATABASE_URL in environment');
}

export const sql = neon(import.meta.env.DATABASE_URL);
