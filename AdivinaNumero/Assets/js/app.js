let numeroSecreto = numeroAleatorio();
let intentos = 0;
let maxIntentos = 0;
let maxRange = 0;
let numeroUsuario = 0;

const cantiddaIntentos = document.getElementById('intentosUser');
const valorMaxRange = document.getElementById('maxRange');
const valorNumeroUsuario = document.getElementById('numeroUser');

function cargarTexto(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto;
    return;
}

function intentoUsuario(){
    console.log('Maximo numero de Intentos: ' + cantiddaIntentos.value);
    console.log('Maximo rango: ' + valorMaxRange.value);
    console.log('Numero usuario: ' + valorNumeroUsuario.value);
    console.log('Numero Secreto: ' + nnumeroAleatorio());
    console.log('------------------------------------');
    return;
};

function numeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

function resetGame(){
    numeroSecreto = numeroAleatorio();
    intentos = 0;
    maxIntentos = 0;
    maxRange = 0;
    numeroUsuario = 0;
    intentoUsuario();
    return;
}

cargarTexto('h1', 'Juego adivina el numero');
cargarTexto('.section__p_intentosUser', 'Elije el numero maximo de intentos');
cargarTexto('.section__p--maxRangeUser', 'Elije el numero mayor para el rango a adivinar');
cargarTexto('.section__p_numeroUser', 'Digita tu numero');

