/* Abre e fecha menu lateral em modo mobile */

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () =>{
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace('bi-list', 'bi-x')
    : menuMobile.classList.replace("bi-x", 'bi-list');
    body.classList.toggle("menu-nav-active")
})

//Troca a aba ativa para a que foi clicada

function ativarLink(linkClicado){
    const linkAtivo = document.querySelectorAll('.nav-link.active');

    linkAtivo.forEach(function(link) {
        link.classList.remove('active');
    })
    linkClicado.classList.add('active');
}

/* Fecha o menu quando clicar em algum item e muda o icone para list */

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list")
        }
    })
})

// Animação de quem tiver o atributo data-anime

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach(element=>{
        if (windowTop > element.offsetTop){
            element.classList.add('animate')
        }
        else{
            element.classList.remove('animate')
        }
    })
}

animeScroll()

window.addEventListener("scroll", ()=>{
    animeScroll();
})

// Trocar o botão "Enviar Mensagem" pelo "Enviando"

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const textareaMensagem = document.querySelector('#mensagem');

btnEnviar.addEventListener("click", () => {
    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const mensagem = textareaMensagem.value.trim();
    if (nome === '' || email === '' || mensagem === '') {
        return;
    }
    else {
    btnEnviarLoader.style.display = "block";
    btnEnviar.style.display = "none";
    }
})

// Tirar a mensagem de sucesso depois de 5 segundos

setTimeout(() => {
    document.querySelector('#alerta').style.display = 'none';
}, 5000)