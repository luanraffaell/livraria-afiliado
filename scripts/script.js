document.querySelectorAll('.menu-indice').forEach(link => {
    link.onclick = function (e) {
        e.preventDefault();

        const conteudo = document.getElementById('container')
        fetch(link.href)
            .then(response => response.text())
            .then(html => {
                conteudo.innerHTML = html;
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth' // Rola suavemente
                });
                // Cria um novo elemento script para cada script na página carregada
                const scripts = conteudo.querySelectorAll('script');
                scripts.forEach(script => {
                    const novoScript = document.createElement('script');
                    novoScript.innerHTML = script.innerHTML;
                    conteudo.appendChild(novoScript);
                });
                const botao = conteudo.querySelector('#carregar-livros');
                if(botao){
                    botao.click()
                }
            })
    }
})
