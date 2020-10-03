function pagar() {
    var precio = parseInt(prompt("Introduce el precio del artículo"));
    var tipoIva = prompt("Introduce el tipo de IVA a aplicar \n Será uno de estos tres valores: G, R, S");
    if (typeof precio === 'number' && typeof tipoIva === 'string') {
        alert("El precio final es: " + calcularPrecioFinal(precio, tipoIva));
    } else {
        alert("Uno de los valores introducidos no es válido");
    }
}

function calcularPrecioFinal(precio, tipoIva) {
    var resultado =0;
    console.log("Precio: "+precio);
    console.log("Tipo de IVA: " +tipoIva);
        switch (tipoIva) {
            case `G`: resultado = precio*1.21;
                break;
            case `R`:  resultado = precio*1.10;
                break;
            case `S`:resultado = precio*1.04;
                break;
            default: alert("El tipo de IVA introducido no existe");
        }
        console.log(resultado);
        return resultado;
}