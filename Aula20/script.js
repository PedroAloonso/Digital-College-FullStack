var brinquedos = ['bola', 'bambole', 'boneco', 'carrinho de controle remoto', 'pião']

// brinquedos.forEach((element,index) => console.log(element, index))

// console.log(brinquedos.indexOf('bola')) // posição de bola

// brinquedos.push('amoeba') // adicionando amoeba no fim do array
// console.log(brinquedos) // mostrando a amoeba nos brinquedo

// brinquedos.unshift('casinha') // adicionando casinha no inicio do array
// console.log(brinquedos) // mostrando a casinha nos brinquedo

// brinquedos.shift() // removendo o primeiro elemento
// console.log(brinquedos)

// brinquedos.pop() // removendo o ultimo elemento
// console.log(brinquedos)


// callback

// function executarPasso1(nome , outrafuncao) {
//     var acao = "Buscar café ->" + nome
//     outrafuncao(acao)

// }
// function executarPasso2(acao) {
//     console.log(acao)
//     console.log("Fazer ligação enquanto toma café")
// }
// executarPasso1('Pedro', executarPasso2)


// Função anônima

function executarPasso1(nome , outrafuncao) {
    var acao = "Buscar café ->" + nome
    outrafuncao(acao)
}

// executarPasso1('Pedro', (acao) => {
//     console.log(acao)
//     console.log("Fazer ligação enquanto toma café")
// })


function verificaServidor() {
    console.log('Verificando servidor...')
}

setTimeout(() => {
    console.log('Verificando o servidor...')
}, 5000)

setInterval(() => {
    console.log('Estou usando a função setInterval')
}, 3000)