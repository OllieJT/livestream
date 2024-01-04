<script lang="ts">
	import '../app.css';
</script>

<div>
	<slot />
</div>

<style>
	div {
		position: fixed;
		inset: 0px;
		perspective: 500px;
	}
</style>
