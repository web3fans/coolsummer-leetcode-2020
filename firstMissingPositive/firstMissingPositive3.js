
/**
 * @param {number[]} nums
 * @return: {number}
 */
var firstMissingPositive = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] != i + 1) {
            if (nums[i] < 0 || nums[i] > nums.length || nums[i] == nums[nums[i] - 1]) break;
            var idx = nums[i] - 1;
            nums[i] = nums[idx];
            nums[idx] = idx + 1;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != (i + 1)) {
            return (i + 1)
        }
    }
    return (nums.length + 1);
};