let vidaJogador = 100;
let vidaInimigo = 100;
let posX = 260;
let posY = 320;
let gameArea = document.getElementById ("game-container");
let player = document.getElementById ("player");
let limitY = gameArea.clientHeight - player.clientHeight;

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            if (posX > 10) posX -= 20;
            break;
        case "ArrowRight":
            if (posX < 510) posX += 20;
            break;
        case "ArrowUp":
            if (posY >= 10) posY -= 20;
            break;
        case "ArrowDown":
            if (posY + 20 <= limitY) posY += 20;
    }
    
    
    player.style.left = posX + "px";
    player.style.top = posY + "px";
});

function alterarVida(valor) {
    vidaJogador += valor;
    if (vidaJogador > 100) vidaJogador = 100;
    if (vidaJogador < 0) vidaJogador = 0;

    let barra = document.getElementById("vida-player");
    barra.style.width = vidaJogador + "%";
    barra.style.background = vidaJogador > 60 ? "green" : vidaJogador > 30? "yellow" : "red";

    if (vidaJogador === 0) document.getElementById("dialogo").innerText = "Você perdeu!";
}

function abrirLoja() {
    let choose = confirm ("Deseja comprar uma poção por APENAS 10 moedas?");
    if (choose) alterarVida(30);
}

function ataqueEspecial() {
    vidaInimigo -= 25;
    if (vidaInimigo < 0) vidaInimigo = 0;
    let barra = document.getElementById("vida-inimigo");
    barra.style.width = vidaInimigo + "%";
    document.getElementById("enemy").style.transform = "scale(1.2)";
    setTimeout(()=> document.getElementById("enemy").style.transform = "scale(1)", 200);
    if (vidaInimigo === 0) document.getElementById("dialogo").innerText = "Você venceu!";
}