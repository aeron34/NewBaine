const express = require('express');
const nodemailer = require('nodemailer');

const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;

const knx = require('knex')({
  client: 'pg',
  connection: {
    host : 'queenie.db.elephantsql.com',
    user : 'knnqpjlo',
    password : 'gFwUYQT8FxjlOH-3ZDr8h8kgzS3S5wcJ',
    database : 'knnqpjlo'
  },
});


const app = express();


const bodyParser = require('body-parser');

app.get('/', (req, res) => {
	res.send('doned off');
});


app.listen(process.env.PORT)
