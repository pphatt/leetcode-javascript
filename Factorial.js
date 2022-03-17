/**
 * @param {number} num
 * @return {number}
 */
//
// Type hint in Python
// num: Integer
//
function solution(num) {
    let result = 1
    while (num > 1) {
        result *= num
        num -= 1
    }
    return result
}

console.log(solution(4))

function solution1(num) {
    let result = 1
    for (let i = 2; i <= num; i++) {
        result *= i
    }
    return result
}

console.log(solution1(4))
