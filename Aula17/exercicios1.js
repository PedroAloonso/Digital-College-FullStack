function verificaIdade() {
    let valor = +valor.value
    let valor2 = +valor2.vlaue
    alert(valor + valor2)
}

function gere100Impares() {
    return Array.from({length:100}).map((value,index) => !(index % 2) ? '' : index).filter(e => e !== '')
}
gere100Impares()