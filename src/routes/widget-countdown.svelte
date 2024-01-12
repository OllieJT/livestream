<script lang="ts">
	import { onDestroy } from 'svelte';

	const { datetime } = $props<{ datetime: Date }>();

	// calculate the difference between the current time and the target time in seconds
	function diff_in_seconds(d: Date) {
		return Math.floor((d.getTime() - Date.now()) / 1000);
	}

	function seconds_to_minutes_and_seconds(seconds: number) {
		return {
			minutes: Math.floor(seconds / 60),
			seconds: seconds % 60,
		};
	}

	function time_until(d: Date) {
		const diff = diff_in_seconds(d);
		const ms = seconds_to_minutes_and_seconds(diff);

		function format_number(n: number) {
			if (n < 0) return ['-', '-'];
			const str = n < 10 ? '0' + n : n.toString();
			return str.split('');
		}

		return { minutes: format_number(ms.minutes), seconds: format_number(ms.seconds) };
	}

	let countdown = $state(time_until(datetime));

	const interval = setInterval(() => (countdown = time_until(datetime)), 1000);
	onDestroy(() => clearInterval(interval));
</script>

{#snippet chunk({value}:{value:string})}
	<div
		class="flex h-12 w-10 items-center justify-center rounded-lg bg-white/5 text-center ring-1 ring-white/10"
	>
		<span class="">{value}</span>
	</div>
{/snippet}

<div
	class="flex w-max items-center gap-1.5 rounded-2xl px-2 text-center text-xl font-medium uppercase leading-none tracking-widest"
>
	{#each countdown.minutes as minute}
		{@render chunk({ value: minute })}
	{/each}
	<span class="-ml-0.5 -mr-1 block opacity-50">:</span>
	{#each countdown.seconds as second}
		{@render chunk({ value: second })}
	{/each}
</div>
