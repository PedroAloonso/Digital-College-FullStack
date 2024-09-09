import { fetchUsers } from "./promise.js";
import { somarDoisValores } from "./util.js";

btnSomar.onclick = (() => resultado.innerText = somarDoisValores())
loadUsersBtn.onclick = (() => colocarUsers())

const colocarUsers = () => fetchUsers()
    .then(users => {
        usersDiv.innerHTML = ''
        console.log(users);
        users.forEach(user => criarUserCard(user))})
    .catch(error => console.error('Error:', error))



function criarUserCard(user) {
    usersDiv.innerHTML += `<div class= 'userCard'>
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Telefone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> <a href="http://${user.website}">${user.website}</a></p>
        <p><strong>Empresa:</strong> ${user.company.name}</p>
    </div>`
}