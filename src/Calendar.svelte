<script>
	import { afterUpdate } from 'svelte';
	import FullCalendar from 'svelte-fullcalendar';
	import timeGridPlugin from '@fullcalendar/timegrid';

	export let sessions = [];

	let options = {
		initialView: 'timeGridDay',
		plugins: [timeGridPlugin],
		slotMinTime: '08:00:00',
		height: 650,
		events: {sessions},
	};
	console.log(options);

	afterUpdate(() => {
		options.events = sessions;
		options = { ...options };
	})

</script>

<h2>Sessions calendar</h2>
<FullCalendar {options} />
