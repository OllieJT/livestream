<script lang="ts">
	import WidgetMode from '$src/routes/widget-mode.svelte';
	import WidgetTime from '$src/routes/widget-time.svelte';

	/*
		import { source } from 'sveltekit-sse';
		const value = source('/api');
		value.subscribe((x) => console.log('value', x));
	*/

	const sampledate = new Date();
	sampledate.setMinutes(sampledate.getMinutes() + 10);
	sampledate.setSeconds(sampledate.getSeconds() + 30);
</script>

<svelte:head>
	<title>Status Bar | OllieJT</title>
</svelte:head>

<div class="p-4">
	<nav class="grid w-full grid-cols-3 gap-4 rounded-3xl p-2">
		<!--  -->

		<!--  -->
		<div class="flex items-center justify-start">
			<!-- <div class="px-4">
				<div class="flex h-7 w-10 items-center justify-center rounded-lg bg-white/10">UK</div>
			</div> -->
			<WidgetTime />
		</div>

		<!--  -->
		<div class="grid place-items-center text-center">
			<span class="tracking-widest opacity-50">olliejt.app</span>
		</div>

		<div class="flex items-center justify-end">
			<WidgetMode color="GREEN">Talking</WidgetMode>

			<!-- <WidgetCountdown datetime={sampledate} /> -->
		</div>
	</nav>
</div>

<style>
	nav {
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: linear-gradient(270deg, rgba(38, 38, 38, 0.5) 0%, rgba(38, 38, 38, 0) 100%),
			linear-gradient(180deg, rgba(38, 38, 38, 0.5) 0%, rgba(38, 38, 38, 0) 50%), #1a1a1a;
		box-shadow: 0px 0px 1px 1px #000;
	}
</style>
