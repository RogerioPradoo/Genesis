let order = [];
let clickedOrder = [];
let score = 0;

// 0 = blue
// 1 = red
// 2 - yellow
// 3 - green


const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

//cria ordem aleatoria de cores
let shufflerOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    
    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) +1);
    }
}

//acende a proxima cor
let lightColor = (element, Number) => {
    Number = Number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, Number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes sao iguais
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.lenght) {
    alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível`);
        nextLevel();
    }
}

//função clique user
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return blue;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return green;
    }
}

// funcao para proximo nivel
let nextLevel = () => {
    score++;
    shufflerOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}\n Você perdeu o jogo\nClique em OK para iniciar o jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//iniciar

let playGame = () => {
    alert('bem vindo ao genesis');
    score = 0;

    nextLevel();
}

//eventos de clique p cores
blue.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
green.onclick = () => click(3);

// inicio do jogo
playGame();