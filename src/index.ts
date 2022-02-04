import 'dotenv/config';
import express, { Application, Request, Response } from 'express';

// Boot express
const app: Application = express();
const port = process.env.PORT || 3000;

// Application routing
app.use('/', (req: Request, res: Response) => {
	res.status(200).send({ data: 'Hello from m111' });
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
