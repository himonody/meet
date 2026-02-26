import type { APIRoute } from 'astro';
import { readFile } from 'node:fs/promises';
import { sql } from '../../lib/db';

const MIGRATE_TOKEN = import.meta.env.MIGRATE_TOKEN;

function splitStatements(source: string) {
  return source
    .split(/;\s*(?:\r?\n|$)/)
    .map((statement) => statement.trim())
    .filter(Boolean);
}

export const POST: APIRoute = async ({ request }) => {
  const token = request.headers.get('x-migrate-token');
  if (!import.meta.env.DEV && (!MIGRATE_TOKEN || token !== MIGRATE_TOKEN)) {
    return new Response(JSON.stringify({ ok: false, error: 'Unauthorized' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const fileUrl = new URL('../../../meet.sql', import.meta.url);
    const sqlText = await readFile(fileUrl, 'utf8');
    const statements = splitStatements(sqlText);

    for (const statement of statements) {
      await sql.query(statement);
    }

    return new Response(JSON.stringify({ ok: true, executed: statements.length }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ ok: false, error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
