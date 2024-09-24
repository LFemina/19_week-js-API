const container = document.getElementById('container');

        function getAPI() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then((posts) => {
                    posts.forEach(post => {
                        const title = document.createElement('h2');
                        title.className = 'title_post';
                        const paragraph = document.createElement('p');
                        container.appendChild(title);
                        container.appendChild(paragraph);

                        title.innerText = `Title: ${post.title}`;
                        paragraph.innerText = `Comments: ${post.body}`;
                    })
                })
                .catch((err) => {
                    paragraph.textContent = 'Ошибка. Запрос не выполнен.';
                    console.log(paragraph);
                })
        }
        getAPI();