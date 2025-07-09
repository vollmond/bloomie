document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica do Menu Hamburger ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const sideMenu = document.getElementById('side-menu');

    hamburgerButton.addEventListener('click', () => {
        sideMenu.classList.toggle('is-active');
    });

    // --- Conteúdo do Site ---
    const contentData = {
        "dep": {
            title: "Depilação a Laser com Tecnologia Três Ondas",
            text: "A depilação a laser com tecnologia de três ondas representa o que há de mais avançado no combate aos pelos indesejados. Este método combina, numa única aplicação, três comprimentos de onda — Alexandrite, Diodo e Nd:YAG — proporcionando resultados eficazes, seguros e adaptados a todos os tipos de pele.\n\nIdeal para quem procura uma solução duradoura, este sistema atua em diferentes profundidades do folículo piloso, garantindo a eliminação progressiva dos pelos desde as primeiras sessões. Além disso, o equipamento conta com um sistema de arrefecimento que protege a pele durante todo o processo, tornando o tratamento praticamente indolor.\n\nSe procura liberdade, conforto e uma pele suave o ano inteiro, a depilação a laser de três ondas é a escolha certa.",
            images: [ "imagens/dep.jpg" ]
        },
        "massage": {
            title: "Massagens Personalizadas para o Seu Bem-Estar",
            text: "No nosso espaço, cada massagem é pensada à medida de quem a recebe. Oferecemos uma variedade de massagens com benefícios distintos:\n\n• Massagem de Relaxamento\n• Massagem Terapêutica\n• Massagem com Pedras Quentes\n• Drenagem Linfática Manual\n\nA nossa missão é proporcionar momentos de equilíbrio e cuidado, num ambiente calmo, seguro e acolhedor. Permita-se uma pausa. O seu corpo agradece.",
            images: [ "imagens/massagem1.jpg", "imagens/massagem2.jpg", "imagens/massagem3.jpg" ]
        },
        "limpeza": {
            title: "Limpeza de Pele Profunda: Cuidado que se vê e se sente",
            text: "Mais do que um ritual estético, a limpeza de pele é um tratamento essencial para manter o equilíbrio e a vitalidade da pele do rosto. O procedimento inclui higienização profunda, esfoliação, vapor de ozono para facilitar a extração de comedões (pontos negros) e aplicação de alta frequência para desinfetar e acelerar a cicatrização.\n\nCada sessão é finalizada com máscaras adaptadas, tónicos, hidratantes e proteção solar. Dê à sua pele o cuidado que ela merece.",
            images: [ "imagens/limpeza.jpg" ]
        },
        "fototerapia": {
            title: "Fototerapia – Luz que trata, regenera e transforma",
            text: "A fototerapia utiliza comprimentos de onda específicos da luz (LED) para estimular processos naturais da pele de forma não invasiva. Cada cor atua de forma distinta: a luz azul combate bactérias e controla a acne; a luz vermelha estimula o colagénio e a firmeza; a luz âmbar melhora a vitalidade. A sessão é rápida, indolor e profundamente relaxante, podendo ser feita como tratamento isolado ou associada a outros procedimentos.",
            images: ["imagens/fototerapia.jpg"] 
        },
        "hifu": {
            title: "HiFu – Lifting sem cirurgia, resultado com naturalidade",
            text: "O HiFu (Ultrassom Focalizado de Alta Intensidade) é um tratamento avançado que reafirma a pele e suaviza rugas sem cortes ou tempo de recuperação. A tecnologia atinge as camadas profundas da pele, estimulando a produção de colagénio de dentro para fora, com um efeito de lifting progressivo. É indicado para flacidez no rosto, papada, pescoço e corpo, permitindo retomar a rotina no mesmo dia.",
            images: ["imagens/hifu.jpg"] 
        },
        "gel": {
            title: "Unhas: Estilo, cuidado e personalidade",
            text: "Oferecemos um serviço completo para mãos e pés, com várias opções para quem procura elegância e durabilidade. Trabalhamos com:\n\n• Unhas em gel\n• Verniz de gel\n• Manicure clássica com cutilagem\n• Pedicure completa\n\nMais do que unhas bonitas, criamos momentos de pausa, confiança e bem-estar. Porque mãos cuidadas falam de si, sem dizer uma palavra.",
            images: ["imagens/gel.jpg"] // Corrigi o nome da imagem de exemplo
        },
        "micro": {
            title: "Microagulhamento: Renovação profunda que vem da própria pele",
            text: "O microagulhamento estimula a capacidade de regeneração que a pele já possui. Através de microperfurações controladas, ativamos a produção de colagénio, elastina e ácido hialurónico, três elementos fundamentais para uma pele firme e uniforme. Este procedimento é indicado para melhorar a textura da pele, reduzir marcas de acne, cicatrizes, poros dilatados, estrias e atenuar rugas finas.",
            images: ["imagens/micro1.jpg", "imagens/micro2.jpg"] 
        },
        "contacto": {
            title: "Fale Connosco e Encontre-nos",
            text: "Está pronto para se sentir melhor? Contacte-nos para agendar a sua avaliação ou tratamento. Estamos disponíveis para responder a todas as suas questões.",
            // Deixamos a secção de imagens vazia para o contacto
            images: [], 
            // NOVO: Adicionamos o código do mapa aqui
            mapIframe: `<<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d337.9957009252957!2d-8.222045710254251!3d37.09086603509134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1acd62ac6fa579%3A0x9c4fc9ee775b5808!2sPESTE%20RIBEIRO%20DESINFESTA%C3%87%C3%95ES!5e1!3m2!1spt-PT!2spt!4v1752068603147!5m2!1spt-PT!2spt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
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
