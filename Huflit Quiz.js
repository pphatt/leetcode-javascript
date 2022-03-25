// /**
//  * @param nums {Object}
//  * @return Object
//  */

function solution(nums) {
    let result = []
    let details = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length + 1; j++) {
            let new_nums = nums.slice(i, j)
            result.push([`${new_nums.join(' + ')} = ${new_nums.reduce((previousValue, currentValue) => previousValue + currentValue)}`])
            details.push(new_nums.reduce((previousValue, currentValue) => previousValue + currentValue))
        }
    }
    console.log(result)
    console.log(details.sort((a,b) => a-b))
    // return result
    // return details
}

solution([1, 2, 3, 4, 5])



