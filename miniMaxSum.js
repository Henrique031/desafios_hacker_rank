let arr = [1, 2, 3, 4, 5]

function miniMaxSum(arr) {

    arr = arr.sort()
    console.log(arr)

    let valorMin = 0
    let valorMax = 0
    let tamArray = arr.length

    for(let i = 1; i < tamArray; i++) {
        valorMin += arr[i - 1]
        valorMax += arr[i]
    }

    console.log(valorMin, valorMax)
}

miniMaxSum(arr)