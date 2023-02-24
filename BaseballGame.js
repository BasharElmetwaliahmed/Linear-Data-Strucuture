/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack=[]
for(let i=0 ; i<operations.length;i++){
switch(operations[i]){
  case 'C':
    stack.pop();
    break;
  case 'D':
   stack.push(stack[stack.length-1]*2);
   break;
  case '+':
    stack.push(stack[stack.length-1]+stack[stack.length-2])
    break;
  default:
    stack.push(parseInt(operations[i]))  
    
}


}
let sum=0;
for(let i=0;i<stack.length;i++){
  sum+=stack[i]
}
return sum
};
