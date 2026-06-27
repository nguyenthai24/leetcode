// Q3. Find All Numbers Disappeared in an Array
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]
var findDisappearedNumbers = function (nums) {
    // const arr = Array.from({ length: nums.length }, (_, i) => i + 1);
    // const result = arr.filter((i) => !nums.includes(i));
    // return result;
    // const sortArr = nums.sort((a, b) => a - b);
    // let j = 1;
    // let result = [];
    // console.log(nums.length);
    // if (nums.length < 3) {
    //     console.log(111);
    //     const arr = Array.from({ length: nums.length }, (_, i) => i + 1);
    //     const result = arr.filter((i) => !nums.includes(i));
    //     return result;
    // }
    // for (let i = 0; i < sortArr.length; i++) {
    //     if (nums[i] !== nums[j] && nums[j] - nums[i] > 1) {
    //         let k = nums[j] - nums[i];
    //         for (let m = 1; m < k; m++) {
    //             result.push(nums[i] + m);
    //         }
    //     }
    //     j++;
    // }
    // console.log(sortArr[sortArr.length - 1] - sortArr.length);
    // if (sortArr[sortArr.length - 1] !== sortArr.length) {
    //     const k = sortArr.length - sortArr[sortArr.length - 1];
    //     if (k) {
    //         for (let m = 1; m <= k; m++) {
    //             result.push(sortArr[sortArr.length - 1] + m);
    //         }
    //     }
    // }
    // return result;
    // const newMap = new Map();
    // const arr = Array.from({ length: nums.length }, (_, i) => i + 1);
    // newMap = arr;
    // console.log(arr);
};
console.log(findDisappearedNumbers([1, 1, 2]));

let i = 100;

while (i <= 200) {
    console.log(i);
    i += 20;
}
