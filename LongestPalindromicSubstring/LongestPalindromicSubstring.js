/*
 * @Author: your name
 * @Date: 2020-04-20 21:14:42
 * @LastEditTime: 2020-04-22 00:11:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/leetcode/LongestPalindromicSubstring/LongestPalindromicSubstring.js
 */
// 中心扩展算法
// 我们观察到回文中心的两侧互为镜像。因此，回文可以从它的中心展开，并且只有 2n - 1 个这样的中心。
// 你可能会问，为什么会是 2n - 1 个，而不是 n 个中心？
// 因为回文的中心要区分单双。
// 假如回文的中心为 双数，例如 abba，那么可以划分为 ab bb ba，对于n长度的字符串，这样的划分有 n-1 种。
// 假为回文的中心为 单数，例如 abcd, 那么可以划分为 a b c d， 对于n长度的字符串，这样的划分有 n 种。
// 对于 n 长度的字符串，我们其实不知道它的回文串中心倒底是单数还是双数，所以我们要对这两种情况都做遍历，也就是 n+(n-1) = 2n - 1，所以时间复杂度为 O(n)。
// 当中心确定后，我们要围绕这个中心来扩展回文，那么最长的回文可能是整个字符串，所以时间复杂度为 O(n)。
// 所以总时间复杂度为 O(n^2)

// 来自https://leetcode-cn.com/problems/longest-palindromic-substring/solution/5-zui-chang-hui-wen-zi-chuan-cc-by-bian-bian-xiong/
const expandAroundCenter = function(s, left, right){
  var L = left, R = right;
  //从从当前中心向两边扩展
  while(L >= 0 && R < s.length && s[L] === s[R]){
      L--;
      R++;
  }
  return R - L - 1;
}

const longestPalindrome = function(str) {
    var length = str.length;
    if(length < 1) return "";

    var start = 0, end = 0;
    var len1 = 0, len2 = 0, len = 0;
    
    for(var i = 0; i < length; i++){
        len1 = expandAroundCenter(str, i, i);
        len2 = expandAroundCenter(str, i, i + 1);
        len = Math.max(len1, len2);
        
        if(len > end - start){
            start = i - Math.floor((len - 1)/ 2);
            end = i + Math.floor(len / 2);
        }
    }
    return str.substring(start, end + 1);
}