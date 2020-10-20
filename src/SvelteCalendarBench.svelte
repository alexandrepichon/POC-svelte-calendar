<script>
	import Config from './Config.svelte';
	import Calendar from './Calendar.svelte';

	const start = new Date();
	start.setHours(8, 0, 0, 0);
	let sessions = [{
		id: '1',
		title: 'Session 1',
		start: start,
		end: new Date(start.getTime() + 20 * 60000),
		allDay: false,
	}];

	function configChanged(event){
		sessions = generateSessions(event.detail);
		console.log(sessions);
	}

	function generateSessions(config){
		const start = new Date();
		start.setHours(8, 0, 0, 0);

		return Array.from(Array(config.sessionsPerDay).keys()).map(i => {
			const id = i + 1;
		  return {
				id,
				title: `Session ${id}`,
				start: new Date(start.getTime() + config.sessionsLength * i * 60000),
				end: new Date(start.getTime() + config.sessionsLength * id * 60000),
				allDay: false,
			}
		});
	}
</script>

<main>
	<h1>Svelte calendar performance POC</h1>
	<Config on:submit={configChanged}/>
	<Calendar {sessions} />
</main>