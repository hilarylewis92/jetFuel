// add diff
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const md5 = require('md5')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Jet Fuel'

const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

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

app.get('/:shortUrlId', (req, res) => {
  const { shortUrlId } = req.params
  database('urls').select()
    .then(urls => urls.filter(urlContent => urlContent.id.slice(0, 5) === shortUrlId))
    .then((targetUrl) => res.redirect(targetUrl[0].long_url))
})

app.post('/api/folders', (req, res) => {
  const { name } = req.body
  const id = md5(name)

  const folderContent = {
    id,
    name,
    created_at: new Date()
  }

  database('folders').insert(folderContent)
    .then(() => {
      database('folders').select()
        .then((folders) => {
          res.status(200).json(folders)
        })
    })
    .catch((err) => {
      console.error(err)
    })
})

app.post('/api/urls', (req, res) => {
  const { long_url, folder_id } = req.body
  const id = md5(long_url)
  const uri = 'http://localhost:3000/'
  const short_url = createShortURL(id, uri)

  const urlContent = {
    id,
    long_url,
    short_url,
    popularity: 0,
    folder_id,
    created_at: new Date()
  }

  database('urls').insert(urlContent)
    .then(() => {
      database('urls').select()
        .then((urls) => {
          res.status(200).json(urls)
        })
    })
    .catch((err) => {
      console.error(err)
    })
})

const createShortURL = (id, uri) => {
  return `${uri.slice(7, uri.length)}${id.slice(0,5)}`
}

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is runing on ${app.get('port')}.`)
})
