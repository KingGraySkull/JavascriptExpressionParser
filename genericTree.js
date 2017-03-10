//Generic Tree

function Node(data) {
    this.data = data;
    this.firstChild = null;
    this.nextSibling = null;
}

Node.prototype.addChild = function(data) {
    if(this.firstChild === null) {
        this.firstChild = new Node(data);
    }
    else if(this.nextSibling === null) {
        this.nextSibling = new Node(data);
    }
    else {
        var current = this.nextSibling;
        while(current.nextSibling !== null) {
            current = current.nextSibling;
        }
        current.nextSibling = new Node(data);
    }
}
