const formulario = document.querySelector('#formulario-post');
const tituloPost = document.querySelector('#titulo-input');
const conteudoPost = document.querySelector('#conteudo-input');

const tituloRenderizar = document.querySelector('#renderizador-titulo');
const conteudoRenderizar = document.querySelector('#renderizador-conteudo');

formulario.addEventListener('submit', function(event) {
    
    event.preventDefault();

    const data = {
        title: tituloPost.value,
        body: conteudoPost.value, 
        userId: 1
    };

    //Fetch e API
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao processar a requisição.');
        }
        return response.json();
    })
    .then(jsonRetornado => {
        // O segundo then é onde a mágica acontece!
        console.log('Sucesso na API! Retorno:', jsonRetornado);

        tituloRenderizar.innerHTML = data.title;
        conteudoRenderizar.innerHTML = data.body;

        // Reseta Post
        formulario.reset();
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Houve um problema ao enviar o seu post.');
    });
});
