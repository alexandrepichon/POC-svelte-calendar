<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let sessionsLength = 120;
	let sessionsPerDay = 3;
	let rooms = 5;

	function onFormSubmit(e) {
		dispatch('submit', {
			sessionsLength,
			sessionsPerDay,
			rooms,
		});
	}
</script>

<form on:submit|preventDefault={onFormSubmit}>
	<h2>Configure test case</h2>
	<label for="sessionsLength">Sessions length</label>
	<input type=number bind:value={sessionsLength} id="sessionsLength"/>
	<label for="sessionsPerDay">Sessions per day</label>
	<input type=number bind:value={sessionsPerDay} id="sessionsPerDay"/>
	<label for="rooms">Rooms</label>
	<input type=number bind:value={rooms} id="rooms"/>
	<input type=submit value="Generate sessions" style="display: block">
</form>