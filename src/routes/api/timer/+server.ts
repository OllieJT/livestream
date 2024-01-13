import { json } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';

let countdown_to: Date | null = null;

export const GET: RequestHandler = () => {
	const stream = new ReadableStream({
		async start(controller) {
			// eslint-disable-next-line no-constant-condition
			while (true) {
				if (countdown_to instanceof Date) {
					controller.enqueue(`data: ${countdown_to.getTime()}\n\n`);
				}

				await new Promise((resolve) => setTimeout(resolve, 1000));
			}
		},
		cancel() {
			// Cleanup if needed when the stream is cancelled
		},
	});

	return new Response(stream, {
		headers: {
			'Content-Type': 'text/event-stream',
			'Cache-Control': 'no-cache',
			Connection: 'keep-alive',
		},
	});
};

export const POST: RequestHandler = (request) => {
	const value = request.url.searchParams.get('value');

	if (!value) {
		countdown_to = null;
		return json({ countdown_to });
	}

	const minutes = Number(value) || 0;

	const datetime = new Date();
	datetime.setMinutes(datetime.getMinutes() + minutes);

	countdown_to = datetime;

	return json({ countdown_to });
};
