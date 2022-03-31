let juliaTaViva;
let julia = {
    humor: 100,
    sono: 100,
    fome: 100,
    cabelo: 100,
    estudo: 100,
    fazerProjeto: function(){
        this.humor -= 40;
        this.sono -= 20;
        this.fome -= 30;
        this.cabelo -= 20;
        this.estudo <= 60 ? this.estudo += 40 : this.estudo = 100;
    },
    fazerCefet: function(){
        this.humor -= 30;
        this.sono -= 40;
        this.fome -= 40;
        this.cabelo -= 20;
        this.estudo <= 60 ? this.estudo += 40 : this.estudo = 100;
    },
    ler: function(){
        this.humor <= 60 ? this.humor += 40 : this.humor = 100;
        this.sono -= 5;
        this.fome -= 10;
        this.cabelo -= 10;
        this.estudo -= 5;
    },
    dormir: function(){
        this.sono = 100;
        this.fome -= 20;
        this.cabelo -= 15;
        this.estudo -= 15;
    },
    comer: function(){
        this.fome = 100;
        this.sono -= 5;
        this.cabelo -= 10;
        this.estudo -= 10;
    },
    arrumarCabelo: function(){
        this.cabelo = 100;
        this.humor <= 40 ? this.humor += 60 : this.humor = 100;
        this.fome -= 15;
        this.sono -= 15;
        this.estudo -= 15;
    }
}
function mostrarStats(){
    let stats = document.querySelectorAll('.atributo');
    stats[0].innerHTML = `<img src="humor.png"> Humor: ${julia.humor}%`;
    stats[1].innerHTML = `<img src="sono.png"> Sono: ${julia.sono}%`;
    stats[2].innerHTML = `<img src="fome.png"> Fome: ${julia.fome}%`;
    stats[3].innerHTML = `<img src="livros.png"> Estudos: ${julia.estudo}%`
    stats[4].innerHTML = `<img src="cabelo.png"> Cabelo: ${julia.cabelo}%`
}
mostrarStats();
function juliaEstaViva(){
    if(julia.humor <= 0)
    return 'humor';
    else if (julia.fome <= 0)
    return'fome';
    else if (julia.sono <= 0)
    return'sono';
    else if (julia.cabelo <= 0)
    return 'cabelo';
    else if (julia.estudo <= 0)
    return 'estudo';

    return true
}
function gameOver(causa) {
    let h1 = document.querySelector('h1');
    let divStats = document.querySelector('#stats');
    let divBotoes = document.querySelector('#botoes');
    let gameOver = document.querySelector('#game_over');
    switch (causa) {
        case 'fome':
            gameOver.innerHTML += '<h2>Game Over <img src="fome.png"></h2><p>A Júlia passou mal de fome! Você deixou a fome dela chegar em 0%, agora ELA PRECISA IR NO HOSPITAL.';
            break;
        case 'sono':
            gameOver.innerHTML += '<h2>Game Over <img src="mimir.png"></h2><p>A Júlia desmaiou! Você deixou o sono dela chegar em 0%. Quando ela acordar, torça para continuar vivo!';
            break;
        case 'humor':
            gameOver.innerHTML += '<h2>Game Over <img src="faca.png"></h2><p>A Júlia surtou! Você deixou o humor dela chegar em 0%, agora SINTA A FÚRIA.</p>'
            break;
        case 'estudo':
            gameOver.innerHTML += '<h2>Game Over <img src="medo.png"></h2><p>A Júlia surtou! Ela ficou muito tempo sem estudar, e agora ela tá com medo da prova do Vivas.</p>'
            break;
        case 'cabelo':
            gameOver.innerHTML += '<h2>Game Over <img src="lapide.png"></h2><p>A júlia surtou! ELA NÃO ARRUMOU O CABELO!!!!!!111</p>'
            break;
    }
    gameOver.style.display = 'block';
    divStats.style.display = 'none';
    divBotoes.style.display = 'none';
    h1.style.display = 'none';
}

let projeto = document.querySelector('#projeto');
projeto.addEventListener('click', function(){
    julia.fazerProjeto();
    mostrarStats();
    juliaTaViva = juliaEstaViva();
    if (juliaTaViva != true)
        gameOver(juliaTaViva);
});
let cefet = document.querySelector('#cefet');
cefet.addEventListener('click', function () {
    julia.fazerCefet();
    mostrarStats();
    juliaTaViva = juliaEstaViva();
    if (juliaTaViva != true)
        gameOver(juliaTaViva);
});
let mazeRunner = document.querySelector('#maze_runner');
mazeRunner.addEventListener('click', function () {
    julia.ler();
    mostrarStats();
    juliaTaViva = juliaEstaViva();
    if (juliaTaViva != true)
        gameOver(juliaTaViva);
})
let comer = document.querySelector('#comer');
comer.addEventListener('click', function () {
    julia.comer();
    mostrarStats();
    juliaTaViva = juliaEstaViva();
    if (juliaTaViva != true)
        gameOver(juliaTaViva);
})
let dormir = document.querySelector('#dormir');
dormir.addEventListener('click', function () {
    julia.dormir();
    mostrarStats();
    juliaTaViva = juliaEstaViva();
    if (juliaTaViva != true)
        gameOver(juliaTaViva);
})
let cabelo = document.querySelector('#cabelo');
cabelo.addEventListener('click', function () {
    julia.arrumarCabelo();
    mostrarStats();
    juliaTaViva = juliaEstaViva();
    if (juliaTaViva != true)
        gameOver(juliaTaViva);
})