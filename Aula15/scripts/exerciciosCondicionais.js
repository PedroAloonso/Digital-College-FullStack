

function exercicio1(a, b, c) {
    return a + b < c ? 
        alert('A + B é menor que C') : 
        a + b == c ?
            alert('A + B é igual a C') :
            alert('A + B é maior que C')
}

function exercicio2(b, c) {
    let d
    return b == 'F' && c == 'CASADA' ?
        d = prompt('Tempo de casada: ') :
        ''
}

function exercicio3(a) {
    return !(a % 2) ? 
        alert('É Par') :
        alert('É Impar')
}

function exercicio4(a, b) {
    a == b ?
        c = a + b :
        c = a * b
    return alert(c)
}

function exercicio5(a) {
    return a > 0 ? 
        alert(a*2) :
        a < 0 ?
        alert(a*3) :
        alert('É igual a 0')
}

function exercicio6(a, b) {
    return a == true && b == true ?
        alert('Ambos são verdadeiros') :
        a == false && b == false ?
            alert('Ambos são falsos') :
            alert('Um é verdadeiro e outro falso')
}

function exercicio7(a) {
    return !(a % 2) ? 
        alert(`Era par, somando com 5 da: ${a+5}`) :
        alert(`Era impart, somando com 8 da: ${a+8}`)
}

function exercicio8(a, b , c) {
    let arrayDecrescente = Array(a, b, c).sort().reverse()
    return alert(`Em ordem decrescente ${arrayDecrescente}`)
}

function exercicio9(a, b) {
    return b == 'H' ?
        alert(`Peso ideal: ${(72.7 * a) - 58}`) :
        b == 'M' ?
        alert(`Peso ideal: ${(62.1 * a) - 44.7}`) :
        alert('Valor incorreto')
}

function exercicio10(a, b) {
    let imc = a / b ** 2
    alert(`IMC de ${imc}`)
    return imc < 18.5 ?
        alert('Abaixo do peso') :
        imc >= 18.5 && imc <= 25 ? 
            alert('Peso normal') :
            imc >= 25 && imc <= 30 ?
                alert('Acima do peso') :
                alert('Obeso')
}




function mainCondicionais() {
    let a,b,c
    let escolha = +prompt('\
        1 - Verificação da Soma de A e B \n \
        2 - Solicitação de Tempo de Casada \n \
        3 - Verificação de Número Par ou Ímpar \n \
        4 - Operação com Valores Iguais ou Diferentes \n \
        5 - Dobro ou Triplo de um Número \n \
        6 - Verificação de Valores Booleanos \n \
        7 - Soma Condicional \n \
        8 - Ordenação de Três Valores \n \
        9 - Cálculo do Peso Ideal \n \
        10 - Cálculo do IMC \n \
        ')
    switch (escolha) {
        case 1:
            a = prompt('Valor de A: ')
            b = prompt('Valor de B: ')
            c = prompt('Valor de C: ')
            return exercicio1(a, b, c)
            break;
        case 2:
            a = prompt('Nome: ')
            b = prompt('Sexo |M ou F|: ')
            c = prompt('Estado civil |Solteira Namorando Casada|: ').toUpperCase()
            return exercicio2(a, b, c)
            break;

        case 3:
            a = prompt('Valor de A: ')
            return exercicio3(a)
            break;

        case 4:
            a = prompt('Valor de A: ')
            b = prompt('Valor de B: ')
            return exercicio4(a, b)
            break;

        case 5:
            a = prompt('Valor de A: ')
            return exercicio5(a)
            break;

        case 6:
            a = prompt('Valor de A |0 ou 1|: ')
            b = prompt('Valor de B |0 ou 1|: ')
            return exercicio6(a, b)
            break;

        case 7:
            a = prompt('Valor de A: ')
            return exercicio7(a)
            break;

        case 8:
            a = prompt('Valor de A: ')
            b = prompt('Valor de B: ')
            c = prompt('Valor de C: ')
            return exercicio8(a, b, c)
            break;

        case 9:
            a = prompt('Sua altura: ')
            b = prompt('Seu sexo |M ou F|: ')
            return exercicio9(a, b)
            break;

        case 10:
            a = prompt('Seu peso: ')
            b = prompt('Sua altura em mentro: ')
            return exercicio10(a, b)
            break;

    
        default:
            break;
    }
}
mainCondicionaisn()