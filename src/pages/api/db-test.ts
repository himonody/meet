import type { APIRoute } from 'astro';
import { sql } from '../../lib/db';

export const GET: APIRoute = async () => {
  try {
    const result = await sql`select now() as now`;
    return new Response(JSON.stringify({ ok: true, now: result[0]?.now ?? null }), {
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
/*
curl -X POST http://localhost:4321/api/migrate \
-H "x-migrate-token: qwer"
* */