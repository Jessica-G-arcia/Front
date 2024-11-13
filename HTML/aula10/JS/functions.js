// Manipulação dos objetos DOM (Document Object Model)
// Representação de dados dos objetos que compõe uma estrutura e o conteúdo de um documento Web

//document.querySelector - Essencial para manipular e interagir com elementos de uma página // Uso principal: Buscar e modificar elementos HTML

// Exemplo:

const titulo = document.querySelector('h1');
titulo.textContent = 'Texto modificado'; //Modifica o texto do h1


//Document.createElement() - Cria novos elementos dinamicamente. Uso principal: Adicionar novos elementos ao DOM

//Exemplo:

const novoElemento = document.createElement('p');
novoElemento.textContent = 'Parágrafo adicionado';
document.body.appendChild(novoElemento);

//addEventListener() - Funções que lidam com interação dos usuários - Sua função é adicionar um ouvinte para eventos (com cliques) - Uso principal: Criar interatividade, com cliques ou movimentos do mouse.

const botao = document.querySelector('button');
botao.addEventListener('click', () => {
    alert ('Botão clicado!');
}
);

//setTimeout() - Controlam ações que ocorrem em intervalos ou após um tempo - Executa uma função após um período de tempo (unidade de medida > milisegundos) - Uso principal: atrasar execuções ou criar temporizadores.

setTimeout(() => {
    alert ('Executado após 2 segundos!');
},2000);

//alert executa o toString do objeto e apresenta em tela.
//console.log registra a informação no console do navegador.