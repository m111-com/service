import 'dotenv/config';
import express, { Application, Request, Response } from 'express';
import logger from './utils/logger';

// Boot express
const app: Application = express();
const port = process.env.PORT || 3000;

app.use('/', (req: Request, res: Response) => {
	res.status(200).send({ data: 'Hello from m111' });
});

app.listen(port, () => logger.info(`Server is listening on port ${port}!`));
