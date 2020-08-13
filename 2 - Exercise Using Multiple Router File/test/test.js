console.log = () => {};
const rewire = require('rewire');
const expect = require('chai').expect;
const request = require('supertest');
const assert = require('chai').assert;
const Structured = require('structured');
const express = require('express');

describe('', function() {
  it('', function(done) {
    process.env.PORT = 8000;
    const appModule = rewire('../app.js');
    const app = appModule.__get__('app');
    let expressions;
    // Test that router is exported:
    const myRouter = require('../expressions.js');
    expect(myRouter, 'Did you export `expressionsRouter` using `module.exports`?').to.not.be.deep.equal({});
    const routerModule = rewire('../expressions.js');
    // Test that router responds to endpoints:
    const testApp = express();
    testApp.use('/expressions', routerModule.__get__('expressionsRouter'));
    testApp.listen(8001, () => {
      try {
        expressions = routerModule.__get__('expressions');
      } catch (e) {
        expect(e, 'Did you move the `expressions` array to expressions.js?').to.not.exist;
      }
      request(testApp)
      .get('/expressions')
      .then((response) => {
        // We have to do these checks because of the way rewire/require works and a closure over the idCounter in `utils`
        expect(response.body, 'Does your GET / route in `expressionsRouter` return the `expressions` array?').to.be.an.instanceOf(Array);
        expect(response.body.length, 'Does your GET / route in `expressionsRouter` return the `expressions` array?').to.equal(expressions.length);
      })
      .then(() => {
        return request(app)
        .get('/expressions')
        .then((response) => {
          expect(response.body, 'Does your GET / route in `expressionsRouter` return the `expressions` array?').to.be.an.instanceOf(Array);
          expect(response.body.length, 'Does your GET / route in `expressionsRouter` return the `expressions` array?').to.equal(expressions.length);
          done();
        });
      })
      .catch(done);
    });
  });
});
