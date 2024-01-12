import { event } from 'sveltekit-sse';
import type { RequestHandler } from './$types';

/**
 * @param {number} milliseconds
 * @returns
 */
function delay(milliseconds: number) {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export const GET: RequestHandler = async () => {
	return event(async function run(emit) {
		// eslint-disable-next-line no-constant-condition
		while (true) {
			emit(`${Date.now()}`);
			await delay(1000);
		}
	}).toResponse();
};
