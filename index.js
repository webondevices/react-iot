import React from "react";
import express from "express";
import ReactTestRenderer from "react-test-renderer";
import World from "./components/World.js";
import elementToString from "./elementToString.js";

const rootElement = React.createElement(World, null, null);
const world = ReactTestRenderer.create(rootElement);
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!doctype html>
    <title>Server World</title>
    <meta charset="utf-8">
    ${elementToString(world)}
  `);
});

app.listen(8080);
