<script>
	import Config from './Config.svelte';
	import Calendar from './Calendar.svelte';

	let sessions = [{
		id: '1',
		title: 'Session 1',
		start: '2020-10-19T12:00:00',
		end: '2020-10-19T14:00:00',
		allDay: false,
	}];

	function configChanged(event){
		sessions = generateSessions(event.detail);
		console.log(sessions);
	}

	function generateSessions(config){
    const start = new Date();
		return [
			{
				id: '1',
				title: 'Session 1',
				start: start,
				end: new Date(start.getTime() + config.sessionsLength * 60000),
				allDay: false,
			}
		];	
	}
</script>

<main>
	<h1>Svelte calendar performance POC</h1>
	<Config on:submit={configChanged}/>
	<Calendar {sessions} />
</main>