function MiError(error){
    /**
     * En JavaScript una función es un objeto, 
     * y como tal tiene propiedades a las que se puede asignar valor.
     */
    this.message = "Error: " + error;
}
MiError.prototype = Object.create(Error.prototype);
MiError.prototype.name = "MiError";
    
function principal(){
    var deporte1 = prompt("Introduce un deporte: ");
    var deporte2 = prompt("Introduce otro deporte: ");
    var deporte3 = prompt("Introduce un tercer deporte: ");

    try {
        concatenarDeportes(deporte1, deporte2, deporte3);        
    } catch (error) {
        console.error(error.message);
    } finally {
        alert("FIN");
    }
}

function concatenarDeportes(){
    var resultado = "";
    for (var i = 0; i<arguments.length; i++) {
        if(arguments[i] == ""){
            throw new MiError("No se ha introducido valor para el deporte número " + (i+1));
        }
        if(arguments[i] == "fútbol" || arguments[i] == "futbol") {
            throw new Error("El deporte número " + (i+1) +" es Fútbol");
        }
        if(resultado == ""){
            resultado = arguments[i];
        } else {
            resultado = resultado + ", " + arguments[i];
        }
    }
    alert(resultado);
}