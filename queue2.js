'use strict';

const Stack = require('./stack');
  
class Queue2 {
  constructor()
  {
    this.stack = new Stack();
  }
  
  enqueue(element){
    this.stack.push(element);
  }

  dequeue(){

    let tempStack = new Stack();

    while(this.stack.top !== null){
      tempStack.push(this.stack.pop());
    }
    let result = tempStack.pop();
    while(tempStack.top !== null){
      this.stack.push(tempStack.pop());
    }
    return result;

  }



  
}
  
  
  
module.exports= Queue2;