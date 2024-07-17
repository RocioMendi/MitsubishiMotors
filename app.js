function guardarDatos() {
    let datosFormulario = {
      nombre: document.getElementById('nombre').value.trim(),
      email: document.getElementById('email').value.trim(),
      asunto: document.getElementById('asunto').value.trim(),
      mensaje: document.getElementById('mensaje').value.trim()
    };

    // Convertir datos a JSON
    let datosJSON = JSON.stringify(datosFormulario);

    // Guardar datos en localStorage
    localStorage.setItem('formularioContacto', datosJSON);

    // Mostrar mensaje de éxito 
    alert('Datos guardados localmente.');

    // Prevenir que el formulario se envíe al servidor
    return false;
  }

  let datosGuardados = localStorage.getItem('datosFormulario');
    if (datosGuardados) {
      let datosParseados = JSON.parse(datosGuardados);
      console.log('Datos guardados:', datosParseados);
      // 
    }