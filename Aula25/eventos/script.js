var btn = document.querySelector("button")

function random(n) {
    return Math.floor(Math.random() * (n+1))
}

btn.onclick = function() {
    var rnCol = `rgb(${random(255)},${random(255)},${random(255)})`
    btn.style.backgroundColor = rnCol
}

var inputName = document.querySelector("#name")
var inputEmail = document.querySelector("#email")
var inputMessage = document.querySelector("#message")

var errorNome = document.querySelector("#errorName")
var errorEmail = document.querySelector("#errorEmail")
var errorMessage = document.querySelector("#errorMessage")

var form = document.querySelector("form")

form.onsubmit = function (e) {
    e.preventDefault()

    validarNome()
    validarEmail()
    validarMessagem()
    
    if(validarNome() && validarEmail() && validarMessagem()) {
        alert("Enviado com sucesso")
        e.target.reset()
    }

}

function validarNome() {
    if(inputName.value.trim().length < 3) {
        errorNome.classList.remove("disable")
        return false
    } else {
        errorNome.classList.add("disable")
        return true
    }
}


function validarEmail() {
    let email = inputEmail.value
    const partes = email.split('@');
    
    if (partes.length !== 2) {
        errorEmail.classList.remove("disable")
        return false
    }
    
    const nome = partes[0];
    const dominio = partes[1].split('.');
    
    if (nome.length === 0 || dominio.length < 2) {
        errorEmail.classList.remove("disable")
        return false
    }
    
    if ( dominio.every(part => part.length > 0)) {
        errorEmail.classList.add("disable")
        return true
    }
}

function validarMessagem() {
    if(inputMessage.value.trim() == 0) {
        errorMessage.classList.remove("disable")
        return false
    } else {
        errorMessage.classList.add("disable")
        return true
    }
}
