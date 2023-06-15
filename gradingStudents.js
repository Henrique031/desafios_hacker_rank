const grades =
    [     27
        , 89
        , 56
        , 47
        , 38
        , 12
        , 98
        , 72
        , 85
        , 76
        , 72
        , 56
        , 23
        , 77
        , 25
        , 49
        , 4
        , 52
        , 71
        , 43
        , 11
        , 2
        , 44
        , 10
        , 20
        , 3
        , 90
        , 64
        , 48
        , 31
        , 56
        , 51
        , 70
        , 91
        , 14
        , 25
        , 61
        , 41
        , 0]
// const grades = [43, 37, 38, 33]
// const grades = [73, 67, 38, 33 ]


function arredondar(nota) {
    if (nota <= 37) return nota
    else if (nota % 5 === 4) return nota + (nota % 5) - 3
    else if (nota % 5 >= 3) return nota + (nota % 5) - 1
    else return nota
}

function gradingStudents(grades) {
    let result = []
    for (let i = 0; i < grades.length; i++) {
        result[i] = arredondar(grades[i])
    }
    return result
}

console.log(gradingStudents(grades))