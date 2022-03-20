/**
 * @param {Object} nums
 * @param {number} target
 * @return {Object}
 */

function solution(nums, target) {
    for(let i in nums) {
        if(nums[i] === target) {
            // pretty print............
            return {"index": parseInt(i), values: nums[i]}
        }
    }
    return -1
}

console.log(solution([1,2,3,4,5,6,7,8,9,10], 2))
