/*
 * @Author: your name
 * @Date: 2020-04-14 00:36:37
 * @LastEditTime: 2020-04-14 00:41:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/leetcode/sumNums/sumNums.js
 */
var sumNums = function(n){
    return n > 0 && (n + sumNums(n - 1))
}