const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

function breakingRecords() {
    let min = scores[0]
    let max = scores[0]
    let records = 0
    let foiMal = 0

    for (let i = 1; i < scores.length; i++) {
        
        if (min > scores[i]) {
            min = scores[i]
            foiMal++
            
        } else if (max < scores[i]){
            max = scores[i]
            records++
        }
    }

    // console.log(min)
    // console.log(max)
    // console.log(records, foiMal)
    return [records, foiMal]
}

breakingRecords()

//saida esperada: 2 4
//2 é número de records
// 4 vezes que foi ruim
