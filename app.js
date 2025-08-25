let numeroSecreto =0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario===numeroSecreto){
        //El usuario acertó
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto ) {
        asignarTextoElemento('p','El número es menor');
        } else {
        asignarTextoElemento('p','El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado existe en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //en caso todos numeros sorteados se coparon
    if (listaNumerosSorteados.legth==numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números sorteados');
    } else {
        //por repeticion, manda a generar nuevo numero
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            //no esta en la lista
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje inicio
    //generar numero aleatorio
    //reiniciar numero de intentos a 1
    condicionesIniciales();
    //desabilitar boton Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();

