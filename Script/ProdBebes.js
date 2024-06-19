document.getElementById('scrollContacto').addEventListener('click', function () {
    document.getElementById('contac').scrollIntoView({ behavior: 'smooth' });
});

var btnCateg = document.getElementById('btnCateg');
function toggleBtnCateg() {
    if (btnCateg.style.display === 'none') {
        btnCateg.style.display = 'flex';
    } else {
        btnCateg.style.display = 'none';
    }
}

class Producto {
    constructor(nombre, precio, imagenUrl, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagenUrl = imagenUrl;
        this.categoria = categoria; // Agregar categoría al constructor
        this.cantidad = 1;
    }

    aumentarCantidad() {
        this.cantidad++;
    }

    disminuirCantidad() {
        if (this.cantidad > 0) {
            this.cantidad--;
        }
    }
}

const productos = [
    //Categoria Pañales
    new Producto('Pañal Active Sec XG Huggies De 66 Uni', 155, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7702425805910_360x.jpg?v=1656733499', 'pañales'),
    new Producto('Pañal Extra Proteccion M Pequeñin De 48 Uni', 79.3, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7707181177158_360x.jpg?v=1656733517', 'pañales'),
    new Producto('Pañal Extra Proteccon Pequeñin 3G De 40 Uni', 79.3, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7707181177073_360x.jpg?v=1656733512', 'pañales'),
    new Producto('Pañal Extraconfort XXG Pequeñin De 32 Uni', 76, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7707181107711_360x.jpg?v=1656733504', 'pañales'),
    new Producto('Pañal G Pompiglos De 42 Uni', 79, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7770108105244_360x.jpg?v=1657320207', 'pañales'),
    new Producto('Pañal Huggies Active Sec Pants G3 80 U', 155, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/PANAL-HUGGIES-Gl3-80UNIDADES_360x.png?v=1653344493', 'pañales'),
    new Producto('Pañal Huggies Natural Care G 52', 113, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/PANAL-HUGGIES-G-52UNIDADES_360x.png?v=1653344497', 'pañales'),
    new Producto('Pañal Huggies Natural Care Prematuro 30 U', 58.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/PANAL-HUGGIES-PR-30UNIDADES_360x.png?v=1653344488', 'pañales'),
];

let carrito = [];
let totalPagar = 0;

function generarProductos(categoria) {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = ''; // Limpiamos la lista antes de agregar productos

    productos.forEach(producto => {
        if (producto.categoria === categoria) {
            listaProductos.innerHTML += `
        <div class="producto">
            <img src="${producto.imagenUrl}" alt="${producto.nombre}">
            <p>${producto.nombre}</p> <!-- Nombre del producto -->
            <p>Precio: Bs ${producto.precio.toFixed(2)} </p>
            <button class="agregar-carrito" onclick="agregarProductoAlCarrito(${productos.indexOf(producto)})">Agregar al Carrito</button>
        </div>
    `;
        }
    });
}

function toggleCarrito() {
    const carritoPanel = document.getElementById('carrito-panel');


    carritoPanel.style.display = carritoPanel.style.display === 'block' ? 'none' : 'block';
}

function agregarProductoAlCarrito(index) {
    const producto = productos[index];
    const productoExistente = carrito.find(item => item.nombre === producto.nombre);
    if (productoExistente) {
        productoExistente.aumentarCantidad();
    } else {
        carrito.push(new Producto(producto.nombre, producto.precio, producto.imagenUrl));
    }
    actualizarCarrito();
}
// Suponiendo que tienes botones con ids que corresponden a las categorías
document.getElementById('categoria1').addEventListener('click', function () {
    generarProductos('categoria1');
});

document.getElementById('categoria2').addEventListener('click', function () {
    generarProductos('categoria2');
});


function actualizarCarrito() {
    const carritoHTML = document.getElementById('productos-carrito');
    carritoHTML.innerHTML = '';
    totalPagar = 0;
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        totalPagar += subtotal;
        carritoHTML.innerHTML += `
            <div class="producto-carrito">
                <img src="${item.imagenUrl}" alt="${item.nombre}">
                <span>${item.nombre}</span>
                <button class="quitar-producto" onclick="quitarProducto('${item.nombre}')">x</button>
                <button onclick="disminuirCantidad('${item.nombre}')">-</button>
                <span>${item.cantidad}</span>
                <button onclick="aumentarCantidad('${item.nombre}')">+</button>
                <span>${subtotal.toFixed(2)}</span>
            </div>
        `;
    });
    document.getElementById('total-pagar').innerText = `Total a pagar: Bs ${totalPagar.toFixed(2)}`;
    document.getElementById('contador-carrito').innerText = carrito.reduce((total, item) => total + item.cantidad, 0);
}

function aumentarCantidad(nombre) {
    const producto = carrito.find(item => item.nombre === nombre);
    if (producto) {
        producto.aumentarCantidad();
        actualizarCarrito();
    }
}

function disminuirCantidad(nombre) {
    const producto = carrito.find(item => item.nombre === nombre);
    if (producto) {
        producto.disminuirCantidad();
        if (producto.cantidad === 0) {
            carrito = carrito.filter(item => item.nombre !== nombre);
        }
        actualizarCarrito();
    }
}

function quitarProducto(nombre) {
    carrito = carrito.filter(item => item.nombre !== nombre);
    actualizarCarrito();
}

function pagarCompra() {
    if (totalPagar === 0) {
        alert("Agrega productos para realizar la compra.");
    } else {
        alert(`Compra realizada. Total a pagar: Bs ${totalPagar.toFixed(2)}`);
        carrito = [];
        actualizarCarrito();
    }
}

window.onload = function () {
    generarProductos('agua'); // Mostrar productos de la categoría 'agua' al cargar la página
};