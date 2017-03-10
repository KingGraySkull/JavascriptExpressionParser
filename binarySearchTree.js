function TreeNode(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

var treeRoot = null;

function insert(root,data) {
    
    if(root === null) {
        var node = new TreeNode(data);
        root = node;
    }
    else if(data <= root.data) {
        root.left = insert(root.left,data);
    }
    else if(data >= root.data) {
        root.right = insert(root.right,data);
    }
     return root;
}

function search(root,data) {
    
    if(root === null) {
        return false;
    }
    else if (data === root.data) {
        return true;
    }
    else if(data <= root.data) {
        return (search(root.left,data));
    }
    else if(data >= root.data) {
        return (search(root.right,data));
    }
}

//find minimum element in tree
//the left most node is the minimum element
function findMin(root) {
    if(root === null) {
        return -1;
    }
    else if(root.left === null) {
        return root.data;
    }
    else {
        return(findMin(root.left));
    }
}

//find maximum element in tree
//the right most node is the maximum element
function findMax(root) {
    if(root === null) {
        return -1;
    }
    else if(root.right === null) {
        return root.data;
    }
    else {
        return(findMax(root.right));
    }
}

//<Data,Left,Right>
function preOrder(root) {
    if(root === null) {
        return;
    }
    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);
}

//<Left,Data,Right>
function inOrder(root){
    if(root === null) {
        return;
    }
    inOrder(root.left);
    console.log(root.data);
    inOrder(root.right);
}

//<Left,Right,Data>
function postOrder(root){
   if(root === null) {
        return;
    }
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.data);
}

function LevelOrder(root) {
    if(root === null) {
        return;
    }
    var queue = new Queue();
    queue.enqueue(root);
    while(!queue.isEmpty()) {
        var current = queue.dequeue();
            console.log(current.data);
        if(current.left !== null) {
            queue.enqueue(current.left);
        }
        if(current.right !== null) {
            queue.enqueue(current.right);
        }
    }
}

treeRoot = insert(treeRoot,'F');
insert(treeRoot,'D');
insert(treeRoot,'J');
insert(treeRoot,'B');
insert(treeRoot,'E');
insert(treeRoot,'G');
insert(treeRoot,'K');
insert(treeRoot,'A');
insert(treeRoot,'C');
insert(treeRoot,'I');
insert(treeRoot,'H');
//console.log(treeRoot);

/*
var min = findMin(treeRoot);
var max = findMax(treeRoot);
console.log("Minimum value in a tree = "+min);
console.log("Maximum value in a tree = "+max);
*/

LevelOrder(treeRoot);
