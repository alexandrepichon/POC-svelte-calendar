<script>
	import Config from './components/Config.svelte';
	import Calendar from './components/Calendar.svelte';
	import generateSessions from './services/SessionGenerator';

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