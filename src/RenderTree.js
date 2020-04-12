import React, { useEffect, useRef } from 'react'
import { jsPlumb } from 'jsplumb'
import { buildTree } from './library'

import './App.css'

const RenderTree = ({tree}) => {

    let nodes = Object.keys(tree)
    jsPlumb.importDefaults({ ConnectionsDetachable: false });

    const savedTree = useRef();
    useEffect(() => {
        var connections = []
        // memoize the tree and let useEffect render only when there is a change
        savedTree.current = tree
        jsPlumb.ready(() => { connections = buildTree(tree) })
        return function cleanup() {
            connections.forEach(conn => jsPlumb.deleteConnection(conn))
        }
    }, [tree])

    return(
        <div className='Container'>
            {nodes.map(node => <div key={node} id={`element${node}`} className={`level${tree[node]['level']}`}>{node}</div>)}
        </div>
    )
}

export default RenderTree;