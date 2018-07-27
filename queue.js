
'use strict';

class Node {
  constructor(element, next, prev)
  {
    this.element = element;
    this.next = next;
    this.prev = prev;
  }
}
  
class Queue {
  constructor()
  {
    this.first = null;
    this.last = null;
  }
  
  enqueue(element){
    if(this.first === null){
      let node = new Node(element, null, null);
      this.first = node;

    }
    else if(this.last === null){
        let node = new Node(element,this.first, null);
        this.first.prev = node;
        this.last = node;
    }

    else{
      let node = new Node(element,this.last, null);     
      this.last.prev = node;
      this.last = node;
    }
  }

  dequeue(){
    if(this.first === null){
      return null;
    }
    else{
      let node = this.first;
      this.first = node.prev;
      
      return node;
    }
  }


  
}
  
  
  
module.exports= Queue;