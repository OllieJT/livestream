import { writable } from 'svelte/store';

const sse_timer = writable<Date | null>(null);

function timer_connect() {
	const source = new EventSource(`/api/timer`);

	source.onmessage = function (event) {
		const value = Number(event.data.trim());
		console.log('New message from server:', value);

		const datetime = new Date(value);

		if (datetime instanceof Date) {
			sse_timer.set(datetime);
		} else {
			sse_timer.set(null);
		}
	};

	source.onopen = function () {
		console.log('Connection to server opened.');
	};

	source.onerror = function (error) {
		// Close the connection if there's an error
		console.error('Error:', error);
		sse_timer.set(null);
		source.close();
	};
}

export const timer = {
	subscribe: sse_timer.subscribe,
	connect: timer_connect,
};
