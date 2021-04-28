import React from "react";
import ReactTestRenderer from "react-test-renderer";
import World from "./components/World.js";

const rootElement = React.createElement(World, null, null);
ReactTestRenderer.create(rootElement);
