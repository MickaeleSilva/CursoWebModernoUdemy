//Se o presidente do JS fosse algo, seria a função, e o objeto seria o vice presidente!!
//Um objeto é uma estrutura de dados que armazena valores associados a chaves.
//Uma função é um bloco de código que realiza uma tarefa específica e pode ser invocada.

//função pra quebrar linha
function quebra () {
    console.log(' ')
}
////////////////////////////////////////////////////////////////////////////
console.log('Usando new pra transformar a função objeto em um objeto:') //eu vou me mataaaa
console.log(typeof Object) //objeto é uma função no js
console.log(typeof new Object()) // a palavra-chave 'new' criou um objeto usando uma função
quebra()

console.log('usando new pra transformar uma função em um objeto')
const Cliente = function() {} 
console.log(typeof Cliente)
console.log(typeof new Cliente)

//Classe





/////////////////////////////////////////////////////////////////////////
quebra()
//utilizando o objeto e a função
const pessoa = {
    nome: 'João',
    idade: 25,
    cidade: 'Exemploville',
    saudacao: function() {
      console.log(`Olá, meu nome é ${this.nome}`);
    }
  };
  pessoa.saudacao()
  console

quebra()

//testando objeto "Saudações ao Beto"

  const alunoBeto = {
    nome: 'Beto',
    idade: 12,
    ano: '7º ano',
    professor: 'Pablo Escobar'
  }
console.log('informações de Beto:', alunoBeto)

quebra()
//testando função e usando dados do objeto
function  comprimentos () {
    console.log('Olá, tudo bem,', alunoBeto.nome + '?')
}
comprimentos()
