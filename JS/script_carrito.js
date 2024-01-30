const storedCarrito = localStorage.getItem("carrito");
const carrito = storedCarrito ? JSON.parse(storedCarrito) : {};

function agregarAlCarrito(producto, precio) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || {};
  if (carrito[producto]) {
    carrito[producto].cantidad++;
  } else {
    carrito[producto] = { precio, cantidad: 1 };
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
}

function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || {};
  const itemsCarrito = document.getElementById("itemsCarrito");
  itemsCarrito.innerHTML = "";

  Object.keys(carrito).forEach((producto) => {
    const div = document.createElement("div");
    div.innerHTML = `${producto} - Cantidad: ${carrito[producto].cantidad}
        <button onclick="quitarDelCarrito('${producto}')">Quitar uno</button>`;
    itemsCarrito.appendChild(div);
  });
}

window.onload = function () {
  mostrarCarrito();
};

function quitarDelCarritoEnCarrito(producto) {
  if (carrito[producto] && carrito[producto].cantidad > 0) {
    carrito[producto].cantidad--;
    if (carrito[producto].cantidad === 0) {
      delete carrito[producto];
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }
}

function vaciarCarrito() {
  carrito = {};
  actualizarCarrito();
}

function quitarDelCarrito(producto) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || {};
  if (carrito[producto] && carrito[producto].cantidad > 0) {
    carrito[producto].cantidad--;
    if (carrito[producto].cantidad === 0) {
      delete carrito[producto];
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
  }
}

function actualizarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || {};
  const itemsCarrito = document.getElementById("itemsCarrito");
  itemsCarrito.innerHTML = "";

  Object.keys(carrito).forEach((producto) => {
    const div = document.createElement("div");
    div.innerHTML = `${producto} - Cantidad: ${carrito[producto].cantidad}
        <button onclick="quitarDelCarrito('${producto}')">Quitar uno</button>`;
    itemsCarrito.appendChild(div);
  });
}
