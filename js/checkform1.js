function enableSubmitButton() {
  var propietarioCheckbox = document.getElementById('propietario');
  var enviarButton = document.getElementById('enviar');

  enviarButton.disabled = !propietarioCheckbox.checked;
}

window.addEventListener('DOMContentLoaded', function() {
  var propietarioCheckbox = document.getElementById('propietario');
  var enviarButton = document.getElementById('enviar');

  enviarButton.disabled = !propietarioCheckbox.checked;

  propietarioCheckbox.addEventListener('change', function() {
    enableSubmitButton();
  });
});

  
function showConfidentialInfoForm() {
  var terceroCheckbox = document.getElementById('tercero');
  var confidentialInfoForm = document.getElementById('confidential-info-form');

  if (terceroCheckbox.checked) {
    confidentialInfoForm.style.display = 'block';
  } else {
    confidentialInfoForm.style.display = 'none';
  }
}

function validar() {
  // Validar el campo "Correo Electronico"
  var correo = document.getElementById('correo').value;
  var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
  if (!expresion.test(correo)) {
    alert("Ingrese un correo electrónico válido");
    return false;
  }

  // Validar el campo "Teléfono"
  var telefono = document.getElementById('telefono').value;
  if (telefono.length !== 10 || isNaN(telefono)) {
    alert("Ingrese un número de teléfono válido (10 dígitos)");
    return false;
  }
  // Deshabilitar el botón y cambiar el mensaje
  var boton = document.getElementById('enviar');
  boton.disabled = true;
  boton.value = 'Enviando datos...';

  // Enviar el formulario
  this.form.submit();
  return true;
}

function borrarDatos() {
    document.getElementById("codigo").value = '';
    document.getElementById("referencia").value = '';
    document.getElementById("precio").value = '';
  }