import React, { useState } from "react";

const MarkdownPreviewer = () => {
  return (
    <>
      <textarea id="editor" />
      <div id="preview" />
    </>
  );
};

export default MarkdownPreviewer;
