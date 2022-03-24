/**
 *
 * @param height {number}
 * @param go {number}
 * @param back {number}
 */
console.time("UpDown")
// let starttime = performance.now()

UpDown: function solution2(height, go, back) {
    for (let i = 2; i < (10 ** 9); i++) {
        // results.push((go * i) - (back * (i - 1)))
        if ((go * i) - (back * (i - 1)) >= height) {
            return i
        }
    }
}

// let endtime = performance.now()

console.log(solution2(6, 2, 1))
// console.log(`${endtime - starttime}`)
console.timeEnd("UpDown")