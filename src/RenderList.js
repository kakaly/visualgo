import React, { useEffect, useRef } from 'react'
import { jsPlumb } from 'jsplumb'
import { buildList } from './library'

import './App.css'

const RenderList = ({linkedList}) => {
  let nodes = Object.keys(linkedList)
  jsPlumb.importDefaults({ ConnectionsDetachable: false });

  const savedLinkedList = useRef();
  useEffect(() => {
    var connections = []
    // memoize the list and let useEffect render only when there is a change
    savedLinkedList.current = linkedList
    jsPlumb.ready(() => { connections = buildList(linkedList) })
    return function cleanup() {
      connections.forEach(conn => jsPlumb.deleteConnection(conn))
    }
  }, [linkedList])

  return(
    <div className='Container'>
      {nodes.map(node => <div key={node} id={`element${node}`} className='Node'>{node}</div>)}
    </div>
  )
}

export default RenderList;