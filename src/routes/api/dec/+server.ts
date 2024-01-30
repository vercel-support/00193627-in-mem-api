import memdb from '$lib/utils/memdb';

/** @type {import('./$types').RequestHandler} */
export function POST() {
	memdb.counter -= 1;
	const count = memdb.counter;

	return new Response(String(count));
}
