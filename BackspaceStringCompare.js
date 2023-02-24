/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    function parseStack(str){
  let stack=[]
  for(let i=0;i<str.length;i++){
    if(str[i]=='#'){
      stack.pop()
    }
    else{
      stack.push(str[i])
    }
  }
 return stack.join('')
}
let s1=parseStack(s);
let s2=parseStack(t);
return s1==s2
};
