// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

  constructor(){
    this.stackOne = new Stack();
    this.stackSecond = new Stack();
  }

  add(record){
    this.stackOne.push(record);
  }

  remove(){
    while(this.stackOne.peek()){
      this.stackSecond.push(this.stackOne.pop());
    }

    const record = this.stackSecond.pop();

    while(this.stackSecond.peek()){
      this.stackOne.push(this.stackSecond.pop());
    }
    return record;
  }

  peek(){
    while(this.stackOne.peek()){
      this.stackSecond.push(this.stackOne.pop());
    }

    const record = this.stackSecond.peek();

    while(this.stackSecond.peek()){
      this.stackOne.push(this.stackSecond.pop());
    }
    return record;
  }

}

module.exports = Queue;
