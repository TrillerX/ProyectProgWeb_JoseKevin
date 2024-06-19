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
    //Categoria Res
    new Producto('Cabeza de Res con Lengua', 316.5, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/48930c8a1679ce6534103b265dcc493d_360x.jpg?v=1681240908', 'res'),
    new Producto('Lengua de Res', 145.5, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/d0dfb0f621faa15501dd7b52e919713b_360x.jpg?v=1681238789', 'res'),
    new Producto('Filete de Res', 130.5, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/4d9661a9953e9683a97c6fd4f132b5bd_360x.jpg?v=1681238525', 'res'),
    new Producto('Cecina', 96.9, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/a5ab714aa0e8fac13c8c35cb02bbab5d_360x.jpg?v=1681238617', 'res'),
    new Producto('Picaña de Res', 92.9, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/04054e625b9ba994a3b6b2da1c470fbd_360x.jpg?v=1681241527', 'res'),
    new Producto('Toma Hawk', 91.8, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/ffe81efa3e36503a60b2a29823f2683c_360x.jpg?v=1681241042', 'res'),
    new Producto('Carne Molida de Res Premium Supermeat', 76.0, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/2b3f394e5b74e4015bd08cb637974ae8_360x.jpg?v=1682091231', 'res'),
    new Producto('Asadura de Res Supermeat', 73.1, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/511116b5368161aa56ded57db913fa9e_360x.jpg?v=1681240319', 'res'),
    new Producto('Ribeye', 71.5, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/7aae8b554cc3ffe01381e226ceab2095_360x.jpg?v=1681240533', 'res'),
    //Categoria Cerdo
    new Producto('Manteca blanca cubeta de 15 kg', 311.5, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/63a3f893ac3676b38e888fb8cdcec874_360x.jpg?v=1681238771', 'cerdo'),
    new Producto('Tripa de cerdo (mazo de 5-10 pzas)', 181.6, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/841ef725dda2995fe136b7eac41e057c_360x.jpg?v=1681241329', 'cerdo'),
    new Producto('Sancocho pellet', 103.4, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/ebc77e970090be8adc25a38297df3098_360x.jpg?v=1681238844', 'cerdo'),
    new Producto('Chicharrón botanero-pellet', 83.8, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/92513c5ad305bdeac661ca51d809add4_360x.jpg?v=1681238849', 'cerdo'),
    new Producto('Arrachera Especial', 62.5, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/e3e35c99c346b5ea34aed496fd204ea6_f21ac44f-62ab-4a1d-b8cf-b980b03ae534_360x.jpg?v=1681240294', 'cerdo'),
    new Producto('Cabeza de lomo de cerdo', 53.8, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/507d81b35c251ce4353593b26d053cd2_360x.jpg?v=1691444768', 'cerdo'),
    new Producto('Bistec Adobado de Cerdo Supermeat', 41.5, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/07d1ed223bb3c4527f85d6809fd7e1a2_360x.jpg?v=1681238627', 'cerdo'),
    new Producto('Bistec de Cerdo Picado', 34.0, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/25c52fad3666044cfcf5f818d936875e_360x.jpg?v=1681238810', 'cerdo'),
    new Producto('Pulpa especial de cerdo', 33.9, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/f153025f179c2579d793618d2f7e8ddf_360x.jpg?v=1681238826', 'cerdo'),
    new Producto('Bistec de Cerdo', 33.2, 'https://supermeat.mx/cdn/shop/products/0a7732e33081d8811f939c008afb0fbd_360x.jpg?v=1681238754', 'cerdo'),
    new Producto('Pierna de cerdo', 17.7, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/5c4a0a2e7f459c8a60c9364f827d5763_360x.jpg?v=1681238460', 'cerdo'),
    //Categoria Pollo
    new Producto('Pollo Campero Especial', 48.5, 'https://enmerjosa.com/wp-content/uploads/2015/05/311-thickbox_default-POLLO-DE-CORRAL-ESPECIAL-300x300.jpg', 'pollo'),
    new Producto('Hamburguesa de Pollo', 38.7, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/d0f7fb20ee345fa060cef18dcefaa112_360x.jpg?v=1681241581', 'pollo'),
    new Producto('Pechuga de Pollo', 35.1, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/af18a1010425f0cadbf98d22b754c06f_360x.jpg?v=1681238707', 'pollo'),
    new Producto('Nuggets de Pollo', 30.7, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/361f1c2085d7ccca61fc5203f39b76b2_360x.jpg?v=1681238546', 'pollo'),
    new Producto('Huevo', 19.1, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/11722a55101f1c6081b9d639cc35f37f_360x.jpg?v=1681238874', 'pollo'),
    new Producto('Pierna y Muslo de Pollo', 10.0, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/a2e16d3aeec71df01462797852bbb461_360x.jpg?v=1681238554', 'pollo'),
    new Producto('Pierna y Muslo de Pollo por caja de 18.2 kg', 8.5, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/71d85ee2812ae5c86da374043f23e7fb_360x.jpg?v=1681240169', 'pollo'),
    //Categoria Salchichonería & Cremería
    new Producto('Jamón Pechuga de Pavo Fina Ahumada del Patrón', 73.1, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/9bd169f01a06e85e826f646c0553b7e0_360x.jpg?v=1681238655', 'embutidos'),
    new Producto('Salchicha Frankfurt (Alpino) 2.4 kg', 67.1, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/d68326958346d2423be9be014f326520_360x.jpg?v=1687382717', 'embutidos'),
    new Producto('Jamón Pechuga de Pavo', 58.7, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/f3ea558829116e9768b030e2fd1a7bb2_b8a1acf7-9d2e-401f-8c2a-975a7cce840f_360x.jpg?v=1681238724', 'embutidos'),
    new Producto('Salchicha de Pavo (Chero)', 57.9, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/3fa927c97a1717a50c56bff54cf346f3_360x.jpg?v=1686608717', 'embutidos'),
    new Producto('Chuleta de Cerdo Ahumada Nayar', 57.1, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/31754e3798f6caf0674ffbc7def5aabc_360x.jpg?v=1681238451', 'embutidos'),
    new Producto('Chorizo Argentino', 56.7, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/a936bd4149fbaa3ee8cc6b88dc578218_360x.jpg?v=1681238684', 'embutidos'),
    new Producto('Queso Oaxaca', 55.5, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/01a8ff8dc43915e09491accb1ed6f82a_360x.jpg?v=1681238889', 'embutidos'),
    new Producto('Chorizo Chistorra', 53.9, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/813825ffb684ac29a9eb450bbef3f77e_360x.jpg?v=1681238829', 'embutidos'),
    new Producto('Queso Manchego Imitación Blanco por kilo', 38.7, 'https://cdn.shopify.com/s/files/1/0455/0751/0428/products/549b9ff64f77c013e636075cda01fc6e_57548b41-a4fc-4a0a-9ac7-02e7c03e06d5_360x.jpg?v=1686412989', 'embutidos'),
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
    generarProductos('limpieza'); // Mostrar productos de la categoría 'agua' al cargar la página
};