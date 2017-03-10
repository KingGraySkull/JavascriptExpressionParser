//create a node object
function Node(data) {
    this.data = data;
    this.next = null;
}


//create a Single Linked List
function SingleLinkList() {
    this.length = 0;
    this.head = null;
    
    //adds new node in list
    this.add = function(data) {
        var node = new Node(data);
        var currentNode = this.head;
        
        if(currentNode === null) {
            this.head = node;
            this.length += 1;
        }
        else {
            while(currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
            this.length += 1;
        }
    };
    
    //retuns length of list
    this.getLength = function() { 
        return this.length;
    };
    
    //prints elements in list
    this.printList = function() {
        
        if(this.length !== 0){
             var temp = list.head;
             var output = "[";
             while(temp.next !== null) {
                
                 output += temp.data+",";
                temp = temp.next;
        }
            output += temp.data+"]";
            console.log(output);
            
        }
        else {
            console.log("[]");
        }
    };

    //search  node in the list at position = index
    this.searchAt = function(index) {
          
        if(index < 0 || index > this.length - 1) {
            console.log("Invalid Index");
        }
        else {
            var temp = this.head;
            for(var i = 0; i < index; i++) {
                temp = temp.next;
            }
             return temp;
        }
    };
    
    
    //delete node from index
    this.removeAt = function(index) {
       
        if(index < 0 || index > this.length - 1) {
            console.log("Invalid Index");
        }
        else if (index === 0) {
            var temp = this.head;
            this.head = temp.next;
            temp = null;
            this.length -= 1;
            this.printList();
        }
        else {
            var temp = this.head;
            var nodeAfter = null;
            var previous = null;
            for(var i = 0; i < index; i++) {
                previous = temp;
                temp = temp.next;
                nodeAfter = temp.next;
            }
            previous.next = nodeAfter;
            this.length -= 1;
            this.printList();
        }
      
    };
}//end function single link list

function printR(list) {
    if(list === null) {
            return;
        }
    else {    
        console.log(list.data);
        printR(list.next);
    }

}

var list = new SingleLinkList();

list.add(1);
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);
list.add(6);
list.add(7);
list.add(8);
list.add(90);
list.add(100);

/*list.removeAt(4);
list.getLength();

list.removeAt(0);
list.getLength();


list.removeAt(7);
list.getLength();

list.removeAt(7);
list.getLength();

list.removeAt((list.getLength() - 1) / 2);
list.getLength();

list.removeAt(0);
list.getLength();*/

printR(list.head);