class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// now I need another class for linked list which will also have a constructor
class linkedList {
    constructor(node) {
        this.head = node;
        this.tail = node;
        this.length = 1;
    }
    // I want to append a node to the end.
    // we are going to create a new method on our class,
    // it takes a new node to insert on our list
    insert(node) {
        this.tail.next = node;
        // so we are always keeping tail up to date by always pointing to last item in list
        this.tail = node;
    }
    insertAtIndex(node, index) {
        if (index !== undefined) {
            var current = this.head;
            for(var i = 1; i < index; i++){
               current = current.next;
            }
            // this.next = current.next;
            this.next = current.next;
            current.next = node;
        } else {
            this.tail.next = node;
            // so we are always keeping tail up to date by always pointing to last item in list
            this.tail = node;
        }
        this.length++;

    }
}

// linkedList takes a node and I have to pass in the data for the node
// instantiating a new linked list, calling it food, passing it a new node called sopapillas
const food = new linkedList(new Node("sopapillas"));
food.insert(new Node("taco"));
food.insert(new Node("burrito", 3));
food.insert(new Node("guacamole"));
food.insertAtIndex(new Node("salsa"), 2);
food.insertAtIndex(new Node("chimichanga"), 1);

console.log(JSON.stringify(food, null, 2));
