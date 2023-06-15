// const n = 50
const n = '1'
// const n = '2147483647'

function flippingBits() {
    let resultDiv = n / 2
    let bin = [n % 2]

    let i = 0
    do {
        bin[i + 1] = Math.floor(resultDiv % 2)
        resultDiv = Math.floor(resultDiv / 2)
        i++
    } while (resultDiv / 2 != 0);

    bin.reverse()

    let zeroEsquerda = []
    for (let i = bin.length; i >= 0; i -= 4) {
        zeroEsquerda.push(bin.slice((i - 4) <= 0 ? 0 : i - 4, i));
    }

    for (let i = 0; i < zeroEsquerda.length; i++) {
        if (zeroEsquerda[i].length != 4) {
            let zeros = new Array(4 - zeroEsquerda[i].length).fill(0);
            zeroEsquerda[i] = zeroEsquerda[i].concat(zeros).reverse();
        }
    }
    let binStr = zeroEsquerda.reverse().join('').replace(/,/g, '')
    let result = ''
    for (let i = 0; i < binStr.length; i++) {
        if (binStr[i] == '0') {
            result += '1'
        } else if (binStr[i] === '1') {
            result += '0'
        }
    }
    result = parseInt(result, 2)

    return result

}

console.log(flippingBits())