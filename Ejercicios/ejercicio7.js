function ambitoVariables(num){
    var soyDeLaFuncion = "soyDeLaFuncion sin ámbito de bloque";
    //const soyConstante = "soyConstante sin ámbito de bloque";
    if(num == 1){
        let soyDelIf = "declarada dentro del bloque if";
        soyDeLaFuncion = "soyDeLaFuncion modificada dentro del if";
    } else {
        const soyConstante = "soyConstante declarada en el else";
    }
    soyConstante = "soyConstante modificada tras el else";
    console.log("soyDeLaFuncion: " + soyDeLaFuncion);
    console.log("soyConstante: " + soyConstante);
    console.log("soyDelIf: " + soyDelIf);
}