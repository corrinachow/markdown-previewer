import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MarkdownPreviewer from "./App";

window.marked.setOptions({
  breaks: true
});

ReactDOM.render(<MarkdownPreviewer />, document.getElementById("root"));
