//const prompt = require('prompt-sync')()

function positivoNegativo(a) {
    
    return a == 0 ? 
    console.log('É Nulo'): a > 0 ? 
    console.log('É Positivo') : console.log('É Negativo')
}

function maiorQue(a, b) {
    return a == b ? 
    console.log('Eles são iguais') : a > b ? 
    console.log('A é maior que B') : console.log('B é maior que A')
}

function entre1e50(a) {
    // 1.0
    //return a < 10 ? 
    //console.log('Não esta no intervalo') : a > 50 ? 
    //console.log('Não esta no intervalo') : console.log('Esta no intervalo')

    // 2.0
    return a > 10 && a < 50 ? 
    console.log('Esta no intervalo') :console.log('Não esta no intervalo')
}

function verificarNota (a) {
    return a >= 7 ?
    console.log('Aprovado') : a >= 5 && a < 7 ?
    console.log ('Recuperação') : a < 5 ? 
    console.log('Reprovado') : console.log('Nem fez a prova')
}

function comparar3num(a , b , c) {
    return a > b && a > c ?
    console.log('A é o maior') : b > a && b > c ?
    console.log('B é o maior') : c > a && c > b ?
    console.log('C é o maior') : console.log('Todos são iguais')
}

function verificarCategoria(a) {
    return a >= 0 && a <= 12 ? 
    console.log('Criança') : a >= 13 && a <= 17 ?
    console.log('Adolescente') : a >= 18 && a <= 59 ?
    console.log('Adulto') : a >= 60 ? 
    console.log('Idoso') : console.log('Nem nasceu ainda')
}

function vogalOuConsoante(a) {
    return a == 'a' || 'e' || 'i' || 'o' || 'u' ? 
    console.log('É vogal') : console.log('É consoante')
}


function main() {
    let a,b,c
    let escolha = prompt('\
        1 - Para saber se um número é positivo ou negativo \n \
        2 - Para saber maior entre 2 números \n \
        3 - Para saber se um número esta entre 1 e 50 \n \
        4 - Para a verificar a nota \n \
        5 - Para saber o maior entre 3 números \n \
        6 - Para saber a categoria de idade \n \
        7 - Para saber se é vogal ou consoante \n \
        ')
    switch (escolha) {
        case 1:
            a = prompt('Valor de A: ')
            return positivoNegativo(a)
            break;

        case 2:
            a = prompt('Valor de A: ')
            b = prompt('Valor de B: ')
            return maiorQue(a, b)
            break;

        case 3:
            a = prompt('Valor de A: ')
            return entre1e50(a)
            break;

        case 4:
            a = prompt('Valor de A: ')
            return verificarNota(a)
            break;

        case 5:
            a = prompt('Valor de A: ')
            b = prompt('Valor de B: ')
            c = prompt('Valor de C: ')
            return comparar3num(a, b, c)
            break;
            
        case 6:
            a = prompt('Valor de A: ')
            return verificarCategoria(a)
            break;
        case 7:
            a = prompt('Qual letra: ')
            return vogalOuConsoante(a)
            break;
    
        default:
            break;
    }
}
main()