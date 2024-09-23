function getPosts() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data
            const postList = document.querySelector("#post-list")

            postList.innerHTML = ''

            posts.forEach(post => {
                postList.innerHTML += `
                    <div class="post">
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </div>
                `
            });
        })
        .catch (error => {
            console.log(error)
        })
}

window.onload = getPosts()