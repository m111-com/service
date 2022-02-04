import { Pool } from 'pg';

const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_USER_PASSWORD,
});

export = {
	query: (text: string, params: any) => pool.query(text, params),
};
