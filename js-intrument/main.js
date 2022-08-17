console.log('Hola mundo!');
const myName = 'Dalila';
let myAge = 18;
let x = 3;
let y = 4;
const likesMusic = true;
console.log('myName', myName);
console.log('myAge', myAge);
console.log('x', x);
console.log('y', y);
console.log('likesMusic', likesMusic);
console.log('myName', typeof myName);
console.log('myAge', typeof myAge);
console.log('x', typeof x);
console.log('y', typeof y);
console.log('likesMusic', typeof likesMusic);
if (likesMusic == true) {
    console.log('Me gusta la música');
} else {
    console.log('No me gusta la música');
}
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    });
}
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];
const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');
keys.forEach((key) => {
    key.addEventListener('click', () => playNote(key));
});
const nameElement = document.querySelector('#name');
const ageElement = document.querySelector('#age');
const likesMusicElement = document.querySelector('#likesMusic');
console.log('nameElement', nameElement);
console.log('ageElement', ageElement);
console.log('likesMusicElement', likesMusicElement);
nameElement.textContent = myName;
ageElement.textContent = myAge;
if (likesMusic == true) {
    likesMusicElement.textContent = 'Me gusta la música';
} else {
    likesMusicElement.textContent = 'No me gusta la música';
}
document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);
    console.log(whiteKeys[whiteKeyIndex]);
    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

const displayContent = (content) => {
    const guessedAgeElement = document.getElementById("guessedAge");
    guessedAgeElement.textContent = content.age;
    if (content.age === myAge) {
        isGueesRightElement.textContent = 'esto es correcto';
    } else {
        isGueesRightElement.textContent = 'esto es incorrecto';
    }
}
const fetchAgeGuess = async () => {
    const response = await fetch('https://api.agify.io?name=Dalila');
    const content = await response.json();
    displayContent(content);
};

fetchAgeGuess();