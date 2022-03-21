/**
 * @param {Object} nums
 * @return {Object}
 */

function solution(nums) {
    if(nums.length < 2) return nums;

    let pivot = nums[nums.length - 1]

    let left = []
    let right = []

    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] < pivot) {
            left.push(nums[i])
        } else if (nums[i] > pivot) {
            right.push((nums[i]))
        }
    }

    return [...solution(left), pivot, ...solution(right)]
}

console.log(solution([9, 10, 8, 1, 6, 5, 4, 3, 2, 7]))


