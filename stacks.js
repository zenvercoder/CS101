class Stack {
    constructor(){
        this.store = [];
    }
    push(thing){
        this.store.push(thing);
    }
    top(){
        return this.store[this.store.length - 1];
    }
    pop(){
        this.store.pop();
    }
    isEmpty(){
        // if empty, will return zero which is falsey
        return !this.store.length;
        // return this.store.length === 0; // will also work
    }
    getSize(){
        // console.log('this.store.length= ' + this.store.length);
        return this.store.length;
    }
}

const pancakes = new Stack();
const waffles = new Stack();

pancakes.push('chocolate chip');
pancakes.push('blueberry');
pancakes.push('buckwheat');
waffles.push('buckwheat');

console.log(pancakes.top());
console.log(pancakes.pop());
console.log(pancakes.isEmpty());
console.log(pancakes.getSize());

// objects and arrays are passed by reference

// before ES6, we would do:

// function Stack(){
//     this.store = [];
// }
//
// Stack.prototype.push = function(thing){
//     this.store.push(thing);
// };