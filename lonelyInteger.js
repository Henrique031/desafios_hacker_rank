const a = [1,2,3,4,3,2,1]
// const a = [15, 60, 74, 1, 94, 93, 28, 48, 70, 98, 45, 94, 42, 45, 48, 1, 72, 9, 24, 93, 41, 70, 60, 28, 11, 20, 72, 35 ,11, 98, 31, 74, 31, 41, 9, 42, 20, 35, 24]

function lonelyInteger() {
    let result = 0
    a.forEach((e) => {
        result ^= e
    })
    
    return result
        
}

console.log(lonelyInteger())