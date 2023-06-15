const strings = ['aba', 'baba', 'aba', 'xzxb']
const queries = ['aba', 'xzxb', 'ab']

function matchingStrings() {
    let result = []
    queries.forEach((_, i) => result[i] = strings.filter(e => e === queries[i]).length)
    return result
}

console.log(matchingStrings())

// Output: [2, 1, 0]