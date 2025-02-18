let numeroSecreto =0 ;
let contador = 0;
let maxIntentosUser = 0;
let valorMaxRange = 0;
let valorNumeroUsuario = 0;

function cargarTexto(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto;
    return;
}

function intentoUsuario() {

    maxIntentosUser = parseInt(document.getElementById('maxIntentosUser').value);
    valorMaxRange = parseInt(document.getElementById('maxRange').value);
    valorNumeroUsuario = parseInt(document.getElementById('numeroUser').value);
    numeroSecreto = numeroAleatorio(valorMaxRange);

    console.log('------------------------------------');
    console.log('Maximo numero de Intentos: ' + maxIntentosUser);
    console.log('Maximo rango: ' + valorMaxRange);
    console.log('Numero usuario: ' + valorNumeroUsuario);
    console.log('Numero Secreto: ' + numeroSecreto);
    console.log('------------------------------------');
    return;
};

function numeroAleatorio(valorMaxRange) {
    return Math.floor(Math.random() * valorMaxRange) + 1;
}

function resetGame(){
    return;
}

cargarTexto('h1', 'Juego adivina el numero');
cargarTexto('.section__p_intentosUser', 'Elije el numero maximo de intentos');
cargarTexto('.section__p--maxRangeUser', 'Elije el numero mayor para el rango a adivinar');
cargarTexto('.section__p_numeroUser', 'Digita tu numero');

