import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Editor from "@monaco-editor/react";

function App() {
  return (
   <Editor
     height="90vh"
     defaultLanguage="javascript"
     defaultValue="// some comment"
   />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
