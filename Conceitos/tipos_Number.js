//Number = Numérico
const peso1 = 1.0
const peso2 = Number('2.2') //Number aqui  é uma função embutida do JavaScript usada para converter valores para números.


console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //O método Number.isInteger() Verifica se o valor de peso1 é um número inteiro 
console.log(Number.isInteger(peso2)) //O método Number.isInteger() Verifica se o valor de peso1 é um número inteiro 

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) //função de number que limita o número de casas decimais para o número escolhido, que nesse caso é 2.
console.log(media.toString())
console.log(media.toString(2)) //o valor dois na função toString tranforma o valor em binário
console.log(typeof media)