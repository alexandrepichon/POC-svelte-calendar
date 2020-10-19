<script>
	import FullCalendar from 'svelte-fullcalendar';
	import timeGridPlugin from '@fullcalendar/timegrid';

	export let sessions = [];

	let options = {
		initialView: 'timeGridDay',
		plugins: [timeGridPlugin],
		slotMinTime: '08:00:00',
		height: 650,
		events: sessions,
	};
	console.log(options);

</script>

<h2>Sessions calendar</h2>
<FullCalendar {options} />
