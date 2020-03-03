const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const os = require('os');
const Sequelize = require('sequelize');

const app = express();

// Use cors
app.use(cors());

// Establishing the connection to MySQL database with credentials from .env file
const dbConnection = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {

  host: process.env.DB_HOST,

  // The dialect MUST be explicitly declared. Cannot be obtained from .env
  dialect: 'mysql'

});

// Testing the database connection
try {
  console.log('Database connection has been established successfully.');
}
catch (error) {
  console.error('Unable to connect to the database:', error);
}

// Testing the DOM modification
app.get('/', (req, res) => {
  res.send('Warp 10, engage')
});

// Testing the port 3000
app.listen(3000, () => {
  console.log('Listening to port 3000')
});