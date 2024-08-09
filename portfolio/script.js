// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links com atributo href
    const links = document.querySelectorAll('a[href]');
    // Seleciona o contêiner principal da página
    const container = document.querySelector('.container');

    // Adiciona um ouvinte de evento para cada link
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            // Previne o comportamento padrão do link (não recarrega a página imediatamente)
            event.preventDefault();
            // Obtém o URL para onde o link aponta
            const url = link.getAttribute('href');

            // Verifica se o contêiner existe antes de aplicar as animações
            if (container) {
                // Adiciona a classe de animação de fade-out ao contêiner
                container.classList.remove('fade-in'); // Remove fade-in se presente
                container.classList.add('fade-out'); // Adiciona fade-out

                // Define um atraso para a navegação para permitir que a animação complete
                setTimeout(() => {
                    // Redireciona para a nova página após a animação
                    window.location.href = url;
                }, 500); // Tempo da animação de fade-out em milissegundos
            }
        });
    });

    // Adiciona a classe de animação de fade-in ao contêiner quando a página é carregada
    if (container) {
        container.classList.add('fade-in');
    }
});
