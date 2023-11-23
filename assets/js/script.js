function calcularPorcentajeGrasa() {
    var peso = parseFloat(document.getElementById("peso").value);
    var alturaCm = parseFloat(document.getElementById("altura").value);
    var alturaMetros = alturaCm / 100;  // Convertir la altura a metros
    var edad = parseInt(document.getElementById("edad").value);
    var genero = document.getElementById("genero").value;

    if (isNaN(peso) || isNaN(alturaCm) || isNaN(edad)) {
        mostrarMensaje("Por favor, ingrese todos los datos antes de calcular el porcentaje de grasa corporal.",  "warning");
        return; // Salir de la función si falta algún dato
    }
    // Calcular el porcentaje de grasa corporal usando la fórmula de Dubois
    var imc = peso /Math.pow(alturaMetros,2);
    var sexoFactor = genero === 'masculino' ? 1 : 0;
    var porcentajeGrasaCorporal =(1.2 * imc) + (0.23 * edad) - (10.8 * sexoFactor) - 5.4;
    porcentajeGrasaCorporal = Math.max(porcentajeGrasaCorporal, 0);

    console.log("Porcentaje de grasa corporal: " + (porcentajeGrasaCorporal).toFixed(2) + "%");
    // Clasificar el porcentaje de grasa corporal
    clasificarPorcentajeGrasa(porcentajeGrasaCorporal,sexoFactor,);

    // Mostrar el mensaje en el modal
    // mostrarModal(clasificacion);
}
// console.log(clasificacion);
function mostrarMensaje(mensaje, tipo) {
    var alerta = document.createElement("div");
    alerta.className = "alert alert-" + tipo;
    alerta.innerHTML = "<strong>¡Atención!</strong> " + mensaje;

    // Colocar el mensaje antes del formulario
    var formulario = document.getElementById("formulario");
    formulario.parentNode.insertBefore(alerta, formulario);

    // Eliminar la alerta después de unos segundos
    setTimeout(function() {
        alerta.parentNode.removeChild(alerta);
    }, 2000);  // La alerta desaparecerá después de 2 segundos (ajusta según tus preferencias)
}

function clasificarPorcentajeGrasa(porcentajeGrasa,sexoFactor) {

    
    var mensaje = "";
var mensaje2= "Porcentaje de grasa corporal: " + (porcentajeGrasa).toFixed(2) + "%";
    if (sexoFactor == 0) {
        if (porcentajeGrasa < 10) {
            mensaje = "Tu porcentaje de grasa corporal se encuentra en la categoría de Grasa esencial, es esencial para funciones biológicas básicas.";
        } else if (porcentajeGrasa >= 10 && porcentajeGrasa <= 13) {
            mensaje = "Tu porcentaje de grasa corporal está en el límite inferior de la categoría de Grasa esencial.";
        } else if (porcentajeGrasa > 13 && porcentajeGrasa <= 20) {
            mensaje = "¡Eres una atleta! Tu porcentaje de grasa corporal está en un rango saludable para el rendimiento atlético.";
        } else if (porcentajeGrasa > 20 && porcentajeGrasa <= 24) {
            mensaje = "Tu porcentaje de grasa corporal está en un rango saludable para el fitness general.";
        } else if (porcentajeGrasa > 24 && porcentajeGrasa <= 31) {
            mensaje = "Tu porcentaje de grasa corporal se encuentra en un rango aceptable según las recomendaciones de salud.";
        } else {
            mensaje = "¡Atención! Tu porcentaje de grasa corporal indica obesidad. Considera ajustar tu dieta y aumentar la actividad física.";
        }
    } else if (sexoFactor == 1) {
        if (porcentajeGrasa < 2) {
            mensaje = "Tu porcentaje de grasa corporal se encuentra en la categoría de Grasa esencial, es esencial para funciones biológicas básicas.";
        } else if (porcentajeGrasa >= 2 && porcentajeGrasa <= 5) {
            mensaje = "Tu porcentaje de grasa corporal está en el límite inferior de la categoría de Grasa esencial.";
        } else if (porcentajeGrasa > 5 && porcentajeGrasa <= 13) {
            mensaje = "¡Eres una atleta! Tu porcentaje de grasa corporal está en un rango saludable para el rendimiento atlético.";
        } else if (porcentajeGrasa > 13 && porcentajeGrasa <= 17) {
            mensaje = "Tu porcentaje de grasa corporal está en un rango saludable para el fitness general.";
        } else if (porcentajeGrasa > 17 && porcentajeGrasa <= 24) {
            mensaje = "Tu porcentaje de grasa corporal se encuentra en un rango aceptable según las recomendaciones de salud.";
        } else {
            mensaje = "¡Atención! Tu porcentaje de grasa corporal indica obesidad. Considera ajustar tu dieta y aumentar la actividad física.";
        }
    }
    document.getElementById("mensaje").innerHTML = mensaje + mensaje2;
    document.getElementById("modal").style.display = "block";
}





function cerrarModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("edad").value = "";
}



// animacion de colores al pasar el mouse
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const colors = ["#D1CDC5", "#948C7C  ", "##75726C  ", "#999895"]; // Colores de fondo
  
    function changeBackgroundColor() {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      body.style.backgroundColor = randomColor;
    }
  
    // Cambia el color de fondo cuando el mouse entra en cualquier parte de la página
    document.body.addEventListener("mouseenter", changeBackgroundColor);
  });