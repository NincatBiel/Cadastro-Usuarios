const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cadastro_db'
});

connection.connect((err) => {
    if(err) throw err, console.log('Conectado ao banco de dados do MySQL');
});

module.exports = connection;