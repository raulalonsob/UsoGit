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

    while(true){
        numero2 = Number(prompt("Introduce otro número: "));
        if(isNaN(numero2)) {
            console.log(resultado);
            throw new Error("El último valor introducido no es numérico");
        }
        if(numero2 == 3){
            continue;
        }
        resultado = resultado + numero2;
    }
}