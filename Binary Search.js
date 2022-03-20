/**
 * @param {Object} nums
 * @param {number} target
 * // @return {number}
 *
 * // option
 * @return {Object}
 * // option
 */

function solution(nums, target) {
    let midpoint = 0, left = 0, right = nums.length - 1, mark = false

    while (left < right) {
        midpoint = (right - left) / 2
        let midpoint_value = nums[Math.round(midpoint)]

        if (midpoint_value === target) {
            // return target

            // option
            mark = true
            break
            // option

        } else if (midpoint_value > target) {
            right -= 1
        } else if (midpoint_value < target) {
            left += 1
        }
    }

    // option
    if (mark) {
        for (let i in nums) {
            if (nums[i] === target) {
                return {"index": parseInt(i), "values": target}
            }
        }
    }
    // option

    return -1
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
