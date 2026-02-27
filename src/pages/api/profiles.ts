import type { APIRoute } from 'astro';
import { sql } from '../../lib/db';

type ProfileListRequest = {
  lang?: string;
  country_id?: number | string;
  location_id?: number | string;
  category_id?: number | string;
  venue_id?: number | string;
  badge_code?: number | string;
  is_active?: boolean | string;
  limit?: number | string;
  cursor?: {
    lang_sort?: number | string;
    country_sort?: number | string;
    location_sort?: number | string;
    category_sort?: number | string;
    venue_sort?: number | string;
    id?: number | string;
  };
};

type ProfileCursor = {
  lang_sort: number;
  country_sort: number;
  location_sort: number;
  category_sort: number;
  venue_sort: number;
  id: number;
};

const BOOLEAN_STRING_MAP = new Map([
  ['true', true],
  ['false', false]
]);

function toOptionalNumber(value: number | string | undefined) {
  if (value === undefined || value === null || value === '') return undefined;
  const parsed = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function requireNumber(value: number | string | undefined, field: string) {
  const parsed = toOptionalNumber(value);
  if (parsed === undefined) {
    throw new Error(`${field} is required`);
  }
  return parsed;
}

function requireOneOf(value: number, allowedValues: number[], field: string) {
  if (!allowedValues.includes(value)) {
    throw new Error(`${field} is invalid`);
  }
  return value;
}

function toOptionalBoolean(value: boolean | string | undefined) {
  if (value === undefined || value === null) return undefined;
  if (typeof value === 'boolean') return value;
  const parsed = BOOLEAN_STRING_MAP.get(value.toLowerCase());
  return parsed;
}

function requireBoolean(value: boolean | string | undefined, field: string) {
  const parsed = toOptionalBoolean(value);
  if (parsed === undefined) {
    throw new Error(`${field} is required`);
  }
  return parsed;
}

function parseCursor(cursor: ProfileListRequest['cursor']) {
  if (!cursor) return undefined;
  if (typeof cursor !== 'object' || Array.isArray(cursor)) {
    throw new Error('cursor is invalid');
  }
  return {
    lang_sort: requireNumber(cursor.lang_sort, 'cursor.lang_sort'),
    country_sort: requireNumber(cursor.country_sort, 'cursor.country_sort'),
    location_sort: requireNumber(cursor.location_sort, 'cursor.location_sort'),
    category_sort: requireNumber(cursor.category_sort, 'cursor.category_sort'),
    venue_sort: requireNumber(cursor.venue_sort, 'cursor.venue_sort'),
    id: requireNumber(cursor.id, 'cursor.id')
  } satisfies ProfileCursor;
}

function normalizeLimit(limit: number | string | undefined) {
  const parsed = toOptionalNumber(limit) ?? 20;
  if (parsed < 1) return 1;
  if (parsed > 100) return 100;
  return parsed;
}

export const POST: APIRoute = async ({ request }) => {
  let payload: ProfileListRequest;
  try {
    payload = (await request.json()) as ProfileListRequest;
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!payload?.lang || typeof payload.lang !== 'string') {
    return new Response(JSON.stringify({ ok: false, error: 'lang is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  let countryId: number;
  let categoryId: number;
  let venueId: number | undefined;
  let badgeCode: number;
  let isActive: boolean;
  let cursor: ProfileCursor | undefined;
  let limit: number;
  const allowedCountryIds = [1, 2];
  const allowedCategoryIds = [1, 2, 3, 4, 5];
  const allowedVenueIds = [
    1002101,
    1002102,
    1002103,
    1002104,
    1002105,
    1002106,
    1001101,
    1001102,
    1001103,
    2001101,
    1002201,
    1002202,
    1001201
  ];
  const allowedBadgeCodes = [1, 2, 3, 4];
  const allowedLocationIds = [1001, 1002, 2001];

  try {
    countryId = requireOneOf(requireNumber(payload.country_id, 'country_id'), allowedCountryIds, 'country_id');
    categoryId = requireOneOf(requireNumber(payload.category_id, 'category_id'), allowedCategoryIds, 'category_id');
    const venueValue = toOptionalNumber(payload.venue_id);
    if (venueValue !== undefined) {
      venueId = requireOneOf(venueValue, allowedVenueIds, 'venue_id');
    }
    badgeCode = requireOneOf(requireNumber(payload.badge_code, 'badge_code'), allowedBadgeCodes, 'badge_code');
    isActive = requireBoolean(payload.is_active, 'is_active');
    cursor = parseCursor(payload.cursor);
    limit = normalizeLimit(payload.limit);
  } catch (error) {
    return new Response(
      JSON.stringify({ ok: false, error: error instanceof Error ? error.message : 'Invalid payload' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const filters: string[] = [];
  const values: Array<string | number | boolean> = [];

  const pushFilter = (column: string, value: string | number | boolean) => {
    values.push(value);
    filters.push(`${column} = $${values.length}`);
  };

  const pushCursorFilter = (nextCursor: ProfileCursor) => {
    const startIndex = values.length + 1;
    values.push(
      nextCursor.lang_sort,
      nextCursor.country_sort,
      nextCursor.location_sort,
      nextCursor.category_sort,
      nextCursor.venue_sort,
      nextCursor.id
    );
    filters.push(
      `(lang_sort, country_sort, location_sort, category_sort, venue_sort, id) > (` +
        `$${startIndex}, $${startIndex + 1}, $${startIndex + 2}, $${startIndex + 3}, $${
          startIndex + 4
        }, $${startIndex + 5})`
    );
  };

  const normalizedLang = payload.lang.toLowerCase();
  pushFilter('lang', normalizedLang);

  pushFilter('country_id', countryId);

  const locationId = toOptionalNumber(payload.location_id);
  if (locationId !== undefined) {
    requireOneOf(locationId, allowedLocationIds, 'location_id');
    pushFilter('location_id', locationId);
  }

  pushFilter('category_id', categoryId);

  if (venueId !== undefined) {
    pushFilter('venue_id', venueId);
  } else if (categoryId <= 2) {
    return new Response(JSON.stringify({ ok: false, error: 'venue_id is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  pushFilter('badge_code', badgeCode);
  pushFilter('is_active', isActive);

  if (cursor) {
    pushCursorFilter(cursor);
  }

  const whereClause = filters.length ? `where ${filters.join(' and ')}` : '';
  const orderClause =
    'order by lang_sort asc, country_sort asc, location_sort asc, category_sort asc, venue_sort asc, id asc';
  const limitIndex = values.length + 1;
  values.push(limit);
  const query = `select * from app_profile ${whereClause} ${orderClause} limit $${limitIndex};`;

  try {
    const rows = await sql.query(query, values);
    const lastRow = rows.at(-1);
    const nextCursor = lastRow
      ? {
          lang_sort: lastRow.lang_sort,
          country_sort: lastRow.country_sort,
          location_sort: lastRow.location_sort,
          category_sort: lastRow.category_sort,
          venue_sort: lastRow.venue_sort,
          id: lastRow.id
        }
      : null;
    return new Response(JSON.stringify({ ok: true, data: rows, next_cursor: nextCursor, limit }), {
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
