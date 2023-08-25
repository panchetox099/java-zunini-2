const inputFecha = document.getElementById("fecha");
    inputFecha.min = new Date().toISOString().split("T")[0];




    const motivosSelect = document.getElementById('motivos');
    const motivosParrafo = document.getElementById('motivos-seleccionados');
  
    motivosSelect.addEventListener('change', () => {
      const opcionesSeleccionadas = Array.from(motivosSelect.selectedOptions).map(option => option.text);
      const motivos = opcionesSeleccionadas.join(', ');
      motivosParrafo.textContent = `Motivos seleccionados: ${motivos}`;
    });



    const motivos = ['Cambios de prendas', 'Olvide mi usuario y contraseña', 'Como comprar', 'Seguimiento de pedido', 'Otros'];
    const motivosActualizadosParrafo = document.getElementById('motivos-actualizados');
  
    function agregarMotivo() {
      const nuevoMotivo = document.getElementById('nuevo-motivo').value;
      motivos.unshift(nuevoMotivo);
      motivosActualizadosParrafo.textContent = `Motivos actualizados: ${motivos.join(', ')}`;
    }





    const correos = ['correo1@example.com', 'correo2@example.com', 'correo3@example.com'];
  const resultadoEmail = document.getElementById('resultado-email');

  function verificarEmail() {
    const nuevoEmail = document.getElementById('nuevo-email').value;
    const existe = correos.includes(nuevoEmail);

    if (existe) {
      resultadoEmail.textContent = `El correo ${nuevoEmail} ya está registrado.`;
    } else {
      resultadoEmail.textContent = `El correo ${nuevoEmail} no está registrado.`;
    }
  }





  function verificarNumero() {
    const numero = document.getElementById('numero').value;
    const contieneCero = numero.includes('0');
    
    if (contieneCero) {
      resultadoNumero.textContent = `El número contiene el dígito 0.`;
    } else {
      resultadoNumero.textContent = `El número no contiene el dígito 0.`;
    }
  }
  
  const resultadoNumero = document.getElementById('resultado-numero');

