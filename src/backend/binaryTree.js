// [6, 3, 9, 2, 1, 7, 10]
//        6
//     3      9
//   2   1  7  10

class node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}

function insertNode(root, node) {
    if (node.val < root.val) {
        if (root.left === null) root.left = node
        else insertNode(root.left, node)
    }
    else {
        if (root.right === null) root.right = node
        else insertNode(root.right, node)
    }
}

function insert(root, node) {
    if(root === null) {
        root = node
        return root
    }
    root = insertNode(root, node)
    return root
}
  
function bfs(root) {
    let tree = {}
    let q = []
    let levels = [0]
    let explored = []
    q.push(root)

    while(q.length !== 0) {
        let node = q.pop()
        let level = levels.pop()
        explored.push(node)
        tree[node.val] = {}
        tree[node.val]['level'] = level
        let left = node.left
        let right = node.right
        if (right) {
            tree[node.val]['right'] = right.val
            q.push(right)
            levels.push(level+1)
        } else tree[node.val]['right'] = null
        if (left) {
            tree[node.val]['left'] = left.val
            q.push(left)
            levels.push(level+1)
        } else tree[node.val]['left'] = null
    }
    return tree
}
  
export  { node, insert, bfs }