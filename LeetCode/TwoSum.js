/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 * Constraints:
 * 2 <= nums.length <= 104
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
 * Only one valid answer exists.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    // Create a map to store each number and its index.
    const numMap = new Map();

    // Iterate through the array.
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        // Check if the complement exists in the map.
        if (numMap.has(complement)) {
            // If found, return the indices of the current number and its complement.
            return [numMap.get(complement), i];
        }
        // Otherwise, add the current number and its index to the map.
        numMap.set(nums[i], i);
    }
    //The problem statement says there will be exactly one solution,
    //so in theory, we should not reach here. But if no solution exists,
    //we return an empty array.
    return [];
};

let result = twoSum([5,2,4,7], 9);

console.log(`Result >>> `, result)

const nums1 = [2, 7, 11, 15];
const target1 = 9;
const result1 = twoSum(nums1, target1);  // Output: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
const result2 = twoSum(nums2, target2);  // Output: [1, 2]

const nums3 = [3, 3];
const target3 = 6;
const result3 = twoSum(nums3, target3); // Output: [0, 1]

console.log(result1);
console.log(result2);
console.log(result3);