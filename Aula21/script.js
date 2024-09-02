let aluno = {
    nome: "Matheus",
    idade: 23,
    email: "matheus@email.com",
};

// const {nome, idade, email} = aluno

// console.log(nome)
// console.log(idade)
// console.log(email)

// ou

// console.log(aluno.nome)
// console.log(aluno.idade)
// console.log(aluno.email)

const alunos = ["Pedro", "Berg", "Gisele"];

const [aluno1, aluno2, aluno3] = alunos; // Faz a alocação nas variaveis pela posição dos elementos do array


const buscarCep = async (cep= 60150161) => {
    const result = await (
        await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    ).json();
    return result
}

const handleBuscarButtonClick = async () => {
    const cep = cepId.value.replace(/-/g, '').trim()
    if (!cep) {
        try {
            endereco = await buscarCep()
            resultadoDiv.innerHTML = '<p style="color: red;">CEP não Colocado.CEP padrão colocado</p>'
            resultadoDiv.innerHTML += `<p>${JSON.stringify(endereco)}</p>`
        } finally {
            return
        }
    } else {
        try {
            endereco = await buscarCep()
            resultadoDiv.innerHTML = `
                <h2>Dados do Endereço</h2>
                <p><strong>CEP:</strong> ${endereco.cep}</p>
                <p><strong>Logradouro:</strong> ${endereco.logradouro}</p>
                <p><strong>Bairro:</strong> ${endereco.bairro}</p>
                <p><strong>Cidade:</strong> ${endereco.localidade}</p>
                <p><strong>Estado:</strong> ${endereco.uf}</p>
            `
        } finally {
            return
        }
    }
}

console.log(buscarCep())
buscaButton.addEventListener('click', handleBuscarButtonClick)