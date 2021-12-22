const namePlayer = document.querySelector('#nicknameValue');
// const sizeField = document.querySelector('#gameFieldValue');
const gameLobby = document.querySelector('.gameLobby');

let namePlayerVal = namePlayer.nodeValue;
// let sizeFieldVal = sizeField.nodeValue;
let gameLobbyObj;
console.log(namePlayerVal);
// console.log(sizeFieldVal);

function btnAction() {
    namePlayerVal = namePlayer.value;
    console.log(namePlayerVal);
}

const btn = document.querySelector('.playBtn').addEventListener('click', btnAction);