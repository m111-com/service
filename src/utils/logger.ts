import { format, createLogger, addColors, transports } from 'winston';

const { combine, printf, label, colorize, timestamp } = format;

const config = {
	levels: {
		error: 0,
		debug: 1,
		warn: 2,
		data: 3,
		info: 4,
		verbose: 5,
		silly: 6,
	},
	colors: {
		error: 'red',
		debug: 'blue',
		warn: 'yellow',
		data: 'grey',
		info: 'green',
		verbose: 'cyan',
		silly: 'magenta',
	},
};

addColors(config.colors);

const logger = createLogger({
	transports: [new transports.Console()],
	levels: config.levels,
	level: 'silly',
	format: combine(
		label({
			label: '[M111]',
		}),
		colorize({ all: true }),
		timestamp({
			format: 'YY-MM-DD HH:MM:SS',
		}),
		printf(
			info => `${info.label} ${info.timestamp}  ${info.level} : ${info.message}`
		)
	),
});

export default logger;
