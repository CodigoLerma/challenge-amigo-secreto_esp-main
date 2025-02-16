// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = []; //almacenara los nombres agregados


function agregarAmigo() {
    //obtener el nombre escrito por el usuario
    let nombreAmigo = document.getElementById("amigo"); 
    let nombre = nombreAmigo.value.trim();

    // comprobar que nombre no este vacio
    if (nombre) {
        nombres.push(nombre);
        nombreAmigo.value = ""
        console.log(nombres)
    }

}