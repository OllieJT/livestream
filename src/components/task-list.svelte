<script lang="ts">
</script>

<div
	class="flex flex-col items-stretch divide-y divide-mono-900 rounded-lg bg-mono-950 ring-1 ring-mono-800"
>
	{#each { length: 10 } as _}
		<div class="flex items-center gap-3 p-4 leading-none tracking-wide text-mono-200">
			<div class="h-5 w-5 rounded-md bg-mono-800 ring-1 ring-inset ring-mono-700" />
			<span> Designer &amp; Developer </span>
		</div>
	{/each}
</div>
