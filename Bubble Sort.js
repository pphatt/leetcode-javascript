/**
 * @param {Object} nums
 * @return {Object}
 */

function solution(nums) {
    let isOrdered
    for (let i = 0; i < nums.length; i++) {
        isOrdered = true
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
                isOrdered = false
            }
            // console.log(nums)
        }
        if (isOrdered) break;
    }
    return nums
}

function solution1(nums) {
    let mark = true

    while(mark) {
        mark = false
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] > nums[i + 1]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
                mark = true
            }
        }
    }
    return nums
}

console.log(solution1([9, 10, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(solution([9, 10, 8, 7, 6, 5, 4, 3, 2, 1]))
