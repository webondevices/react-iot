const React = require('react');
const express = require('express');
const ReactTestRenderer = require('react-test-renderer');
const Clock = require('./components/Clock');
const elementToString = require('./elementToString');

const root = React.createElement(Clock, null, null);

const clock = ReactTestRenderer.create(root);

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!doctype html>
    <title>Server Clock</title>
    <meta charset="utf-8">
    ${elementToString(clock)}
  `);
});

app.listen(8080);