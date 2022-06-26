const request = require('supertest');
const assert = require('assert');
const express = require('express');

test("Initial test config", () => {

  
  request()
    .get('/user')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '15')
    .expect(200)
    .end(function(err, res) {
      if (err) throw err;
    });
});