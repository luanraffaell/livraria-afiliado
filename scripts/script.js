
document.querySelectorAll('.menu-indice').forEach(link =>{
    link.onclick = function(e){
        e.preventDefault();

        const conteudo = document.getElementById('container')
        fetch(link.href)
            .then(response => response.text())
            .then(html => conteudo.innerHTML = html)
    }
})