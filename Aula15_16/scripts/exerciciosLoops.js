function exercicioLoops1() {
    return Array.from({length: 10}).map((a, index) => index+1)
}

function exercicioLoops2() {
    return Array.from({length: 10}).map((a, index) => 10-index)
}

function exercicioLoops3() {
    return Array.from({length: 20 + 1}).map((a, index) => !(index % 2) ? index : '').filter(e => e !== '')
}

function exercicioLoops4() {
    // Forma 1
    // return Array.from({ length: 20 }, (_, index) => index % 2 ? index : '').filter(e => e !== '')

    return Array.from({length: 20}).map((a, index) => index % 2 ? index : '').filter(e => e !== '')
}

function exercicioLoops5() {
    return Array.from({length: 100}).map((a, index) => index+1).reduce((total, elemento) => total + elemento,0 )
}

function exercicioLoops6(n) {
    return Array.from({length: n}).map((a, index) => index+1).reduce((total, elemento) => total * elemento,1 )
}

function exercicioLoops7() {
    return Array.from({length: 30}).map((a, index) => index+1).forEach(e => console.log(e))
}

function exercicioLoops8(n) {
    return Array.from(n).reduce((nVogais, letra) => ['a' ,'e' ,'i' ,'o' ,'u', 'A', 'E', 'I', 'O', 'U'].includes(letra) ? ++nVogais : nVogais, 0)
}

function exercicioLoops9(s) {
    return s.split('').reverse().join('')
}

function exercicioLoops10() {
    let array = Array.from({ length: Math.floor(Math.random() * 50) })
        .map((e) => Math.floor(Math.random() * 100))
        .filter((e) => e !== "");
    console.log(`Array: ${array}`)
    return console.log(
        `Maior elemento do array: ${array.reduce((maior, elemento) =>
            maior < elemento ? (maior = elemento) : maior
        )}`
    );
}


function mainLoops() {
    let escolha
}