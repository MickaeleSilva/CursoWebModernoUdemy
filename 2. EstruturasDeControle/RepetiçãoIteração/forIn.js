const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (i in notas) {
    console.log(i, notas [i])
}

const pessoa = {
    nome: 'Mickaele',
    sobrenome:'Silva',
    idade: 21,
    peso: 64
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log(atributo) //o último atributo acessado foi peso