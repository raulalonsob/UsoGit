function potencias() {
    var numero = Number(prompt("Introduce un número:"));
    var potencia = Number(prompt("Introduce otro número:"));
    var resultado = 1;

    for (let i = 0; i < potencia; i++){
        resultado = resultado * numero;
    }
    /** 
     * En ES7, se puede hacer con el operador **:
     *      console.log(numero ** potencia);
     * Otra opción es: 
     *      resultado = Math.pow(numero,potencia);
    */

    console.log(resultado);
}

function usuarioContraseña(){
    var usuario = prompt("Usuario: ");
    var contrasena = "";
    do{
        contrasena = prompt("Contraseña:");
    } while(contrasena != "abcd");
    alert("Usuario: " + usuario + "\nContraseña: " + contrasena);
}

function matriz(){
    var numeroFilas = Number(prompt("Introduce un número: "));
    var numeroColumnas = Number(prompt("Introduce otro número: "));
    var letra = prompt("Introduce una letra: ");
    var resultado = "";

    while(numeroFilas > 0 ) {
        let columnas = numeroColumnas;
        while (columnas > 0) {
            resultado = resultado + letra;
            columnas--;
        }
        resultado = resultado + "\n";
        numeroFilas--;
    }
    alert(resultado);
}