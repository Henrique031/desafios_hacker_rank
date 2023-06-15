let arr = [-4, 3, -9, 0, 4, 1]
function plusMinus(arr) {
    let numNegativ = 0
    let numPositv = 0
    let numZero = 0
    let tamArray = arr.length
    // Write your code here
    arr.forEach(e => {
        if (e < 0) {
            numNegativ++
        } else if (e > 0) {
            numPositv++
        } else {
            numZero++
        }
    })

    numPositv = (numPositv / tamArray).toFixed(tamArray)
    numNegativ = (numNegativ / tamArray).toFixed(tamArray)
    numZero = (numZero / tamArray).toFixed(tamArray)

    console.log(numPositv)
    console.log(numNegativ)
    console.log(numZero)
}
plusMinus(arr)