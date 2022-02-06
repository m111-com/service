import 'dotenv/config';
import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import logger from './utils/logger';
import pool from './db';

// Boot express
const app: Application = express();
const port = process.env.PORT || 3000;
app.use(morgan('dev'));

app.use('/', (req: Request, res: Response) => {
	// res.status(200).send({ data: 'Hello from m111' });
	pool.query('SELECT * FROM users ORDER BY id ASC', (err, data) => {
		if (err) {
			logger.error(err);
			res.status(501).send(err);
		}
		res.send(data);
	});
});

app.listen(port, () => logger.info(`Server is listening on port ${port}!`));
