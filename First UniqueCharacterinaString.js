/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hashing={}
    for(let i=0;i<s.length;i++){
      if(!hashing[s[i]]){
        hashing[s[i]]=1
      }
      else{
      hashing[s[i]]+=1;   }
    }
    let keyof=Object.keys(hashing)
    for(let i=0;i<Object.keys(hashing).length;i++){
      if(hashing[keyof[i]]==1){
    return s.split('').indexOf(keyof[i])
      }
      
    }

    return -1
};
