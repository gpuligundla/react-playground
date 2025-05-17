import React from "react";
import { createRoot } from "react-dom";

const pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const app = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Geno's"),
    React.createElement(
      pizza,
      {
        name: "pizza 1",
        description: "Pizza sample 1",
      },
      ""
    ),
    React.createElement(
      pizza,
      {
        name: "pizza 2",
        description: "Pizza sample 2",
      },
      ""
    ),
    React.createElement(
      pizza,
      {
        name: "pizza 3",
        description: "Pizza sample 3",
      },
      ""
    ),
    React.createElement(
      pizza,
      {
        name: "pizza 4",
        description: "Pizza sample 4",
      },
      ""
    ),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(app));
