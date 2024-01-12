<script lang="ts">
	import { format } from 'date-fns';
	let datetime = $state(Date.now());
	const interval = setInterval(() => (datetime = Date.now()), 1000);

	const time = $derived(format(new Date(datetime), 'h:mm'));
	const ordinal = $derived(format(new Date(datetime), 'a'));
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

<style>
	nav {
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: linear-gradient(270deg, rgba(38, 38, 38, 0.5) 0%, rgba(38, 38, 38, 0) 100%),
			linear-gradient(180deg, rgba(38, 38, 38, 0.5) 0%, rgba(38, 38, 38, 0) 50%), #1a1a1a;
		box-shadow: 0px 0px 1px 1px #000;
	}
</style>
