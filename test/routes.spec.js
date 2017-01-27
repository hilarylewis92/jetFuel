process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');

chai.use(chaiHttp);

describe('GET /api/folders', () => {
  it('should return all folders', (done) => {
    chai.request(server)
    .get('/api/folders')
    .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.json; // jshint ignore:line
      res.body.should.be.a('object');
      res.body.length.should.be.eql(2); //for folders content length
      res.body.should.have.property('wowow');
    done();
    });
  });
});

describe('POST /api/folders', () => {
  it('should return all folders', (done) => {
    chai.request(server)
    .post('/api/folders')
    .send(folder)
    .end((err, res) => {
      res.should.have.status(200)
      res.should.be.json // jshint ignore:line
      res.body.should.be.a('object')
      res.body.length.should.be.eql(2) //for folders content length
      res.body.should.have.property('wowow')
      res.body.should.have.property('message').eql('Book successfully added!')
      res.body.book.should.have.property('title')
      res.body.book.should.have.property('author')
      res.body.book.should.have.property('pages')
      res.body.book.should.have.property('year')
    done();
    });
  });
});
