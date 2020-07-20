import mySql from 'mysql';
require('dotenv').config();

const connection = mySql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: 3306
});

connection.connect((err) => {
    if(err) throw err;
    console.log(`Database connected!`)
});

export default connection;