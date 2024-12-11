function mostrarFormulario() {
    document.getElementById("inicio").style.display = "none";  
    document.getElementById("formCita").style.display = "block"; 
}

function mostrarInicio() {
    document.getElementById("formCita").style.display = "none";  
    document.getElementById("inicio").style.display = "block";  
}

function agregarCita(event) {
    event.preventDefault();  

    const paciente = document.getElementById("paciente").value;
    const apellidos = document.getElementById("apellidos").value;
    const cedula = document.getElementById("cedula").value;
    const edad = document.getElementById("edad").value;
    const sexo = document.getElementById("sexo").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const medico = document.getElementById("medico").value;
    const especialidad = document.getElementById("especialidad").value;

    const nuevaFila = document.createElement("tr");

    nuevaFila.innerHTML = `
        <td>${paciente}</td>
        <td>${apellidos}</td>
        <td>${cedula}</td>
        <td>${edad}</td>
        <td>${sexo}</td>
        <td>${telefono}</td>
        <td>${direccion}</td>
        <td>${fecha}</td>
        <td>${hora}</td>
        <td>${medico}</td>
        <td>${especialidad}</td>
    `;

    document.getElementById("tablaCuerpo").appendChild(nuevaFila);

    document.getElementById("formularioCita").reset();
}
