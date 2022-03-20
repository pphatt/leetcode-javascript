/**
 * @param {string} letter // @param letter: string
 * @return {Object}
 */

function solution(letter) {
    let result = {};

    for (let char of letter) {
        if(result[char]) {
            result[char] += 1
        } else {
            result[char] = 1
        }
    }

    // console.log(typeof result)
    return result
}

console.log(solution("american"))
console.log(solution("mississippi"))