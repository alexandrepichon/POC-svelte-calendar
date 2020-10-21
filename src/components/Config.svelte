<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let sessionsLength;
	export let sessionsPerRoom;
	export let rooms;

	let count = sessionsPerRoom * rooms;

	function onFormSubmit() {
		const config = {
			sessionsLength,
			sessionsPerRoom,
			rooms,
		};
		dispatch('submit', config);
		count = sessionsPerRoom * rooms;
	}
</script>

<style>
	form>* {
		font-size: 1.2rem;
	}

	input[type=number] {
		width: 3.2rem;
		margin: 0 4rem 1.2rem 0.4rem;
		padding-left: 0.4rem;
	}
</style>

<h2>Configure test case : {count} sessions</h2>
<form on:submit|preventDefault={onFormSubmit}>
	<label for="sessionsLength">Sessions length (min):</label>
	<input type=number bind:value={sessionsLength} id="sessionsLength" step=15 min=15 required on:input={onFormSubmit}/>
	<label for="sessionsPerRoom">Sessions per room:</label>
	<input type=number bind:value={sessionsPerRoom} id="sessionsPerRoom" min=1 required on:input={onFormSubmit} />
	<label for="rooms">Rooms:</label>
	<input type=number bind:value={rooms} id="rooms" min=1 max=10 required on:input={onFormSubmit} />
</form>