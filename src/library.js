import { jsPlumb } from 'jsplumb'

const endpointConnector = {
  connector: ["Bezier", { stub: 25, midpoint: 0.001 }],
  overlays: [["PlainArrow", { location: 1, width: 15, length: 12 }]]
}

const buildList = (linkedList) => {
  let nodes = Object.keys(linkedList)
  let connections = []
  nodes.forEach(node => {
    if(node !== 'null') {
      let target = linkedList[node]
      let conn = jsPlumb.connect({
        source:`element${node}`,
        target:`element${target}`,
        endpointStyle:{ fillStyle: "yellow" },
        }, endpointConnector)
      connections.push(conn)
    }
  })
  return connections
}

export { buildList }