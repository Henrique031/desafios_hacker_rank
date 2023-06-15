const input = 'S;V;iPad\r\nC;M;white sheet of paper\r\nC;C;code swarm\r\nS;C;OrangeHighlighter\r\nC;V;mobile phone casa\r\nS;M;sweatTea()'

const camel = (atual) => {
   let respValor = atual.slice(4, atual.length)

   if (atual[0] === "S")  {
      respValor = respValor.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().replace(/\W/g, ' ')
   } else if(atual[0] === 'C') {
      if (atual[2] === 'C') respValor = respValor.charAt(0).toUpperCase() + respValor.substring(1).replace(/\s./g, (letra) => letra.toUpperCase()).replace(/\s/g, '')
      if (atual[2] === 'V') respValor = respValor.replace(/\s./g, (letra) => letra.toUpperCase()).replace(/\s/g, "")
      if (atual[2] === 'M') respValor = respValor.replace(/\s./g, (letra) => letra.toUpperCase()).replace(/\s/g, "") + '()'
   }
   return respValor
}

function processData(input) {
   const modEValor = input.split(/[\r\n]+/)
   // console.log(modEValor)
   for (let i = 0; i < modEValor.length; i++) { 
      console.log(camel(modEValor[i]))
   }
} 

processData(input)