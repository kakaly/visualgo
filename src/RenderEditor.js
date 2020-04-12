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

const RenderEditor = ( props ) => {
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
        value={props.code}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2
        }}
        onChange={ props.onChange }
      />
      <div className="Buttons-Container">
        <button className="Button" onClick={ props.onClick }>RUN CODE</button>
      </div>
    </div>
  )
}

export default RenderEditor;