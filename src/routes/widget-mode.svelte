<script lang="ts">
	import type { LivestreamParams } from '$src/routes/schema';
	import { twMerge } from 'tailwind-merge';

	export let color: LivestreamParams['color'];
</script>

<svelte:head>
	<title>Status Bar | OllieJT</title>
</svelte:head>

<div
	class={twMerge(
		'mr-2 flex h-12 items-center rounded-lg px-4 text-lg font-black',
		color === 'YELLOW' && 'bg-yellow-500 text-black',
		color === 'GREEN' && 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/50',
		color === 'PURPLE' && 'bg-violet-600 text-white',
		color === 'ORANGE' && 'bg-orange-400 text-black',
	)}
>
	<span class="uppercase tracking-widest">
		<slot />
	</span>
</div>
