<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	const { children, align } = $props<{
		children: Snippet;
		align: 'left' | 'right';
	}>();
</script>

<div
	class:align-left={align === 'left'}
	class:align-right={align === 'right'}
	class={twMerge('flex flex-col p-6', align === 'left' ? 'items-start' : 'items-end')}
>
	{@render children()}
</div>

<style>
	div {
		position: absolute;
		inset: 0px;
		perspective: 500px;

		width: 50%;
		height: 100%;

		animation-duration: 15s;
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
	}

	.align-left {
		right: auto;
		transform-origin: left;
		animation-name: FloatLeft;
	}

	.align-right {
		left: auto;
		transform-origin: right;
		animation-name: FloatRight;
		animation-delay: -6s;
	}

	@keyframes FloatLeft {
		0%,
		100% {
			transform: rotateY(1deg) rotateX(0);
		}
		50% {
			transform: rotateY(2deg) rotateX(1deg);
		}
	}

	@keyframes FloatRight {
		0%,
		100% {
			transform: rotateY(-1deg) rotateX(0);
		}
		50% {
			transform: rotateY(-2deg) rotateX(1deg);
		}
	}
</style>
