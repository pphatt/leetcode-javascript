/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//
// O(n^2) -> time complexity
// 104ms -> time complexity
// 42,7 MB -> space complexity
//
const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let rest = target - nums[i]
        let complete = nums.indexOf(rest, i + 1)
        if (complete !== -1) {
            return [i, complete]
        }
    }
    return [0, 0]
};

//
// O(2n) -> time complexity
// 85ms -> time complexity
// 45 MB -> space complexity
//
solution = (nums, target) => {
    let hashMap = {}

    for (let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = i
    }

    for (let i = 0; i < nums.length; i++) {
        let rest = target - nums[i]
        let found = hashMap[rest]
        if (found !== undefined && found !== i) {
            return [i, found]
        }
    }
    return [0, 0];
}

console.log(twoSum([3, 2, 4], 6))
console.log(solution([3, 2, 3], 6))
