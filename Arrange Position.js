/**
 * @param nums {string}
 * @return number
 */
console.time("TIme")

function solution(nums) {
    let split_nums = nums.split("")

    split_nums.sort()

    let result = 0
    let mark = "C"

    let index1 = split_nums.indexOf("C")
    split_nums.splice(index1, 1)

    let index2 = split_nums.indexOf("D")
    split_nums.splice(index2, 1)

    if (mark === "C") {
        split_nums.splice(0, 0, "C")

        for (let i = 2; i < split_nums.length + 1; i++) {
            split_nums.splice(i, 0, "D")
            result++
            split_nums.splice(i, 1)

        }

        mark = "D"
        split_nums.splice(0, 1)
    }

    if (mark === "D") {
        split_nums.splice(0, 0, "D")

        for (let i = 2; i < split_nums.length + 1; i++) {
            split_nums.splice(i, 0, "C")
            result++
            split_nums.splice(i, 1)

        }

        split_nums.splice(0, 1)
    }

    // split_nums.splice(0, 0, "C")

    return result

}

console.timeEnd("TIme")
console.log(solution("ABCDEFGHIJKLMNOPQRSTUVWXYZ"))

