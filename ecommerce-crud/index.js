const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// ✅ Connect to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',     // change if your MySQL username is different
    password: '',     // add password if you set one for MySQL
    database: 'ecommerce_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('✅ MySQL connected...');
});

// ✅ Test route
app.get('/', (req, res) => {
    res.send('CRUD API is running...');
});

// ✅ Start server
app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));
