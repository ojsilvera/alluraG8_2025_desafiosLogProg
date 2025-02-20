let numeroSecreto = 0 ;
let contador = 0;
let maxIntentosUser = 0;
let valorMaxRange = 0;
let dataUser = 0;


function initializeConditions(){

    //en la vista inicial se muetran las siguientes lineas
    cargarTexto('.section__p_intentosUser', 'Elije el numero maximo de intentos');
    document.getElementById('maxIntentosUser').style.display = 'block';
    cargarTexto('.section__p--maxRangeUser', 'Elije el numero mayor para el rango a adivinar');
    document.getElementById('maxRange').style.display = 'block';
    cargarTexto('.section__p_dataoUser', 'Elije tu nombre de jugador');
    document.getElementById('dataUser').style.display = 'block';
    //en la vista inicial no se muetran las siguientes lineas
    document.getElementById('startGame').style.display = 'none';
    document.getElementById('newGame').style.display = 'none';
    return;
}

function startGame(){
    cargarTexto('.section__p_numeroUser', 'Digita tu numero');
    document.getElementById('numeroUser').style.display = 'block';
    document.getElementById('sendNumber').style.display = 'block';
    document.getElementById('startGame').style.display = 'none';
    document.getElementById('newGame').style.display = 'block';
    return;
}

function rulesGame(){
    maxIntentosUser = document.getElementById('maxIntentosUser').value;
    valorMaxRange = document.getElementById('maxRange').value;
    dataUser = document.getElementById('dataUser').value;
    console.log(maxIntentosUser);
    console.log(valorMaxRange);
    console.log(dataUser);
    return;
}

// cargarTexto('.section__p_numeroUser', 'Digita tu numero');


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

initializeConditions();
rulesGame();
