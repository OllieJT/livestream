import { livestream_params } from '$src/routes/schema';
import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
	const color = url.searchParams.get('color');
	const mode = url.searchParams.get('mode');

	return livestream_params.parse({ color, mode });
}) satisfies PageServerLoad;
