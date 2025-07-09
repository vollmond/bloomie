document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica do Menu Hamburger ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const sideMenu = document.getElementById('side-menu');

    hamburgerButton.addEventListener('click', () => {
        sideMenu.classList.toggle('is-active');
    });

    // --- Conteúdo do Site ---
    const contentData = {
        // ... (os seus outros serviços como 'dep', 'massage', etc. continuam aqui) ...
        "dep": {
            title: "Depilação a Laser com Tecnologia Três Ondas",
            text: "A depilação a laser com tecnologia de três ondas...",
            images: [ "imagens/dep.jpg" ]
        },
        // ... etc ...
        "contacto": {
            title: "Fale Connosco e Encontre-nos",
            text: "Está pronto para se sentir melhor? Contacte-nos para agendar a sua avaliação ou tratamento. Estamos disponíveis para responder a todas as suas questões.",
            // Deixamos a secção de imagens vazia para o contacto
            images: [], 
            // NOVO: Adicionamos o código do mapa aqui
            mapIframe: `<<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d337.9957009252957!2d-8.222045710254251!3d37.09086603509134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1acd62ac6fa579%3A0x9c4fc9ee775b5808!2sPESTE%20RIBEIRO%20DESINFESTA%C3%87%C3%95ES!5e1!3m2!1spt-PT!2spt!4v1752068603147!5m2!1spt-PT!2spt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        }
        }
    };

    // --- Seletores e Funções ---
    const navLinks = document.querySelectorAll('.nav-link');
    const titleElement = document.querySelector('#text-container h2');
    const textElement = document.querySelector('#text-container p');
    const galleryContainer = document.getElementById('gallery-container');
    const mapContainer = document.getElementById('map-container'); // Novo seletor

    function displayContent(key) {
        const content = contentData[key];
        if (!content) return;

        titleElement.textContent = content.title;
        textElement.innerHTML = content.text;

        // Lógica para mostrar a galeria OU o mapa
        if (key === 'contacto') {
            galleryContainer.style.display = 'none'; // Esconde a galeria
            mapContainer.style.display = 'block';   // Mostra o mapa
            mapContainer.innerHTML = content.mapIframe; // Insere o mapa
        } else {
            mapContainer.style.display = 'none';      // Esconde o mapa
            galleryContainer.style.display = 'grid'; // Mostra a galeria
            galleryContainer.innerHTML = '';
            content.images.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = content.title;
                galleryContainer.appendChild(img);
            });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const key = link.dataset.key;
            displayContent(key);
            sideMenu.classList.remove('is-active');
        });
    });

    displayContent('dep');
});
