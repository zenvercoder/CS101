class Queue {
    constructor(){
        this.store = [];
    }
    enqueue(thing){
        // add item to the end of the queue
        this.store.push(thing);
    }
    front(){
        // return item at front of queue
        return this.store[0];
    }
    dequeue(){
        // remove item from the front of queue
        return this.store.shift();
    }
    isEmpty(){
        // if empty, will return zero which is falsey
        // return !this.store.length;
        return this.store.length === 0;
    }
    getSize(){
        // console.log('this.store.length= ' + this.store.length);
        return this.store.length;
    }
}

const rainbow = new Queue();

rainbow.enqueue('red');
rainbow.enqueue('orange');
rainbow.enqueue('yellow');
rainbow.enqueue('green');
rainbow.enqueue('blue');
rainbow.enqueue('purple');


console.log(rainbow);
console.log('front= ' + rainbow.front());
console.log('dequeue= ' + rainbow.dequeue());
console.log(rainbow);

console.log(rainbow.isEmpty());
console.log(rainbow.getSize());


