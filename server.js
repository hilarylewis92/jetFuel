const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const md5 = require('md5');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Jet Fuel'

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.get('/api/folders', (req, res) => {
  database('folders').select()
    .then((folders) => {
      res.status(200).json(folders)
    })
    .catch((err) => {
      console.error(err)
    })
})

app.get('/api/urls', (req, res) => {
  database('urls').select()
    .then((urls) => {
      res.status(200).json(urls)
    })
    .catch((err) => {
      console.error(err)
    })
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is runing on ${app.get('port')}.`)
})
