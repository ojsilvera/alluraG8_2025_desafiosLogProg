let numeroSecreto =0 ;
let contador = 0;
let maxIntentosUser = 0;
let valorMaxRange = 0;
let valorNumeroUsuario = 0;


function initializeConditions(){

    //en la vista inicial se muetran las siguientes lineas
    cargarTexto('.section__p_intentosUser', 'Elije el numero maximo de intentos');
    document.getElementById('maxIntentosUser').style.display = 'block';
    cargarTexto('.section__p--maxRangeUser', 'Elije el numero mayor para el rango a adivinar');
    document.getElementById('maxRange').style.display = 'block';
    cargarTexto('.header__p--indicacionesSystem', 'Elije las reglas del juego, rango y numero de intentos');
    //en la vista inicial no se muetran las siguientes lineas
    document.getElementById('startGame').style.display = 'none';
    document.getElementById('newGame').style.display = 'none';
    document.getElementById('numeroUser').style.display = 'none';
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
