import React from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

import './App.css'

const editorStyle = {
  borderStyle: 'solid',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '20px',
  marginTop: '20px',
  width: '700px',
  height: '700px',
}

const sampleCode = `function reverse(head) {
  let node1 = new node('null');
  let node2 = head;
  let node3 = node2.next;
  while (node3.val !== 'null') {
    node2.next = node1;
    node1 = node2;
    node2 = node3;
    node3 = node3.next;
  }
  node2.next = node1;
  node1 = node2;
  head = node1;
  return head;
}`

const RenderEditor = ({ onClick }) => {

  return(
    <div className="Editor-Container">
      <AceEditor
        style={editorStyle}
        placeholder="Placeholder Text"
        mode="javascript"
        theme="monokai"
        name="blah2"
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={sampleCode}
        setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}/>
      <div className="Buttons-Container">
        <button className="Button" onClick={onClick}>RUN CODE</button>
      </div>
    </div>
  )
}

export default RenderEditor;