const persona = new Persona;

function crearObjeto() {
    persona.creaObjetos();
}

function eliminarObjeto() {
    const documentoAEliminar = document.getElementById("documentoEliminar").value;
    persona.eliminaObjeto(documentoAEliminar);
}

function actualizar() {
    const documentoActualizar = document.getElementById("documento").value;
    if(persona.existe(documentoActualizar)){
    persona.actualizarUsuario(documentoActualizar);
    }else{
        alert("No existe");
    }
}
