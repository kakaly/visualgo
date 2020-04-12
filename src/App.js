import React, { useState } from 'react';
import { useInterval } from './hooks';
import RenderList from './RenderList';
import RenderEditor from './RenderEditor';

import { processLinkedListCode } from './backend/backend';

import './App.css';

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

function App() {

  let [ states, setStates ] = useState(processLinkedListCode(sampleCode))
  let [ code, setCode ] = useState(sampleCode)
  let [ linkedList, setList ] = useState(states[0])
  let [ stateIndex, setStateIndex ] = useState(0)
  let [ runCode, clickRunCode ] = useState(false)

  useInterval(() => {
    if(runCode) {
      if (states.length !== 0) {
        if (stateIndex >= states.length - 1) setStateIndex(0)
        else setStateIndex(stateIndex+1)
        setList(states[stateIndex])
      }
    }
  }, 100);

  const onClick = () => {
    setStates(processLinkedListCode(code))
    if (states.length !== 0) {
      setList(states[0])
    }
    clickRunCode(!runCode)
  }

  const onChange = (code) => {
    setCode(code)
  }

  return (
    <React.Fragment>
      <div className="App">
        <RenderEditor onClick={onClick} onChange={onChange} code={code} />
        <RenderList linkedList={linkedList} />
      </div>
    </React.Fragment>
  );
}

export default App;
