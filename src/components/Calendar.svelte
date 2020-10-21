<script>
	import { afterUpdate } from 'svelte';
	import FullCalendar from 'svelte-fullcalendar';
	import timeGridPlugin from '@fullcalendar/timegrid';

	export let sessions = [];

	let options = {
		initialView: 'timeGridDay',
		plugins: [timeGridPlugin],
		slotMinTime: '08:00:00',
		height: 860,
		stickyHeaderDates: false,
		allDaySlot: false,
		headerToolbar: {
			start: '',
			center: 'title',
			end: 'prev,next today timeGridDay timeGridWeek'
		},
		events: {sessions},
	};

	afterUpdate(() => {
		options.events = sessions;
		options = { ...options };
	})

</script>

<FullCalendar {options} style="margin: 1rem;"/>
