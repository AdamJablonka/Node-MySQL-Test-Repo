const http = require('http');
const mysql = require('mysql2');

const hostname = '127.0.0.1';
const port = 3000;

let dbTables;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bender_db'
});

myQuery = connection.query(
    'SELECT * FROM `bender_table`', 
    (err, results, fields) => {
        console.log(results);
        dbTables = results;
});

console.log("MY QUERY:", myQuery);

const server = http.createServer((req, res) => {
    res.write(JSON.stringify(dbTables));
    res.end();
});

server.listen(port, hostname, () => {
    console.log('Server running!');
});
