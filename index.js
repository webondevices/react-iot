const React = require('react');
const express = require('express');
const ReactTestRenderer = require('react-test-renderer');
const World = require('./components/World');
const elementToString = require('./elementToString');

const rootElement = React.createElement(World, null, null);

const world = ReactTestRenderer.create(rootElement);

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!doctype html>
    <title>Server World</title>
    <meta charset="utf-8">
    ${elementToString(world)}
  `);
});

app.listen(8080);