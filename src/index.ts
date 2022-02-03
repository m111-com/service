import express, { Application, Request, Response, NextFunction } from 'express';

// Boot express
const app: Application = express();
const port = 5000;

// Application routing
app.use('/', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send({ data: 'Hello from m111' });
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
