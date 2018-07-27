'use strict';

class Node {
  constructor(element,next)
  {
    this.element = element;
    this.next = next;
  }
}

class Stack {
  constructor()
  {
    this.top = null;
  }

  push(element){
    if(this.top === null){
      this.top= new Node(element, null);
      return this.top;
    }
    const node = new Node(element, this.top);
    this.top = node;
  }

  pop(){
    const node = this.top;
    if(this.top === null){
      return node;
    }
    else{
      this.top= node.next;
      return node.element;
    }
  }

}



module.exports= Stack;