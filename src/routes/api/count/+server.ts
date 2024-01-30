import memdb from '$lib/utils/memdb';

/** @type {import('./$types').RequestHandler} */
export function GET() {
	const count = memdb.counter;

	return new Response(String(count));
}
