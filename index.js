const Stack = require('./stack');
const util = require('util');

function main(){
  let startreck= new Stack();

  startreck.push('Kirk');
  startreck.push('Spock');
  startreck.push('McCoy');
  startreck.push('Scotty');

  // startreck.pop();

  // console.log(util.inspect(startreck, false, null));
  peek(startreck);
  remove(startreck, 'McCoy');
  display(startreck);
  console.log(is_palindrome('dad'));
  console.log(is_palindrome('A man, a plan, a canal: Panama'));
  console.log(is_palindrome('1001'));
  console.log(is_palindrome('Tauhida'));

}

main();


function peek(list){
  console.log(list.top.element);
}

function display(list){
  let curr = list.top;
  let str = '';
  while(curr){
    str += curr.element + ', ';
    curr= curr.next;
  }
  console.log('stack= '+str);
}

function remove(list, element){
  let curr = list.top;
  let newStack= new Stack();
  while(curr.element !== element){
    newStack.push(curr.element);
    list.pop();
    curr=list.top;
  }
  list.pop();
  while(newStack.top){
    list.push(newStack.top.element);
    newStack.pop();
  }
  return list;
}

function is_palindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let newStack= new Stack();
  
  for(let i=0; i<str.length; i++){
    newStack.push(str[i]);
  }
  for(let i=0; i<str.length; i++){
    if (newStack.pop() !== str[i]){
      return false;
    }
  }
  return true;
}

