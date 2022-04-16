function solution(nums) {
    const result = []

    for (let i = 0; i < nums.length - 2; i++) {

        let start = i + 1
        let str1 = []

        for (let j = 0; j < start + 1; j++) {
            str1.push(1)
        }

        while (str1[0] !== nums.length - start + 1) {
            let index = str1.length - 1

            while (index !== -1 && str1[0] !== nums.length - start + 1) {
                if (str1[index] === nums[nums.length - 1]) {
                    str1[index] = str1[index - 1]
                    str1[index - 1] += 1
                }

                index -= 1
            }

            index = str1.length - 1
            str1[index] += 1
            // result.push(str1)
            console.log(str1)
        }
    }
    return result
}

solution([1, 2, 3, 4])



