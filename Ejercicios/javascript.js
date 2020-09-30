alert("¡Hola Mundo 2!");

function mostrarVariables(){
    alert("Variable1: " + variable1);
    variable2 = null;
    alert("Variable2: " + variable2);
    var variable1 = 34;
    alert("Variable1 declarada: " + variable1);
    variable3 = 15.9;
    alert("Variable1 * Variable3: " + (variable1 * variable3));
    variable3 = "Ahora soy un texto";
    alert("Variable3: " + variable3);
    alert("Variable3 * 35: " + (variable3 * 35));
}