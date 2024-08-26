var brinquedos = ['bola', 'bambole', 'boneco', 'carrinho de controle remoto', 'pião']

brinquedos.forEach((element,index) => console.log(element, index))

console.log(brinquedos.indexOf('bola')) // posição de bola

brinquedos.push('amoeba') // adicionando amoeba no fim do array
console.log(brinquedos) // mostrando a amoeba nos brinquedo

brinquedos.unshift('casinha') // adicionando casinha no inicio do array
console.log(brinquedos) // mostrando a casinha nos brinquedo

brinquedos.shift() // removendo o primeiro elemento
console.log(brinquedos)

brinquedos.pop() // removendo o ultimo elemento
console.log(brinquedos)


