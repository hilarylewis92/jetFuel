process.env.NODE_ENV = 'test'

var chai = require('chai')
var should = chai.should()
var chaiHttp = require('chai-http')
var server = require('../server.js')

chai.use(chaiHttp)


//These tests are failing because of a "TypeError: app.address is not a function"
//This is most likely a chaiHTTP issue, unknown


describe('GET /api/folders', function() {
  it('should return all folders', function(done) {
    chai.request(server)
    .get('/api/folders')
    .end(function(err, res) {
      res.should.have.status(200)
      res.should.be.json
      res.body.should.be.a('object')
      res.body.length.should.be.eql(2)
      res.body.should.have.property('Music')
    done()
    })
  })
})

describe('POST /api/folders', function() {
  it('should return all folders', function(done) {
    let newFolder = {
      name: "Music"
    }

    chai.request(server)
    .post('/api/folders')
    .send(newFolder)
    .end(function(err, res) {
      res.should.have.status(200)
      res.should.be.json
      res.body.should.be.a('object')
      res.body.length.should.be.eql(3)
      res.body.should.have.property('Music')
      res.body.book.should.have.property('http://google.com')
    done()
    })
  })
})

describe('GET /api/urls', function() {
  xit('should return all folders', function(done) {
    chai.request(server)
    .get('/api/folders')
    .end(function(err, res) {
      res.should.have.status(200)
      res.should.be.json
      res.body.should.be.a('object')
      res.body.length.should.be.eql(3)
    done()
    })
  })
})

describe('POST /api/urls', function() {
  xit('should return all folders', function(done) {
    let newURL = {
      short_url: `localhost:3000/${md5('url1').slice(0,5)}`,
      long_url: 'http://google.com',
      created_at: new Date(),
      folder_id: md5('folder_id')
    }

    chai.request(server)
    .post('/api/folders')
    .send(newURL)
    .end(function(err, res) {
      res.should.have.status(200)
      res.should.be.json
      res.body.should.be.a('object')
      res.body.length.should.be.eql(3) //for folders content length
      res.body.should.have.property('Music')
      res.body.book.should.have.property('http://google.com')
    done()
    })
  })
})
