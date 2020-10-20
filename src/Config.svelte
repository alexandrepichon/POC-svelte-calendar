<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let sessionsLength = 60;
	let sessionsPerDay = 15;
	let rooms = 5;

	function onFormSubmit(e) {
		dispatch('submit', {
			sessionsLength,
			sessionsPerDay,
			rooms,
		});
	}
</script>

<style>
	form>* {
		font-size: 1.2rem;
	}

	input[type=number] {
		width: 3.2rem;
		margin-right: 1.2rem;
		margin-left: 0.4rem;
		padding-left: 0.4rem;
	}
</style>

<h2>Configure test case</h2>
<form on:submit|preventDefault={onFormSubmit}>
	<label for="sessionsLength">Sessions length (min):</label>
	<input type=number bind:value={sessionsLength} id="sessionsLength" step=15 min=15/>
	<label for="sessionsPerDay">Sessions per day:</label>
	<input type=number bind:value={sessionsPerDay} id="sessionsPerDay"/>
	<label for="rooms">Rooms:</label>
	<input type=number bind:value={rooms} id="rooms" max=10/>
	<button type=submit>Generate sessions</button>
</form>