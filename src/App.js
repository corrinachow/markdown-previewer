import React, { useState, useEffect } from "react";

const MarkdownPreviewer = () => {
  const defaultText = `# Hello, World!`;

  const [text, setText] = useState(defaultText);

  const handleInputChange = event => {
    setText(event.target.value);
  };

  return (
    <>
      <textarea id="editor" onChange={handleInputChange} />
      <div id="preview">{text}</div>
    </>
  );
};

export default MarkdownPreviewer;
