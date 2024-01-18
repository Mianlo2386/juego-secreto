let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${(intentos == 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        limpiarCaja();
        if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p', 'El numero es mayor. Intenta otra vez');
        }else{
            asignarTextoElemento('p', 'El numero es menor. Intenta otra vez');
             }
    }              
        intentos++;
    
    return;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo) +1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

  if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
  }else{
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
      }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
      }
  }

 
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = "";
 }

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Elige un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}

 function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true')
 }
  
condicionesIniciales();
