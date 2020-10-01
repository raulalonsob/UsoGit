function principal(){
    try {
        suma();
    } catch (error) {
        console.error(error);
    }
}

function suma(){
    var resultado = Number(prompt("Introduce un número: "));
    var numero2 = 0;

    do{
        numero2 = Number(prompt("Introduce otro número: "));
        if(isNaN(numero2)) {
            throw new Error("El último valor introducido no es numérico");
        }
        resultado = resultado + numero2;
        console.log(resultado);
    } while(true);
}