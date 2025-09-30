document.addEventListener('DOMContentLoaded', () => {

    // --- PARTE 1: LÓGICA DO MENU HAMBURGER (Funciona como antes) ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const sideMenu = document.getElementById('side-menu');

    hamburgerButton.addEventListener('click', () => {
        sideMenu.classList.toggle('is-active');
    });

    // --- PARTE 2: BASE DE DADOS DE CONTEÚDO (O seu texto completo) ---
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
            images: ["imagens/gel.jpg"]
        },
        "micro": {
            title: "Microagulhamento: Renovação profunda que vem da própria pele",
            text: "O microagulhamento estimula a capacidade de regeneração que a pele já possui. Através de microperfurações controladas, ativamos a produção de colagénio, elastina e ácido hialurónico, três elementos fundamentais para uma pele firme e uniforme. Este procedimento é indicado para melhorar a textura da pele, reduzir marcas de acne, cicatrizes, poros dilatados, estrias e atenuar rugas finas.",
            images: ["imagens/micro1.jpg", "imagens/micro2.jpg"] 
        },
        "contacto": {
            title: "Fale Connosco e Encontre-nos",
            text: "Está pronto para se sentir melhor? Contacte-nos para agendar a sua avaliação ou tratamento através do nosso email:<br><br><a href='mailto:contacto@bloomestetica.pt' class='email-link'>contacto@bloomestetica.pt</a><br><br><a href='https://wa.me/351920743163' target='_blank' class='whatsapp-link'>💬 Falar no WhatsApp</a>",
            images:[],
            mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.56885351835!2d-8.22744868470248!3d37.09315897988891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b291583569c7b%3A0x6b758b7e2d93e2b2!2sEdif%C3%ADcio%20Ondas%20do%20Mar!5e0!3m2!1spt-PT!2spt!4v1665411786523!5m2!1spt-PT!2spt" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        }
    };

    // --- PARTE 3: LÓGICA DE EXIBIÇÃO (Atualizada para a nova estrutura HTML) ---
    
    // Seleciona os contentores corretos
    const navLinks = document.querySelectorAll('.nav-link');
    const welcomeContainer = document.getElementById('text-container');
    const serviceContainer = document.getElementById('service-details-container');
    const galleryContainer = document.getElementById('gallery-container');
    const mapContainer = document.getElementById('map-container');

    // Função principal que mostra o conteúdo
    function displayContent(key) {
        const content = contentData[key];
        if (!content) return; // Se a chave não existir, não faz nada

        // PASSO 1: Esconde a mensagem de boas-vindas
        welcomeContainer.style.display = 'none';
        
        // PASSO 2: Prepara o texto, transformando quebras de linha (\n) em parágrafos
        const formattedText = content.text.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('');

        // PASSO 3: Insere o novo conteúdo (título + texto) no contentor de serviços
        serviceContainer.innerHTML = `<h2>${content.title}</h2>${formattedText}`;
        serviceContainer.style.display = 'block'; // Mostra o contentor de serviços

        // PASSO 4: Limpa e constrói a galeria de imagens, se houver
        galleryContainer.innerHTML = ''; // Limpa sempre a galeria
        if (content.images && content.images.length > 0) {
            content.images.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = content.title;
                galleryContainer.appendChild(img);
            });
            galleryContainer.style.display = 'grid'; // Mostra a galeria
        } else {
            galleryContainer.style.display = 'none'; // Esconde se não houver imagens
        }
        
        // PASSO 5: Mostra o mapa APENAS para a página de contacto
        mapContainer.innerHTML = ''; // Limpa sempre o mapa
        if (content.mapIframe) {
            mapContainer.innerHTML = content.mapIframe;
            mapContainer.style.display = 'block'; // Mostra o mapa
        } else {
            mapContainer.style.display = 'none'; // Esconde para outras páginas
        }
    }

    // --- PARTE 4: EVENTOS DE CLIQUE (Funciona como antes) ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o comportamento padrão do link
            const key = link.dataset.key; // Pega a "data-key" (ex: "dep", "massage")
            displayContent(key); // Chama a função para mostrar o conteúdo
            sideMenu.classList.remove('is-active'); // Fecha o menu
        });
    });

    // Estado inicial da página: esconde os contentores dinâmicos
    serviceContainer.style.display = 'none';
    galleryContainer.style.display = 'none';
    mapContainer.style.display = 'none';
});
