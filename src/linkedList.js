class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function linkedList() {
  var linkedlist = []
  let head = new node(1);
  linkedlist.push(head);
  let tmp1 = head;
  let i = 2;
  while (i <= 5) {
    let tmp2 = new node(i);
    tmp1.next = tmp2;
    linkedlist.push(tmp2);
    tmp1 = tmp1.next;
    i++;
  }
  let tmp2 = new node('null');
  tmp1.next = tmp2;
  linkedlist.push(tmp2);
  return linkedlist
}

function serialize(linkedlist) {
  let list = {};
  linkedlist.forEach(node => {
    if(node.val !== 'null') list[node.val] = node.next.val;
    else list[node.val] = ''
  });
  return list
}

export  { node, linkedList, serialize }