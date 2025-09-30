/* Definição da paleta de cores */
:root {
    --cor-escura: #5c5c5c;
    --cor-fundo: #fdfcfa;
    --cor-caixa: #ffffff;
    --cor-dourada: #c5a67c;
}

/* Reset básico */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: var(--cor-escura);
    background-color: var(--cor-fundo);
    position: relative; 
    min-height: 100vh;
    overflow-x: hidden;
}

/* Marca d'água no fundo */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('imagens/logo.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    opacity: 0.1;
    z-index: -1;
}

/* Conteúdo Principal */
#main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
}

/* Área de Exibição */
#display-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    padding: 2.5rem;
    width: 100%;
}

/* Container de boas-vindas original */
#text-container {
    width: 100%;
    max-width: 650px;
    text-align: center;
    margin-bottom: 3rem;
}

/* =============================================================== */
/* === CORREÇÃO FINAL PARA O TEXTO DE BOAS-VINDAS INVISÍVEL === */
/* =============================================================== */
#text-container h1,
#text-container p {
    color: var(--cor-escura) !important;
    visibility: visible !important;
    opacity: 1 !important;
    font-size: 1rem !important; /* Tamanho base para o parágrafo */
    text-align: center !important; /* Força o alinhamento do parágrafo de boas-vindas */
}

#text-container h1 {
    font-size: 2rem !important; /* Tamanho maior para o título */
}
/* =============================================================== */


/* Novo container do serviço */
#service-details-container {
    width: 100%;
    max-width: 650px;
    padding: 2.5rem;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    margin-bottom: 2rem;
}

#service-details-container h2,
#service-details-container h4 {
    text-align: center;
    margin-bottom: 1rem;
}

#service-details-container p,
#service-details-container blockquote {
    text-align: justify;
    hyphens: auto;
    line-height: 1.7;
    margin-bottom: 1rem;
}

#service-details-container blockquote {
    font-style: italic;
    border-left: 3px solid var(--cor-dourada);
    padding-left: 1rem;
    margin: 1.5rem 0;
}

#service-details-container ul {
    list-style-type: none;
    padding-left: 0;
    margin: 1.5rem 0;
}

#service-details-container li {
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    position: relative;
    text-align: left; /* Garante alinhamento correto dos itens da lista */
}

#service-details-container li::before {
    content: '✓';
    color: var(--cor-dourada);
    position: absolute;
    left: 0;
    font-weight: bold;
}

/* Galeria de Imagens */
#gallery-container {
    width: 100%;
    max-width: 650px;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 2rem;
    justify-content: center;
}

#gallery-container img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    aspect-ratio: 1 / 1;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

/* Menu Hamburger e Painel Lateral */
#hamburger-button {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1001;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
}

#hamburger-button .bar {
    display: block;
    width: 30px;
    height: 3px;
    background-color: var(--cor-escura);
    margin: 6px 0;
    transition: 0.4s;
}

#side-menu {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 280px;
    background-color: #333;
    box-shadow: -5px 0 15px rgba(0,0,0,0.5);
    z-index: 1000;
    transform: translateX(100%); 
    transition: transform 0.3s ease-in-out; 
    padding: 80px 20px 20px;
}

#side-menu.is-active {
    transform: translateX(0);
}

#side-menu ul {
    list-style: none;
}

#side-menu .nav-link {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    display: block;
    padding: 15px;
    border-radius: 5px;
    transition: background-color 0.2s;
}

#side-menu .nav-link:hover {
    background-color: #555;
}

/* Mapa */
#map-container {
    display: none;
    margin-top: 2rem;
    width: 100%;
    max-width: 650px;
    border-radius: 8px;
    overflow: hidden;
}

#map-container iframe {
    width: 100%;
    height: 350px;
    border: none;
}

/* Links de Contacto */
.whatsapp-link, .email-link {
    line-height: 1;
    text-decoration: none;
    transition: all 0.3s;
}

.whatsapp-link {
    display: inline-flex;
    align-items: center; 
    justify-content: center;
    gap: 8px;
    margin-top: 1.5rem;
    background-color: #25D366;
    color: #FFFFFF !important;
    padding: 12px 24px;
    border-radius: 30px;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.whatsapp-link:hover {
    background-color: #128C7E;
    transform: translateY(-2px);
}

.email-link {
    color: var(--cor-escura);
    font-weight: bold;
}

.email-link:hover {
    color: var(--cor-dourada);
    text-decoration: underline;
}
