// config/db.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'brktcoraxhoslbbecgah-mysql.services.clever-cloud.com',
    user: 'u4fke0udkgvuukdu',
    password: 'RVWL5YlgzAgOpUQVyLxB',
    database: 'brktcoraxhoslbbecgah',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
    dateStrings: true,
    // Si Clever Cloud requiere SSL:
    ssl: { rejectUnauthorized: false }
});

pool.on('error', (err) => {
    console.error('[MySQL pool error]', err);
});

module.exports = pool;
