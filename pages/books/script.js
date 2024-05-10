document.addEventListener('DOMContentLoaded', function () {
    fetch('livraria-afiliado/pages/books/db.json')
        .then(response => response.json())
        .then(data => montarView(data.livros))
        .catch(error => console.log(error))
});
function montarView(data) {
    const container = document.getElementById('container');
    console.log(data)
    data.forEach(data => {
        const a = document.createElement('a');
        a.href = data.link;
        a.setAttribute('target', '_blank');
        a.classList.add('card-book');
        a.innerHTML = `
        <div class="card-head">
        <img src="${data.imgCapa}">
        </div>
        <span class="title">${data.titulo}</span>
        <span class="author">${data.autores.autor1}</span>
        <span class="price">R$${data.preco}</span>`
        container.appendChild(a)
    })
}