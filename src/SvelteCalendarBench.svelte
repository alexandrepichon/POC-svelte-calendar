<script>
	import Config from './components/Config.svelte';
	import Calendar from './components/Calendar.svelte';
	import generateSessions from './services/SessionGenerator';

	const defaultConfig = {
		sessionsLength: 120,
		sessionsPerRoom: 7,
		rooms: 5,
	};

	let sessions = generateSessions(defaultConfig);
	function configChanged(event){
		const config = event.detail;
		sessions = generateSessions(config);
	}
</script>

<main>
	<h1>Svelte calendar performance POC</h1>
	<Config on:submit={configChanged} {...defaultConfig}/>
	<Calendar {sessions} />
</main>