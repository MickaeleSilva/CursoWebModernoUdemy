// função  para ter número inteiros aleatórios
function getInteiroAleatorioEntre(min, max) { // função com dois parâmetros
    const Valor = Math.random() * (max - min) + min //Atribuindo o método Math.random() à constante 'valor'.
    return Math.floor(Valor) // a função automaticamente arredondará o valor para baixo.
}
let opcao = 0

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!')