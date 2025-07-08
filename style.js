document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica do Menu Hamburger ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const sideMenu = document.getElementById('side-menu');

    hamburgerButton.addEventListener('click', () => {
        sideMenu.classList.toggle('is-active');
    });

    // --- Lógica do Conteúdo Dinâmico ---

    // 1. O nosso "dicionário" de conteúdo (por enquanto, com exemplos)
    const contentData = {
        "servicoA": {
            title: "Serviço Fantástico A",
            text: "A descrição completa do nosso serviço A, que é o melhor no que faz.",
            images: [ "images/servico-a-1.jpg", "images/servico-a-2.jpg" ]
        },
        "servicoB": {
            title: "Serviço Incrível B",
            text: "O Serviço B resolve todos os seus problemas de forma eficiente e rápida.",
            images: [ "images/servico-b-1.jpg", "images/servico-b-2.jpg", "images/servico-b-3.jpg" ]
        },
        // Adicionar "sobre" e "contacto" aqui
    };

    // 2. Seletores para as áreas de conteúdo
    const navLinks = document.querySelectorAll('.nav-link');
    const titleElement = document.querySelector('#text-container h2');
    const textElement = document.querySelector('#text-container p');
    const galleryContainer = document.getElementById('gallery-container');

    // 3. Função para mostrar o conteúdo
    function displayContent(key) {
        const content = contentData[key];
        if (!content) return; // Se a chave não existir, não faz nada

        // Atualiza o texto
        titleElement.textContent = content.title;
        textElement.textContent = content.text;

        // Limpa a galeria antiga e cria as novas imagens
        galleryContainer.innerHTML = ''; // Limpa!
        content.images.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = content.title; // Boa prática
            galleryContainer.appendChild(img);
        });
    }

    // 4. Adiciona o "ouvinte" de clique a cada link da navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const key = link.dataset.key;
            displayContent(key);
            sideMenu.classList.remove('is-active'); // Fecha o menu após o clique
        });
    });

    // 5. Mostra o conteúdo inicial ao carregar a página
    displayContent('servicoA');
});
