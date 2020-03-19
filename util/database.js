const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'remotemysql.com',
    port:3306,
    user: 'vX9607dWdP',
    database: 'vX9607dWdP',
    password: 'sRRe9uVoac'
});

module.exports = pool.promise();
