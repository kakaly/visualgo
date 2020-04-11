import { node, linkedList, serialize } from './linkedList'

const processCode = () => {
  let linkedlist = new linkedList();
  let head = linkedlist[0];
  let states = []

  // Paste the routine here
  let node1 = new node('null');
  states.push(serialize(linkedlist));
  let node2 = head;
  states.push(serialize(linkedlist));
  let node3 = node2.next;
  states.push(serialize(linkedlist));
  while (node3.val !== 'null') {
    states.push(serialize(linkedlist));
    node2.next = node1;
    states.push(serialize(linkedlist));
    node1 = node2;
    states.push(serialize(linkedlist));
    node2 = node3;
    states.push(serialize(linkedlist));
    node3 = node3.next;
    states.push(serialize(linkedlist));
  }
  node2.next = node1;
  states.push(serialize(linkedlist));
  node1 = node2;
  states.push(serialize(linkedlist));
  head = node1;
  states.push(serialize(linkedlist));
  // routine ends here
  return states;
}

/*
Core algorithm:
  1. Watch for new nodes and communicate it to the frontend
  2. Watch for copy of any of the nodes and replace the copy in the list
*/

/*
function reverse(head) {
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
}*/


export { processCode }
