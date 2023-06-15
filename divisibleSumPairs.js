let ar = [34, 38, 30, 27, 1, 81, 37, 19, 74, 73, 32, 13, 44, 99, 7, 88, 50, 52, 32, 82, 29, 1, 55, 85, 89, 58, 35, 19, 76, 55, 45, 37, 41, 74, 80, 46, 38, 74, 56, 18, 86, 23, 57, 27, 52, 9, 69, 78, 52, 8, 62, 85, 65, 2, 11, 70, 34, 26, 72, 11, 20, 32, 9, 75, 74, 85, 29, 6, 87, 81, 40, 11, 31, 49, 66, 91, 99, 85, 18, 54, 81, 93, 52, 9, 72, 89, 85, 66, 24, 11, 85, 3, 14, 36, 72, 3, 76, 99, 88, 8]
let k = 22 
let n = 100

function divisibleSumPairs() {
    let pares = 0
    for (let j = 0; j <= n; j++) {
        for (let i = j + 1; i < n; i++) {
            if ((ar[j] + ar[i]) % k === 0) {
                pares++
            } 
        }
    }
    return pares
}

console.log(divisibleSumPairs())