const inputNacimiento = document.querySelector("#birth");

inputNacimiento.addEventListener("blur",(evento) => {
    validarNacimiento(evento.target);
});
//lo anterior llama a la función validarNacimiento
//pero con el input de evento.target que es lo que ingresa
//a la función llamada

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    //new Date convierte la fecha de nacimiento seleecionada 
    //a algo más detallado para poder usar este para 
    //funciones que requieran más detalles
    let mensaje = ""
    if(!mayorDeEdad(fechaCliente)){
        mensaje="Debes tener al menos 18 años de edad"
    }
    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    //sin insertar ningún value en new Date
    //identificará automáticamente que debe sacar el input del ahora
    const diferenciaFechas = new Date (
        fecha.getUTCFullYear() + 18 ,
        fecha.getUTCMonth(), 
        fecha.getUTCDate()
    );

    return diferenciaFechas <= fechaActual;


}