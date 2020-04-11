
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length;
    nums = nums.sort((a, b) => a - b)
    let binarySearch = (val) => {
        let left = 0;
        let right = n - 1;
        while(left <= right){
            let mid = (left + right) >> 1;
            if(nums[mid] == val){
                return mid;
            }else if(nums[mid] < val){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
        return -1;
    }
    for(let i = 1;i <= n; i++){
        if(binarySearch(i) == -1){
            return i;
        }
    }
    return n + 1;
};
