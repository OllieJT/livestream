<script lang="ts">
	import { format } from 'date-fns';
	import { onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

	let datetime = writable(Date.now());

	const interval = setInterval(() => datetime.set(Date.now()), 1000);

	onDestroy(() => clearInterval(interval));

	$: time = format(new Date($datetime), 'h:mm');
	$: ordinal = format(new Date($datetime), 'a');
</script>

<div
	class="flex w-max items-center rounded-2xl bg-white/5 px-6 py-4 text-center ring-1 ring-white/10"
>
	<span
		class="mx-auto flex items-center gap-1 text-2xl font-medium uppercase leading-none tracking-widest"
	>
		<span class="">{time}</span>
		<span class="left-full text-xl opacity-50">{ordinal}</span>
	</span>
</div>
