// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = []; //almacenara los nombres agregados


function agregarAmigo() {
    //obtener el nombre escrito por el usuario
    let nombreAmigo = document.getElementById("amigo"); 
    let nombre = nombreAmigo.value.trim(); 

    // comprobar que el input de nombre no este vacio
    if (nombre) {
        nombres.push(nombre); // agrega los nombres al array
        actualizarLista()
        nombreAmigo.value = "";
    }

}
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");

    // une los nombres en el array con saltos de linea. se mostrara vacio si el array esta vacio
    lista.innerHTML = nombres.join("<br>"); 
    // ejemplo: "Diego<br>Sofia<br>"
}
