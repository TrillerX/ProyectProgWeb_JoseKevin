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
    //Categoria Croquetas
    new Producto('Alimento De Gatitos Sabor Pollo Cat Chow Purina De 85 Gr', 6.3, 'https://www.fidalga.com/cdn/shop/products/7891000244012_360x.jpg?v=1656732927', 'croquetas'),
    new Producto('Alimento Para Gato Adulto Sabor Pescado Cat Chow Purina De 85 Gr', 6.3, 'https://www.fidalga.com/cdn/shop/products/7891000244661_360x.jpg?v=1656732982', 'croquetas'),
    new Producto('Alimento Para Gato Adulto Sabor Pollo Whiskas De 85 Gr', 7.6, 'https://www.fidalga.com/cdn/shop/products/7797453000550_360x.jpg?v=1656732904', 'croquetas'),
    new Producto('Alimento Para Gatos Adultos Sabor Carne Purina De 85 Gr', 6.3, 'https://www.fidalga.com/cdn/shop/products/7891000113066_360x.jpg?v=1656732851', 'croquetas'),
    new Producto('Alimento Para Gatos Adultos Sabor Pollo Cat Chow Purina De 85 Gr', 6.3, 'https://www.fidalga.com/cdn/shop/products/7891000244074_360x.jpg?v=1656732909', 'croquetas'),
    new Producto('Alimento Para Gatos Sabor Carne Whiskas 85 G', 7.6, 'https://www.fidalga.com/cdn/shop/products/a9e8d2d9-8bbc-4fce-acb8-5e1ff2c2d378_164c07ad-9d45-4824-a002-1b3a574a40ae_360x.png?v=1653345389', 'croquetas'),
    new Producto('Alimento Para Gatos Sabor Salmón Whiskas 85 G', 7.6, 'https://www.fidalga.com/cdn/shop/products/974ee2b6-8758-45d3-99fa-3ae7d6491045_4bda093f-272d-48d0-8ed3-f2aa3e39d3ef_360x.png?v=1653345383', 'croquetas'),
    new Producto('Alimento Para Perros Sabor Carne Cachorros Pedigree 85 G', 7.6, 'https://www.fidalga.com/cdn/shop/products/ea81cada-e41c-42e0-96eb-25d4c3edd43d_18a8ada5-9770-4225-9e7a-1d4b701d9fd3_360x.png?v=1653345381', 'croquetas'),
    new Producto('Arena Higienica Para Gatos Tidy Cat Purina 2 Kg', 30, 'https://www.fidalga.com/cdn/shop/products/33b319a6-ca9f-4656-841d-ed38204c8e5e_4daf894f-54b7-44c9-bb48-3f901b977a3d_360x.png?v=1653345390', 'croquetas'),
    new Producto('Bifecitos Sabor Carne En Salsas Adultos Pedigree 100 G', 7.6, 'https://www.fidalga.com/cdn/shop/products/e2346af9-38e7-467b-b9c1-d49b8d774f6e_a6e9cf18-cc81-489c-a911-c1657a84dd59_360x.png?v=1653345386', 'croquetas'),
    new Producto('Bifecitos Sabor Pollo En Salsa Adultos Pedigree 100 G', 7.6, 'https://www.fidalga.com/cdn/shop/products/854d810e-4a3a-4d0c-a31d-5cb5a8bec25a_e0136b96-22f1-4cfd-a264-8324928a4bf4_360x.png?v=1653345387', 'croquetas'),
    new Producto('Croquetas Gatitos Whiskas Carne Adulto 1 Kg', 47.2, 'https://www.fidalga.com/cdn/shop/products/CROQUETA-GATO-WHISKAS-SABOR-CARNE-ADULTO1_-10KG_360x.png?v=1653343778', 'croquetas'),
    new Producto('Croquetas Gatitos Whiskas Carne Adulto 500 G', 27.9, 'https://www.fidalga.com/cdn/shop/products/CROQUETA-GATO-WHISKAS-SABOR-CARNE-ADULTO1_-500G_360x.png?v=1653343775', 'croquetas'),
    new Producto('Croquetas Gatitos Whiskas Carne Y Leche 2 A 12 Meses 1 Kg', 47.2, 'https://www.fidalga.com/cdn/shop/products/CROQUETA-GATITOS-WHISKAS-SABOR-CARNE-Y-LECHE-2A12MESES-1KG_360x.png?v=1653343773', 'croquetas'),
    new Producto('Croquetas Gatitos Whiskas Carne Y Leche 2 A 12 Meses 1 Kg', 27.9, 'https://www.fidalga.com/cdn/shop/products/CROQUETA-GATITOS-WHISKAS-SABOR-CARNE-Y-LECHE-2A12MESES-500G_360x.png?v=1653343771', 'croquetas'),
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