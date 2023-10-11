/*const botao = document.getElementById('chopper');
console.log(botao); */

const botoes = document.querySelectorAll('.botao');
console.log(botoes)
const personagens = document.querySelectorAll('.personagem');

/* addevnt lister só funciona para um elemento, nao varios que é o caso da lista do .botoes */

botoes.forEach((botao, indice) => {
    botao.addEventListener('click',() =>{
   
        desselecionarBotao();
        desselecionarPersonagem();
        botao.classList.add('selecionado');
        personagens[indice].classList.add("selecionado"); 
        //console.log(indice);
        //console.log(personagens[indice]);
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove('selecionado');
}


function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove('selecionado');
}
//botoes.addEventListener('click',() =>{
 //   console.log('clicou no botao');
//});