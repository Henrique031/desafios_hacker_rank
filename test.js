let arr = [1, 3, 6, 2, 7, 0, 4]

function findMedian(arr) {
    let arrOrdenado = arr.sort()
    return Math.floor(arrOrdenado.length / 2)

}

console.log(findMedian(arr))