//   const heading = document.createElement("h1");
//   heading.innerHTML = "Hello world from JS";
//   const root = document.getElementById("root");
//   root.appendChild(heading);
import React from "react";
import ReactDOM from "react-dom/client";
import { Configuration, OpenAIApi } from "openai";

const heading = React.createElement("h1", {}, "Haii my frnds from react");
console.log(heading);
root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
