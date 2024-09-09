export function fetchUsers() {
    return new Promise((res, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                if (!res.ok) reject('Erro ao obter os dados da API') // Rejeitar a promise se houver erro
                return res.json() // Converter a resposta para JSON
            })
            .then(data => res(data)) // Resolver a promise com os dados
            .catch(error => reject(error))  // Rejeitar a promise em caso de erro 
    }) 
}

