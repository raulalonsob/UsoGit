function mostrarMeses(){
    var arrayMeses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    for(let i = 0; i < 12; i++){
        console.log(arrayMeses[i]);
    }
}

function calcularFactorial(){
    var numero = Number(prompt("Introduce un número "));
    var factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial = factorial * i;
    }
    alert("El factorial de " + numero + " es " + factorial);
}

function recomendacionesNetflix(){
    var edad = Number(prompt("Intriduce tu edad"));
    if(edad < 7){
        alert("Patrulla Canina");
    } else if(7 <= edad <= 13){
        alert("Alexa y Katie");
    } else if(14 <= edad <= 18){
        alert("Anne with an E");
    } else if(19 <= edad <= 35){
        alert("Stranger Things");
    } else {
        alert("Sherlock");
    }
}

function intervalo(){
    var numero = 0;
    do {
        numero = prompt("Introduce un número entre 45 y 72");
    } while(numero < 45 || numero > 72);
    /**
     * OTRA FORMA:
     * while(true) {
     *      numero = prompt("Introduce un número entre 45 y 72");
     *      if(numero >= 45 && numero <= 72){
     *          break;
     *      }
     * }     
     * */
}