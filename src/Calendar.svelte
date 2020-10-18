<script>
	import FullCalendar from 'svelte-fullcalendar';
	import timeGridPlugin from '@fullcalendar/timegrid';

	export let sessions;

	let options = {
		initialView: 'timeGridDay',
		plugins: [timeGridPlugin],
	};

	console.log(sessions.length);
</script>

<h2>Sessions calendar</h2>
<FullCalendar {options} />
