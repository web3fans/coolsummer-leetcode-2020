/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(s === '') return 0
  if(s && s.length === 1) return 1
  
  let num = 0, res = 0;
  let m = '';
  for(let c = 0; c < s.length; c++){
      if(m.indexOf(s[c]) === -1){
          m += s[c];
          num++;
          res = res > num ? res : num
      }else{
          m = m.slice(m.indexOf(s[c]) + 1);
          m += s[c];
          num = m.length
      }
  }
  return res
};