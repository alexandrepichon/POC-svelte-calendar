<script>
	import Config from './Config.svelte';
	import Calendar from './Calendar.svelte';

	import { sessions } from './store.js';

	function configChanged(event){
		$sessions = generateSessions(event.detail);
	}

	function generateSessions(config){
		return [];	
	}

</script>

<main>
	<h1>Svelte calendar performance POC</h1>
	<Config on:submit={configChanged}/>
	<Calendar sessions />
</main>