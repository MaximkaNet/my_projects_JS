class GameField {
    constructor(nameField) {
        this.nameField = nameField;
        this.size = 1;
    }

    createField(size) {
        this.size = size;
        for (let i = 0; i < this.size; i++) {
            let field = document.querySelector(this.nameField);
            field.innerHTML += '<div class="row"></div>';
        }
        let rows = document.querySelectorAll('.row');
        let i = 0;
        rows.forEach(n => n.setAttribute('row', `${i}`, i++));
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                rows[i].innerHTML += this.templateBlock();
                rows[i].children.item(j).setAttribute('type', 'null');
            }
        }
    }
    clearGameField() {
        const gameFieldId = document.querySelector(this.nameField);
        while (gameFieldId.firstChild) {
            gameFieldId.removeChild(gameFieldId.firstChild);
        }
    }
    templateRow() {
        return `<div class="row"></div>`;
    }
    templateBlock() {
        return `<div class="block">
            <div class="sign-x">X</div>
            <div class="sign-o">O</div>
        </div>`;
    }
    winHandler(player, lobbyId, rowsId, namePlayer) {
        let count = 0;
        const gameLobbyObjId = document.querySelector(lobbyId);
        let rows = document.querySelectorAll(rowsId);
        //check line x
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (rows[i].children.item(j).getAttribute('type') === player)
                    count++;
            }
            if (count === this.size)
                break;
            else
                count = 0;
        }
        //check win
        if (count === this.size) {
            // gameLobbyObjId.classList.remove('gameLobby-hidden');
            // this.clearGameField();
            // let quit = document.querySelector('.quitGame').classList.add('hidden');
            let winBlock = document.querySelector('.winInfo').classList.add('winInfo-active');
            let winPlayerVal = document.querySelector('.winer').innerText = namePlayer;
            return true;
        }
        count = 0;
        //check line y
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (rows[j].children.item(i).getAttribute('type') === player)
                    count++;
            }
            if (count === this.size)
                break;
            else
                count = 0;
        }
        //check win
        if (count === this.size) {
            // gameLobbyObjId.classList.remove('gameLobby-hidden');
            // this.clearGameField();
            // let quit = document.querySelector('.quitGame').classList.add('hidden');
            let winBlock = document.querySelector('.winInfo').classList.add('winInfo-active');
            let winPlayerVal = document.querySelector('.winer').innerText = namePlayer;
            return true;
        }
        count = 0;
        //check diagonal
        //left diagonal
        for (let i = 0; i < this.size; i++) {
            if (rows[i].children.item(i).getAttribute('type') === player)
                count++;
        }
        if (count === this.size) {
            // gameLobbyObjId.classList.remove('gameLobby-hidden');
            // this.clearGameField();
            // let quit = document.querySelector('.quitGame').classList.add('hidden');
            let winBlock = document.querySelector('.winInfo').classList.add('winInfo-active');
            let winPlayerVal = document.querySelector('.winer').innerText = namePlayer;
            return true;
        }
        count = 0;
        //right diagonal

        for (let i = 0; i < this.size; i++) {
            if (rows[i].children.item(this.size - 1 - i).getAttribute('type') === player)
                count++;
        }
        //check win
        if (count === this.size) {
            // gameLobbyObjId.classList.remove('gameLobby-hidden');
            // this.clearGameField();
            // let quit = document.querySelector('.quitGame').classList.add('hidden');
            let winBlock = document.querySelector('.winInfo').classList.add('winInfo-active');
            let winPlayerVal = document.querySelector('.winer').innerText = namePlayer;
            return true;
        }

        return false;
    }

    enemyStep(player, rowsId) {
        const rows = document.querySelectorAll(rowsId);
        let tmpRandPosX = Math.random() * (this.size);
        let randPosX = Math.floor(tmpRandPosX);
        let tmpRandPosY = Math.random() * (this.size);
        let randPosY = Math.floor(tmpRandPosY);
        for (let i = 0; i < this.size ** 2 + 1; i++) {
            if (rows[randPosY].children.item(randPosX).getAttribute('type') === 'null') {
                rows[randPosY].children.item(randPosX).setAttribute('type', player);
                if (player === 'x') {
                    rows[randPosY].children.item(randPosX).children.item(0).classList.add('active');
                } else if (player === 'o') {
                    rows[randPosY].children.item(randPosX).children.item(1).classList.add('active');
                }
                break;
            }
            tmpRandPosX = Math.random() * (this.size);
            randPosX = Math.floor(tmpRandPosX);
            tmpRandPosY = Math.random() * (this.size);
            randPosY = Math.floor(tmpRandPosY);
        }
    }

}

let inputNamePlayer = document.querySelector('#nicknameValue');
let inputSizeField = document.querySelector('#gameFieldValue');
const gameLobbyClassName = '.gameLobby';
const gameLobbyObjId = document.querySelector('.gameLobby');
const gameFieldId = '.gameField';


let playerSign = 'x';

function activePlayer() {
    let players = document.querySelectorAll('.playerSign').forEach(n => n.classList.remove('player-active'));
    if (this.innerText === 'X') {
        this.classList.add('player-active');
        playerSign = 'x';
    } else if (this.innerText === 'O') {
        this.classList.add('player-active');
        playerSign = 'o';
    }
}

const typePlayer = document.querySelectorAll('.playerSign').forEach(n => n.addEventListener('click', activePlayer));


let rows = '.row';
let blocks;
let btn;

let game = null;

// ======= Create game field ==========

// createGame.createField();

function gameClickHandler() {
    if (playerSign === 'x') {
        if (this.getAttribute('type') === 'null') {
            this.children.item(0).classList.add('active');
            this.setAttribute('type', playerSign);
            if (game.winHandler(playerSign, gameLobbyClassName, rows, inputNamePlayer.value))
                return;
            game.enemyStep('o', rows);
            if (game.winHandler('o', gameLobbyClassName, rows, 'Computer'))
                return;
        }
    } else if (playerSign === 'o') {
        if (this.getAttribute('type') === 'null') {
            this.children.item(1).classList.add('active');
            this.setAttribute('type', playerSign);
            if (game.winHandler(playerSign, gameLobbyClassName, rows, inputNamePlayer.value))
                return;
            game.enemyStep('x', rows);
            if (game.winHandler('x', gameLobbyClassName, rows, 'Computer'))
                return;
        }
    }
}

function btnAction() {
    document.body.style.overflow = 'auto';
    inputNamePlayer = document.querySelector('#nicknameValue');
    inputSizeField = document.querySelector('#gameFieldValue');
    let sizeFieldVal = Number.parseInt(inputSizeField.value, 10);
    if (sizeFieldVal > 2 && sizeFieldVal < 9 && inputNamePlayer.value !== '' && sizeFieldVal !== '') {
        let quitGame = document.querySelector('.quitGame').classList.remove('hidden');
        gameLobbyObjId.classList.add('gameLobby-hidden');
        if (game !== null) {
            game.clearGameField();
            delete game;
        }
        game = new GameField(gameFieldId);
        game.createField(sizeFieldVal);
        blocks = document.querySelectorAll('.block').forEach(n => n.addEventListener('click', gameClickHandler));
    } else if (sizeFieldVal > 2 && sizeFieldVal < 9 && inputNamePlayer.value !== '' && sizeFieldVal !== '') {
        quitGame = classList.remove('hidden');
        gameLobbyObjId.classList.add('gameLobby-hidden');
        if (game !== null) {
            game.clearGameField();
            delete game;
        }
        game = new GameField(gameFieldId);
        game.createField(sizeFieldVal);
        blocks = document.querySelectorAll('.block').forEach(n => n.addEventListener('click', gameClickHandler));
    }
}
btn = document.querySelector('.playBtn').addEventListener('click', btnAction);
blocks = document.querySelectorAll('.block').forEach(n => n.addEventListener('click', gameClickHandler));

function finishGame() {
    gameLobbyObjId.classList.remove('gameLobby-hidden');
    let winInfo = document.querySelector('.winInfo').classList.remove('winInfo-active');
    this.classList.add('hidden');
    document.body.style.overflow = 'hidden';
}

let quitGameBtn = document.querySelector('.quitGame').addEventListener('click', finishGame);