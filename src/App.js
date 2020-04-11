import React, { useState } from 'react';
import { useInterval } from './hooks';
import RenderList from './RenderList';
import RenderEditor from './RenderEditor';

import { processCode } from './backend';

import './App.css';

function App() {

  let states = processCode()
  console.log(states)
  let [ linkedList, setList ] = useState(states[0])
  let [ stateIndex, setStateIndex ] = useState(0)
  let [ runCode, clickRunCode ] = useState(false)

  useInterval(() => {
    if(runCode) {
      if(stateIndex >= states.length - 1) setStateIndex(0)
      else setStateIndex(stateIndex+1)
      setList(states[stateIndex])
    }
  }, 100);

  const onClick = () => {
    clickRunCode(!runCode)
  }

  return (
    <React.Fragment>
      <div className="App">
        <RenderEditor onClick={onClick}/>
        <RenderList linkedList={linkedList}/>
      </div>
    </React.Fragment>
  );
}

export default App;
