<script>
	import Config from './Config.svelte';
	import Calendar from './Calendar.svelte';
	import generateSessions from './SessionGenerator';

	let sessions = [];
	function configChanged(event){
		const config = event.detail;
		sessions = generateSessions(config);
	}
</script>

<main>
	<h1>Svelte calendar performance POC</h1>
	<Config on:submit={configChanged}/>
	<Calendar {sessions} />
</main>