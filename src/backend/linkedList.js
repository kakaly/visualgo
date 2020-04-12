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
  console.log(linkedList)
  let list = {};
  linkedlist.forEach(node => {
    if (node) {
      let val = 1
      if(node.next === null) val = 'null'
      else val = node.next.val
      if(node.val !== 'null') list[node.val] = val;
      else list[node.val] = ''
    }
  });
  return list
  }
  
  export  { node, linkedList, serialize }