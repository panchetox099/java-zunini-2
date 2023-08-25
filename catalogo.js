
alert("¡Atencion, vas a entrar al mejor mercado de camisetas de Argentina, si no queres gastar plata ni entres!");


var carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    var carritoHTML = '';
    var total = 0;

    for (var i = 0; i < carrito.length; i++) {
        carritoHTML += '<p>' + carrito[i].nombre + ' - ' + carrito[i].precio + ' $</p>';
        total += carrito[i].precio;
    }

    document.getElementById('carrito').innerHTML = carritoHTML;
    document.getElementById('total').innerHTML = 'Total: ' + total + ' $';
}


var carrito = []; // Supongamos que ya tienes un arreglo de productos en el carrito

function eliminarProducto(index) {
    carrito.splice(index, 1); // Elimina el producto en el índice dado
    actualizarCarrito(); // Llama a la función para actualizar la vista del carrito
}

function actualizarCarrito() {
    var carritoHTML = '';

    for (var i = 0; i < carrito.length; i++) {
        var producto = carrito[i];
        carritoHTML += `
            <div class="producto">
                <p>${producto.nombre} - ${producto.precio} $</p>
                <button onclick="eliminarProducto(${i})">Eliminar</button>
            </div>
            `;
    }

    document.getElementById('carrito').innerHTML = carritoHTML;
}





var carrito = [];


function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function calcularTotalCarrito() {
    var total = 0;
    for (var i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    return total;
}

function actualizarCarrito() {
    var carritoHTML = '';
    var totalCarrito = calcularTotalCarrito();

    for (var i = 0; i < carrito.length; i++) {
        carritoHTML += `
            <div class="producto">
                <p>${carrito[i].nombre} - ${carrito[i].precio} $</p>
                <button onclick="eliminarDelCarrito(${i})">Eliminar</button>
            </div>
        `;
    }

    document.getElementById('carrito').innerHTML = carritoHTML;
    document.getElementById('total').textContent = totalCarrito;
}





const tallas1 = ['S', 'M', 'L'];
const tallas2 = ['XL', 'XXL'];

function combinarTallas() {
  const tallasCombinadas = tallas1.concat(tallas2);
  const tallasParrafo = document.getElementById('tallas-combinadas');
  tallasParrafo.textContent = `Tallas combinadas: ${tallasCombinadas.join(', ')}`;
}




const catalogo = [
    {
      imagen: "../images/francia.jpg",
      nombre: "Camiseta Francia 2018",
      precio: "13,999$"
    },
    {
      imagen: "../images/seleccion.jpg",
      nombre: "Camiseta Selección Argentina 2014",
      precio: "13,999$"
    },
    {
      imagen: "../images/camiseta-de-boca.jpg",
      nombre: "Camiseta Boca Juniors Temporada 2011",
      precio: "13,999$"
    }
    // Puedes agregar más objetos aquí para más camisetas
  ];

  function mostrarCatalogo() {
    const catalogoDiv = document.getElementById('catalogo');

    catalogo.forEach(camiseta => {
      const camisetaHTML = `
        <div class="producto">
          <img src="${camiseta.imagen}" width="200" alt="${camiseta.nombre}">
          <p>${camiseta.nombre}</p>
          <p class="precio">${camiseta.precio}</p>
        </div>
      `;
      catalogoDiv.innerHTML += camisetaHTML;
    });
  }

  // Llama a la función para mostrar el catálogo al cargar la página
  window.onload = mostrarCatalogo;


// Función de orden superior para filtrar camisetas por precio
const filtrarPorPrecio = (camisetas, precioMaximo) => {
  return camisetas.filter(camiseta => camiseta.precio <= precioMaximo);
};



function calcularTiempoEnvio(dias) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`El envío llegará en ${dias} días`);
    }, 2000);
  });
}

const appDiv = document.getElementById("app");

calcularTiempoEnvio(3).then(mensaje => {
  appDiv.innerHTML = `<p>${mensaje}</p>`;
});