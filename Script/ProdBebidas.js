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
    //Categoria Aguas
    new Producto('Agua Con Gas La Cabaña De 2000 Ml', 7.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7771620590099_360x.png?v=1656732946', 'agua'),
    new Producto('Agua Con Gas La Cabaña De 500 Ml', 4, 'https://www.fidalga.com/cdn/shop/products/7771620590105_360x.png?v=1656733031', 'agua'),
    new Producto('Agua Con Gas La Sierra De 600 Mls', 4.5, 'https://www.fidalga.com/cdn/shop/products/7772115422604_360x.png?v=1657319974', 'agua'),
    new Producto('Agua Con Gas Mendocina De 1000 Ml', 4, 'https://www.fidalga.com/cdn/shop/products/7772115420648_360x.jpg?v=1656732271', 'agua'),
    new Producto('Agua Con Gas Mendocina De 2000 Ml', 5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7772115421164_360x.jpg?v=1656732360', 'agua'),
    new Producto('Agua Con Gas Mendocina De 600 Ml', 3, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7772115420747_360x.jpg?v=1656732331', 'agua'),
    new Producto('Agua Con Gas Vital 2 L', 7, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/d6372614-b518-4c73-8a99-12537cd89ab1_4ab1dba3-d9a2-4080-a511-953a85b9b273_360x.png?v=1653345015', 'agua'),
    new Producto('Agua Con Gas Vital 600 Ml', 4.5, 'https://www.fidalga.com/cdn/shop/products/4b75954a-759d-4c37-9367-ce8baf600365_75ec98f6-1c42-4043-923f-083395aaeaf3_360x.png?v=1653345016', 'agua'),
    new Producto('Agua Natural Sante 600 Ml', 3.5, 'https://www.fidalga.com/cdn/shop/products/7771260010018_360x.jpg?v=1656732737', 'agua'),
    new Producto('Agua Natural Sin Gas Mendocina De 2000 Ml', 5, 'https://www.fidalga.com/cdn/shop/products/7772115421157_360x.jpg?v=1656733156', 'agua'),
    new Producto('Agua Sin Gas Cielo De 625 Ml', 3, 'https://www.fidalga.com/cdn/shop/products/7771621061505_360x.jpg?v=1656733153', 'agua'),
    new Producto('Agua Sin Gas De La Sierra De 600 Ml', 4.5, 'https://www.fidalga.com/cdn/shop/products/7772115422543_360x.png?v=1657320111', 'agua'),
    new Producto('Agua Sin Gas Mendocina De 1000 Ml', 4, 'https://www.fidalga.com/cdn/shop/products/7772115420631_360x.png?v=1656732543', 'agua'),
    new Producto('Agua Sin Gas Villa Santa 2000 Ml', 4.7, 'https://www.fidalga.com/cdn/shop/products/7771611000002_360x.jpg?v=1656732735', 'agua'),
    new Producto('Agua Sin Gas Vital De 2000 Ml', 6.5, 'https://www.fidalga.com/cdn/shop/products/7771609000052_360x.png?v=1657319851', 'agua'),
    new Producto('Agua Sin Gas Vital De 350 Ml', 3, 'https://www.fidalga.com/cdn/shop/products/7771609001530_360x.jpg?v=1656732193', 'agua'),
    new Producto('Agua Sin Gas Vital De 600 Ml', 4.5, 'https://www.fidalga.com/cdn/shop/products/7771609000250_360x.jpg?v=1656732094', 'agua'),
    new Producto('Agua Sport Villa Santa De 600 Ml', 3.5, 'https://www.fidalga.com/cdn/shop/products/7771611000132_360x.jpg?v=1656732826', 'agua'),
    new Producto('Agua Tonica Canada Dry 355 Ml', 8.9, 'https://www.fidalga.com/cdn/shop/products/781240_360x.jpg?v=1656732699', 'agua'),
    new Producto('Agua Tonica Mendocina De 1000 Ml', 6, 'https://www.fidalga.com/cdn/shop/products/7772115420655_360x.jpg?v=1656732227', 'agua'),
    new Producto('Aguas Alcalina Del Inca De 750 Ml', 4, 'https://www.fidalga.com/cdn/shop/products/757817868889_360x.png?v=1657320058', 'agua'),
    //Categoria Jugos
    new Producto('Aloe Vera Drink All Fit Sin Azucar', 10.9, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7771621450019_300x.png?v=1657320186', 'jugo'),
    new Producto('Aloe Vera Frutilla Okf 500 Ml', 11.7, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/3887a220-e0c4-48cc-906a-37703325936e_2f769084-0197-48c8-af1b-f437a50813a5_300x.png?v=1653345395', 'jugo'),
    new Producto('Aloe Vera Original De 500 Ml', 11.7, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7778608080344_300x.jpg?v=1656732613', 'jugo'),
    new Producto('Aloe Vera Premium De 500 Ml', 7.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/77767295_300x.png?v=1657319957', 'jugo'),
    new Producto('Aloe Vera Sin Azucar Tai De 500 Ml', 11.7, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7778608080672_360x.jpg?v=1656732686', 'jugo'),
    new Producto('Aquarius De Manzana 2000 Ml', 11, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7771609000670_360x.jpg?v=1657715264', 'jugo'),
    new Producto('Aquarius De Pera 2 L', 11, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/188eb9d7-46f6-4364-b36d-2ffea7db637b_4f5c03c9-439c-4302-b85a-64fd214d9887_360x.png?v=1653345018', 'jugo'),
    new Producto('Aquarius De Pomelo 2000 Ml', 11.3, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7771609001134_360x.jpg?v=1657715322', 'jugo'),
    new Producto('Aquarius Pera 3000 Ml', 15, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7771609002520_360x.jpg?v=1657715352', 'jugo'),
    new Producto('Jugo Aloe Vera Drink Alovi De 350 Ml', 7.7, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/850005517535_360x.jpg?v=1656732373', 'jugo'),
    new Producto('Jugo Aquarius Pera 500 Ml', 5.2, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7771609000649_360x.jpg?v=1657376149', 'jugo'),
    new Producto('Jugo De Aloe Vera Sabor Granada OKF De 500 Ml', 11.7, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7778608080405_360x.jpg?v=1656732762', 'jugo'),
    new Producto('Jugo De Durazno Ades De 200 Ml', 3.6, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7794000792579_360x.jpg?v=1656732114', 'jugo'),
    new Producto('Jugo De Durazno Frut All De 200 Ml', 3.7, 'https://www.fidalga.com/cdn/shop/products/7772800000032_360x.png?v=1660166395', 'jugo'),
    new Producto('Jugo De Manzana Ades De 200 Ml', 3.6, 'https://www.fidalga.com/cdn/shop/products/7794000792555_360x.jpg?v=1656732100', 'jugo'),
    new Producto('Jugo De Manzana Del Valle De 2000 Ml', 13, 'https://www.fidalga.com/cdn/shop/products/7771609003077_360x.jpg?v=1656939208', 'jugo'),
    new Producto('Jugo De Manzana Frut All De 200 Ml', 3.7, 'https://www.fidalga.com/cdn/shop/products/7772800000018_360x.png?v=1660166438', 'jugo'),
    //Categoria Energizantes
    new Producto('Bebida Isotonica Sin Azucar Sabor Mora De 680 Ml', 8.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7770108770091_360x.png?v=1657320005', 'energizante'),
    new Producto('Bebida Isotonica Sabor Frambuesa Activade 1000 Ml', 9, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/777162138036_360x.jpg?v=1656732776', 'energizante'),
    new Producto('Bebida Isotonica Sin Azucar Sabor Fresa De 680 Ml', 8.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7770108770084_360x.png?v=1657320012', 'energizante'),
    new Producto('Ciclon Energy Drink De 350 Ml', 5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7771609003077_360x.jpg?v=1656939208', 'energizante'),
    new Producto('Ciclon Energy Drink De 500 Ml', 8, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/830207100001_360x.jpg?v=1656732427', 'energizante'),
    new Producto('Energizante Black De 330 Ml', 7.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/77766823_360x.jpg?v=1656732688', 'energizante'),
    new Producto('Energizante De Frambuesa Activade De 600 Ml', 6, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7771621380170_360x.jpg?v=1656732614', 'energizante'),
    new Producto('Energizante De Frutilla Activade De 600 Ml', 6, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7771621380187_360x.jpg?v=1656732570', 'energizante'),
    new Producto('Energizante Monster Energy De 473 Ml 24 Uni', 16, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/70847028406_360x.jpg?v=1656732650', 'energizante'),
    new Producto('Gatorade Cool Blue De 500 Ml', 6, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7792170042258_360x.jpg?v=1656732270', 'energizante'),
    new Producto('Gatorade Frutas Tropicales De 500 Ml', 6, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7792170042029_360x.jpg?v=1656732290', 'energizante'),
    new Producto('Maltin 473 Ml', 5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/80203924-550x550_360x.jpg?v=1653344302', 'energizante'),
    new Producto('Powerade Mora Azul De 473 Ml', 6.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7771609000496_360x.jpg?v=1656732160', 'energizante'),
    new Producto('Powerade Mora Azul De 990 Ml', 10, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7771609003268_360x.jpg?v=1656732149', 'energizante'),
    new Producto('Powerade Multifrutas 990 Ml', 10, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/f5d1254e-becd-448c-9cd0-417a76fd603b_9b98d02b-df48-4a90-af5e-2afb1f1c6ec6_360x.png?v=1653345393', 'energizante'),
    new Producto('Powerade Multifrutas De 473 Ml', 6.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7771609000526_360x.jpg?v=1656732125', 'energizante'),
    new Producto('Powerade Sabor Uva De 990 Ml', 10, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7771609003350_360x.jpg?v=1656732285', 'energizante'),
    new Producto('Red Bull Energy Drink De 250 Ml', 14.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/90376443_360x.jpg?v=1656732170', 'energizante'),
    new Producto('Rehidratante De Frambuesa Sante Sport 500 Ml', 6.7, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/dd47ca6a-a0ff-4c93-96fb-d83754b598d9_5e846815-d235-4fb1-a4b5-62bbac7e3c97_360x.png?v=1653345394', 'energizante'),
    new Producto('Rehidratante De Fresa Sante Sport 500 Ml', 6.7, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/6b9e62bc-8994-4007-96ab-025c19a16daa_c599348d-fdd9-4769-9c97-ae29797c35a9_360x.png?v=1653345397', 'energizante'),
    new Producto('Sante Plus Con Colageno Sabor Limon De 500 Ml', 7, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7771260010629_360x.jpg?v=1656732099', 'energizante'),
    new Producto('Sante Plus De Naranja Y Limon De 500 Ml', 7, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7771260010407_360x.jpg?v=1656732102', 'energizante'),
    new Producto('Sante Sport De Manzana De 500 Ml', 6.7, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7771260010070_360x.jpg?v=1656732504', 'energizante'),
    //Categoria Gaseosas
    new Producto('Gaseosa Coca-Cola 2 L', 10.5, 'https://www.fidalga.com/cdn/shop/products/b988f4c2-7f55-4ed9-a9f1-a26c8f4ebb56_d48c2e74-aa18-4a69-afa9-6521597f00e3_360x.png?v=1653345241', 'gaseosa'),
    new Producto('Gaseosa Coca-Cola 3 L', 14, 'https://www.fidalga.com/cdn/shop/products/df3f957f-2bf8-46cd-b4d7-100537bf55b7_107cd909-4796-4c68-95af-323e378461e4_360x.png?v=1653345252', 'gaseosa'),
    new Producto('Gaseosa Coca-Cola Peque 300 Ml', 2.9, 'https://www.fidalga.com/cdn/shop/products/COCA-COLA-PEQUE-SABOR-ORIGINAL-300ML_360x.png?v=1653343727', 'gaseosa'),
    new Producto('Gaseosa Coca-Cola Personal 500 Ml', 5.2, 'https://www.fidalga.com/cdn/shop/products/COCACOLA-ORIGINAL-PERSONAL-500ML_360x.png?v=1653343731', 'gaseosa'),
    new Producto('Gaseosa Fanta De 2000 Ml', 10.5, 'https://www.fidalga.com/cdn/shop/products/7771605000032_360x.jpg?v=1656732426', 'gaseosa'),
    new Producto('Gaseosa Fanta De 3000 Ml', 14, 'https://www.fidalga.com/cdn/shop/products/7771609001646_360x.jpg?v=1656732464', 'gaseosa'),
    new Producto('Gaseosa Fanta Naranja Peque 300 Ml', 2.9, 'https://www.fidalga.com/cdn/shop/products/FANTEA-PEQUE-NARANJA-300ML_360x.png?v=1653343935', 'gaseosa'),
    new Producto('Gaseosa Fanta Naranja Personal 500 Ml', 5.2, 'https://www.fidalga.com/cdn/shop/products/FANTA-PERSONAL-NARANJA-500ML_360x.png?v=1653343937', 'gaseosa'),
    new Producto('Gaseosa Pepsi 1L', 5, 'https://www.fidalga.com/cdn/shop/products/c5f7b58b-9774-4918-82af-86adab827560_5e7bbb65-cfb8-43b7-825c-e53c915cc24d_360x.png?v=1653345257', 'gaseosa'),
    new Producto('Gaseosa Pepsi 2 L', 8, 'https://www.fidalga.com/cdn/shop/products/4b7e7b26-3212-4ef3-9a7d-a1839d51baa0_f2f7e3a2-8392-481a-bb13-32fe34e86665_360x.png?v=1653345239', 'gaseosa'),
    new Producto('Gaseosa Pepsi De 3000 Ml', 12, 'https://www.fidalga.com/cdn/shop/products/7772106002877_360x.jpg?v=1656732180', 'gaseosa'),
    new Producto('Gaseosa Pepsi De 500 Ml', 4, 'https://www.fidalga.com/cdn/shop/products/7772106001481_360x.jpg?v=1656732197', 'gaseosa'),
    //Categoria Bebidas Alcoholicas
    new Producto('Freixenet Cordon Negro Burt 750 Ml', 125, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/freixenet-cordon-negro-brut-gran-seleccion-165371_360x.jpg?v=1653344941', 'alcohol'),
    new Producto('Vino Freixenet Delicate Y Sweet Moscato 750 Ml', 102.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/be72906_360x.jpg?v=1653344943', 'alcohol'),
    new Producto('Vino Freixenet Fresh Y Chisp 750 Ml', 102.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/D_NQ_NP_863700-MLA46809111458_072021-O_1_360x.jpg?v=1653344945', 'alcohol'),
    new Producto('Vino Premium Grand Cuvee Rossa 750 Ml', 50, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/vino-premium-dulce.grand-cuvee_360x.jpg?v=1653344950', 'alcohol'),
    new Producto('Vino Tinto Campo De Solana De 750 Ml', 22.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7772112000010_360x.jpg?v=1656733109', 'alcohol'),
    new Producto('Fernet Branca 750 Ml', 70, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/1220001_360x.jpg?v=1653343944', 'alcohol'),
    new Producto('Gin Bombay Sapphire 750 Ml', 194, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/bebida-gin-bombay-sapphire-750ml---7640175740047_360x.jpg?v=1653344273', 'alcohol'),
    new Producto('Ron Bacardi Limon De 750 Ml', 82, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/bacardi-limon-434970_360x.jpg?v=1653343518', 'alcohol'),
    new Producto('Ron Bacardi Manzana 750 Ml', 82, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/big-a1-fa7a4d521b9a75153815929225819917-1024-1024_360x.jpg?v=1653343515', 'alcohol'),
    new Producto('Vodka Smirnoff Nº21 750 Ml', 70, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/164133-large-vodka-smirnoff-n-21-37-5-lt-1-et-rossa_360x.jpg?v=1653344958', 'alcohol'),
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