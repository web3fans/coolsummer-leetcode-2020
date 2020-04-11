/*
 * @Author: your name
 * @Date: 2019-12-15 20:02:24
 * @LastEditTime : 2020-04-11 21:12:27
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/leetcode/firstMissingPositive/firstMissingPositive.js
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length;
    for(let i = 1; i <= n; i++){
        if(!nums.includes(i)){
            return i;
        }
    }
    return n + 1;
};