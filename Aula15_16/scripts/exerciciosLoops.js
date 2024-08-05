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


function mainLoops() {
    let escolha
}