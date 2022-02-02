let order = [];
let clickedOrder = [];
let score = 0;


/* 0 = verde
   1 = vermelho
   2 = amarelo
   3 = azul */


const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');


//cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4 );
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');   
    }, number - 250); 
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder != order[i]) {
            gameOver();
            break;
        } 
    }
    if (clickedOrder == order.length) {
        alert(`pontuação: ${score}\nVocê acertou! Iniciando o próximo nivel`);
        nextLevel();
    }

}

//função para o click do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    
    setTimeout (() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
    
}

//função que retorna a cor


let createColorElement = (color) => {
    if (color == 0) {
        return blue;
    } else if (color == 1) {
        return yellow;
    } else if (color == 2) {
        return red;
        
    } else if (color == 3) {
        return green;
        
    }
}

//função para proximo nivel do jogo

let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função para game Over

let gameOver = () => {
    alert(`pontuação: ${score}\nVocê perdeu!\n clique em ok para começao um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//Função para iniciar um novo Jogo

 let playGame = () => {
    alert('Bem-Vindo Ao Gênesis! Iniciando novo jogo!');
    score = 0;
    nextLevel();
}


function onColorClick (item) {
    click(item)
}
// green.addEventListener('click', click(0));
// red.addEventListener('click', click(1));
// yellow.addEventListener('click', click(2));
// blue.addEventListener('click', click(3));


//evento de click para as cores
// green.onClick = () => click(0);
// red.onClick = () => click(1);
// yellow.onClick = () => click(2);
// blue.onClick = () => click(3);

//inicio de jogo

playGame();