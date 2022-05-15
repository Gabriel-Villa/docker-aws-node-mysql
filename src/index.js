const express = require('express');
const mysql = require("mysql");
const dotenv = require('dotenv');
const ip = require('ip');
const cors = require('cors');
const database = require('./database.js')

const pool = mysql.createPool(database);
const PORT = process.env.SERVER_PORT || 3000;

dotenv.config()

const app = express();


app.use(cors({origin: '*'}));
app.use(express.json());

app.get('/', (req, res) => res.send('Home'));
app.get('/geincos', (req, res) => {
    pool.query('SELECT 1 + 1 AS solution', function (error, results) {
        if (error) {
            throw error;
        }else{
            console.log('The solution is: ', results[0].solution);
            res.send(`El resultado es : ${Object.values(results[0])}`);
        }
    });
    
});

app.listen(PORT, () => console.log(`Server on por ${PORT} Ip: ${ip.address()}`));