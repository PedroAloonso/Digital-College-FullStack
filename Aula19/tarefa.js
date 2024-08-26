const states = [
    {"code": "AC", "name": "Acre"},
    {"code": "AL", "name": "Alagoas"},
    {"code": "AP", "name": "Amapá"},
    {"code": "AM", "name": "Amazonas"},
    {"code": "BA", "name": "Bahia"},
    {"code": "CE", "name": "Ceará"},
    {"code": "DF", "name": "Distrito Federal"},
    {"code": "ES", "name": "Espírito Santo"},
    {"code": "GO", "name": "Goiás"},
    {"code": "MA", "name": "Maranhão"},
    {"code": "MT", "name": "Mato Grosso"},
    {"code": "MS", "name": "Mato Grosso do Sul"},
    {"code": "MG", "name": "Minas Gerais"},
    {"code": "PA", "name": "Pará"},
    {"code": "PB", "name": "Paraíba"},
    {"code": "PR", "name": "Paraná"},
    {"code": "PE", "name": "Pernambuco"},
    {"code": "PI", "name": "Piauí"},
    {"code": "RJ", "name": "Rio de Janeiro"},
    {"code": "RN", "name": "Rio Grande do Norte"},
    {"code": "RS", "name": "Rio Grande do Sul"},
    {"code": "RO", "name": "Rondônia"},
    {"code": "RR", "name": "Roraima"},
    {"code": "SC", "name": "Santa Catarina"},
    {"code": "SP", "name": "São Paulo"},
    {"code": "SE", "name": "Sergipe"},
    {"code": "TO", "name": "Tocantins"}
]

function criarEAddEstados() {
    states.forEach((estado) => {
        const estadoOption = document.createElement("option");
        var estadoNome = document.createTextNode(
            `${estado.code} - ${estado.name}`
        );
        estadoOption.appendChild(estadoNome);
        estadoOption.value = estado.code
        if (estado.code == "CE") {
            estadoOption.selected = true
        }
        estadoOption.addEventListener("click", (e) => {
            buscarCidadesCE(e.target.value)
            //console.log(stateCode)
        })
        estadosSelect.appendChild(estadoOption);
    })
}

function criarEAddElemento(cidade) {
    const cidadeOption = document.createElement("option");
    var cidadeNome = document.createTextNode(cidade.nome);
    cidadeOption.appendChild(cidadeNome);
    
    cidadesSelect.appendChild(cidadeOption);
}

async function buscarCidadesCE(stateCode = "CE") {
    cidadesSelect.innerHTML = ""
    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateCode.toLocaleLowerCase()}/municipios`;
    console.log(stateCode)
    console.log(url)
    try {
        const resposta = await fetch(url);
        const json = await resposta.json();

        json.forEach(criarEAddElemento);
    } catch (error) {
        alert("não foi possivel carregar as cidades");
        console.log(error);
    }
}

// estadosSelect.addEventListener("select", console.log("asdasd"));

criarEAddEstados()
buscarCidadesCE()