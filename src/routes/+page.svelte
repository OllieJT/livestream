<script lang="ts">
	import FloatingPanel from '$src/components/floating-panel.svelte';
	import { WEBSITE_NAME } from '$src/lib/constants';

	let nameplate = $state<HTMLDivElement>();

	$effect(() => {
		const update_pos = setInterval(() => {
			if (!nameplate) return;
			// get the position of nameplate every second and log it to the console
			const { x, y } = nameplate.getBoundingClientRect();
			// console.log(`x: ${x}, y: ${y}`);
			window.thing = nameplate;
		}, 1000);

		console.log(nameplate);

		return () => clearInterval(update_pos);
	});
</script>

<svelte:head>
	<title>Hello World | {WEBSITE_NAME}</title>
</svelte:head>

<FloatingPanel align="left">
	<div class="flex items-start gap-2">
		<div
			class="rounded-lg bg-white p-4 text-xl font-bold leading-none tracking-wide text-black"
			bind:this={nameplate}
			id="hello"
		>
			OllieJT
		</div>
		<div
			class="rounded-lg bg-mono-800 p-4 text-xl leading-none tracking-wide text-mono-200"
			bind:this={nameplate}
			id="hello"
		>
			Designer &amp; Developer
		</div>
	</div>
</FloatingPanel>

<FloatingPanel align="right">
	<div
		class="flex flex-col items-stretch space-y-2 rounded-lg bg-mono-950 p-4 ring-1 ring-mono-800"
	>
		<div class="text-xs font-bold uppercase tracking-widest text-white">Current Focus</div>
		<hr class="border-b-0 border-t-2 border-mono-900" />
		<div class="wrap-balance max-w-80 pr-4 text-lg tracking-wide text-mono-300">
			Some really long text explaining what we're doing. Some really long text explaining what we're
			doing.
		</div>
	</div>
</FloatingPanel>
