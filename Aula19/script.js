
CatAPI = "https://api.thecatapi.com/v1/images/search"
async function fetchCatImage() {
    try {
        response = await fetch(CatAPI)
        data = await response.json()
        Cats.src = data[0].url
    } catch (err) {
        console.log(err)
    }
    
}
fetchCatImage()


function pegarValor() {
    return myInput.value
}

const createButton = (text, callback) => {
    const button = document.createElement("span")
    button.textContent = text
    button.addEventListener("click", callback)
    return button
}

function criarElementoLI(texto) {
    const liElemento = document.createElement("li")
    liElemento.textContent = texto

    const checkButton = createButton("✔", () => liElemento.classList.toggle("check"))
    liElemento.appendChild(checkButton)
    

    return liElemento
}

function limparInput() {
    myInput.value = ""
}

function novoItem() {
    const valorInput = pegarValor() 
    
    if (valorInput.trim() !== "") {
        const liElemento = criarElementoLI(valorInput)
        myUL.appendChild(liElemento)
        limparInput()
    } else {
        alert("Digite um valor antes de adicionar á lista. ")
    }
}

function removePrimeiroItem() {
    const ulChilds = myUL.children
    if (ulChilds.length > 0) {
        myUL.removeChild(ulChilds[0])
    } else {
        alert("Não tem oque retirar")
    }
    
}