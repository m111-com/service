const Pool = require('pg').Pool




const pool = new Pool({

    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_USER_PASSWORD,
    port: process.env.DB_PORT,
    // ssl: true,
})


module.exports = {
    async query(q_text:string, params:any[]) {
        const res = await pool.query(q_text, params)
        return res
    },
    pool
}