const colors = [
	'#2176AE',
	'#B66D0D',
	'#FBB13C',
	'#FE6847',
	'#57B8FF',
	'#6F8695',
	'#1C448E',
	'#FFE381',
	'#CEC288',
	'#DBFE87',
];

function generateSessions(config){
	const start = new Date();
	start.setHours(8, 0, 0, 0);

	return Array.from(Array(config.sessionsPerRoom).keys()).map(sessionIndex => {
		const sessionNumber = sessionIndex + 1;
		return Array.from(Array(config.rooms).keys()).map(roomIndex => {
			const roomNumber = roomIndex + 1;

			const id = `R${roomNumber}S${sessionNumber}`;
			return {
				id,
				title: `Session ${sessionNumber} - Room ${roomNumber}`,
				start: new Date(start.getTime() + config.sessionsLength * sessionIndex * 60000),
				end: new Date(start.getTime() + config.sessionsLength * sessionNumber * 60000),
				allDay: false,
				backgroundColor: colors[roomIndex],
			}
		});
	}).flat();
}

export default generateSessions;