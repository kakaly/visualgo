/* eslint-disable */
import { node as cnode, linkedList, serialize } from './linkedList'
import { node as bnode, insert as binsert, bfs } from './binaryTree'

const processLinkedListCode = (code) => {

  let node = cnode
  let cserialize = serialize

  let linkedlist = new linkedList();
  let head = linkedlist[0];
  let states = []

  // Process the code
  let returnPresent = false
  let funtionPresent = false
  let lines = code.split('\n');
  lines = lines.filter(line => line !== "")
  if (lines.length === 2) { //TODO: Ugly 1
    return []
  }
  for(let i=0; i<lines.length; i++) {
    if(lines[i].includes('function')) {
      funtionPresent = true
      lines.splice(i, 1)
    }
    if(i%2 === 0) {
      lines.splice(i, 0, '  states.push(cserialize(linkedlist));')
    }
    if(lines[i].includes('return')) {
      returnPresent = true
      lines.splice(i, 2)
    }
  }

  if (!returnPresent && !funtionPresent) {
    return []
  }

  eval(lines.join('\n'))

  return states;
}

const processBtree = (code) => {

  let node = bnode
  // let insert = binsert
  let lines = code.split('\n');
  lines = lines.filter(line => line !== "")
  if (lines.length === 2) { //TODO: Ugly 1
    return []
  }
  for(let i=0; i<lines.length; i++) {
    if(lines[i].includes(`//`)) {
      lines.splice(i, 2)
    }
  }

  let r = new node(5)
  eval(lines.join('\n'))
  let tree = bfs(r)
  return tree
}
export { processLinkedListCode, processBtree }
