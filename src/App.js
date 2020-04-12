import React, { useState } from 'react';
import { useInterval } from './hooks';
import Dropdown from 'react-dropdown';
import RenderList from './RenderList';
import 'react-dropdown/style.css';
import RenderTree from './RenderTree';
import RenderEditor from './RenderEditor';

import { processLinkedListCode, processBtree } from './backend/backend';

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

/* eslint-disable */
const sampleBtreeCode = `
  /\/\ Try let n = new node(3) for creating a new node
  /\/\ Try insert(r, n) for inserting a new node into the binary tree
  r = new node(10)`

const options = [
  'LinkedList',
  'BinaryTree'
];
const defaultOption = options[0]

function App() {

  let [ option, setOption ] = useState(options[0])
  let [ tree, setTree ] = useState(processBtree(sampleBtreeCode))
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

    setOption(option)
    if(option === 'LinkedList') {
      setStates(processLinkedListCode(code))
      if (states.length !== 0) {
        setList(states[0])
      }
      clickRunCode(!runCode)
    } else {
      let tree = processBtree(code)
      setTree(tree)
    }
  }

  const onChange = (code) => {
    setCode(code)
  }

  const onSelect = (option) => {
    if (option.value === "LinkedList") {
      setCode(sampleCode)
    } else {
      setCode(sampleBtreeCode)
    }
    setOption(option.value)
  }

  return (
    <React.Fragment>
      <div className="App">
        <RenderEditor onClick={onClick} onChange={onChange} code={code} />
        {(option === 'LinkedList')?
          <RenderList linkedList={linkedList} /> : <RenderTree tree={tree}/>}
      </div>
      <Dropdown options={options} value={option} onChange={onSelect} placeholder="Select an option" />
    </React.Fragment>
  );
}

export default App;
