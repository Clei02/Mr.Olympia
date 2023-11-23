// console.log("Hablalo mi rey");
let personas = [];

class Persona{
    
    constructor(documento,nombres,email,contraseña){
        this.documento= documento;
        this.nombres= nombres;
        this.email=email;
        this.contraseña=contraseña;
    }
    // actualizaTabla() {
    //     // Borra la tabla
    //     const table = document.getElementById("tableclei");
    //     table.innerHTML = "";

    //     // Vuelve a agregar todas las personas al HTML
    //     for (const persona of personas) {
    //         this.leaObjeto(persona);
    //     }
    // }

    creaObjetos(){
        const documentoH= document.getElementById("documento").value;
        persona.documento= documentoH;
        const nombresH= document.getElementById("nombres").value;
        persona.nombres= nombresH;
        const emailH= document.getElementById("email").value;
        persona.email= emailH;
        const contraseñaH= document.getElementById("contraseña").value;
        persona.contraseña= contraseñaH;
        personas.push(persona);
        persona.leaObjeto();
        this.guardaDatos();
    }
    // leaObjeto(){
    //     document.getElementById("tbody").innerHTML += "<tr><td>" + persona.documento + "</td><td>" + persona.nombres + "</td><td>" + persona.email + "</td><td>" + persona.contraseña + "</td></tr>";
    // }
    leaObjeto() {
        document.getElementById("tbody").innerHTML += `<tr id= ${persona.documento}> 
        <td>${persona.documento}</td>
        <td>${persona.nombres}</td>
        <td>${persona.email}</td>
        <td>${persona.contraseña}</td>
        <tr>`
    }

    eliminaObjeto(documentoAEliminar) {
        const table = document.getElementById("tableclei");
        const rows = table.getElementsByTagName("tr");

        for (let i = 1; i < rows.length; i++) {
            const currentRow = rows[i];
            const cells = currentRow.getElementsByTagName("td");

            for (let j = 0; j < cells.length; j++) {
                if (cells[j].innerHTML === documentoAEliminar) {
                    table.deleteRow(i);
                    return;
                }
            }
        }

        console.log("Fila no encontrada en la tabla");
    }
    existe(documento){
        for (let i = 0; i < personas.length; i++) {
            if(personas[i].documento== documento) return true;
        }
        return false;
    }
    
    actualizarUsuario(documento){
        persona.documento= documento;
        const nombresH= document.getElementById("nombres").value;
        persona.nombres= nombresH;
        const emailH= document.getElementById("email").value;
        persona.email= emailH;
        const contraseñaH= document.getElementById("contraseña").value;
        persona.contraseña= contraseñaH;  
        const tr = document.getElementById(documento).innerHTML=`<tr id= ${persona.documento}> 
        <td>${persona.documento}</td>
        <td>${persona.nombres}</td>
        <td>${persona.email}</td>
        <td>${persona.contraseña}</td>
        <tr>`;
    }
    

}

// + "</td><td>" + persona.nombre + "</td><td>" + persona.email + "</td><td>" + persona.contraseña + "</td><td>" + persona.rol + 