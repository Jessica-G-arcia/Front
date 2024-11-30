// Arquivo das automações do Menu Hamburguer.

// Selecionando o botão menu pelo seu ID utilizando 'const' para não modificar posteriormente.

const btnMobile = document.getElementById('btn-mobile');

// Função que alterna o estado do menu (aberto/fechado).
//@param {Event} - Evento que dispara a função como 'click' ou  'touchstart'

function toggleMenu (event) {
    // Evita o comportamento padrão do event 'touchstart', evitando bug em dispositivos móveis
    if (event.type === 'touchstart') event.preventDefault();

    // Seleciona o elemento de navegação pelo seu ID.
    const nav = document.getElementById('nav');

    // Adiciona ou remove a classe 'active' no elemento de navegação, ativando ou desativando o menu.
    nav.classList.toggle('active');

    // Verifica se o menu está aberto ou não.
    const isActive = nav.classList.contains('active');

    // Atualiza o atributo 'aria-expanded' para melhorar a acessibilidade ao menu.
    event.currentTarget.setAttribute('aria-expanded', isActive);

    // Define o texto do atributo 'aria-label' dependendo do estado do menu (aberto/fechado).
    if (isActive) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

// Adiciona eventos de 'click' e 'touchstart' para ativar a função toogleMenu ao interagir com o botão.
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

