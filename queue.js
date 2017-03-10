function Queue() {
    this.front = -1;
    this.rear = -1;
    this.storage = {};
    this.length = 0;
}

Queue.prototype.enqueue = function(data) {
    var end = this.rear;
    this.storage[end] = data;
    this.rear++;
    this.legth++;
};

Queue.prototype.dequeue = function(data) {
    var start = this.front;
    var removeElement;
    
    if(this.front != this.rear) {
        removeElement = this.storage[start];
        delete this.storage[start];
        this.front++;
        this.length--;
        return removeElement;
    }
};

Queue.prototype.printQ = function() {
  var size = this.rear;
  var output = "[ ";
  for(var i = this.front; i < size; i++) {
      output += this.storage[i]+" ";
  }
    output += "]";
    console.log(output);
};

Queue.prototype.isEmpty = function() {
    if(this.legth === 0) {
        return true;
    } 
    else {
        return false;
    }
};