const React = require('react');
const express = require('express');
const ReactTestRenderer = require('react-test-renderer');
const Clock = require('./components/Clock');
const elementToString = require('./elementToString');


const clock = ReactTestRenderer.create(React.createElement('div', null, [
  React.createElement('h1', { key: 0 }, 'Clock'),
  React.createElement(Clock, { key: 1 }, null),
]));

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
