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
    //Categoria Artículos De Limpieza
    new Producto('Esponja Scotch Brite 4 Unidades', 6.3, 'https://www.fidalga.com/cdn/shop/products/1ab26db2-b4a3-43ee-a47f-0f8dd6e189d7_8b5aca3c-c042-4b27-804a-4e4af60f8bf1_360x.png?v=1653345377', 'limpieza'),
    new Producto('Esponja Scotch Brite', 5.5, 'https://www.fidalga.com/cdn/shop/products/7891040146420_360x.jpg?v=1656732987', 'limpieza'),
    new Producto('Esponja Multiuso Ola De 4 Unidades', 5.9, 'https://www.fidalga.com/cdn/shop/products/7777906051629_360x.jpg?v=1656732589', 'limpieza'),
    new Producto('Pack Esponjas Multiproposito Ola De 3 Unidades', 8, 'https://www.fidalga.com/cdn/shop/products/7775000010528_360x.jpg?v=1656733150', 'limpieza'),
    new Producto('Bolsa De Basura Ultra Ola 90x110 De 10 Unidades', 19, 'https://www.fidalga.com/cdn/shop/products/7771258090183_360x.jpg?v=1656733070', 'limpieza'),
    new Producto('Bolsas Basureras Ola 78X95Cm 75L 10 Unidades', 17.9, 'https://www.fidalga.com/cdn/shop/products/903a238c-250a-438e-a730-2d05b34384e4_d43ffcc2-384f-4c4b-bb6b-a2df1cfec734_360x.png?v=1653345350', 'limpieza'),
    new Producto('Bolsa Negra Criselda 73x90 De 10 Unidades', 12, 'https://www.fidalga.com/cdn/shop/products/2304174_360x.png?v=1657320137', 'limpieza'),
    new Producto('Bolsa Negra Ola 56x50 De 10 Unidades', 8, 'https://www.fidalga.com/cdn/shop/products/7775000011624_360x.jpg?v=1656733071', 'limpieza'),
    new Producto('Guante Domestico Ola Amarillo Talla L 1 Unidad', 13.5, 'https://www.fidalga.com/cdn/shop/products/4326e74a-648b-460a-9470-9727cd631fb8_3524f6b7-eb73-41e2-96d9-fc9db3644955_360x.png?v=1653345363', 'limpieza'),
    new Producto('Lavavajilla Sapolio Triple Concentrado 750 Ml', 8.6, 'https://www.fidalga.com/cdn/shop/products/SAPOLIO-LAVAVAJILLA-TRIPLE-CONCENTRADO_1_360x.png?v=1653344744', 'limpieza'),
    new Producto('Lavavajilla Sapolio Limon 1000 G', 12, 'https://www.fidalga.com/cdn/shop/products/306081-1_360x.png?v=1653344224', 'limpieza'),
    new Producto('Pastilla Para Estanque Azul Igenix De 3 Unidades', 33, 'https://www.fidalga.com/cdn/shop/products/7805040003614_360x.jpg?v=1656732841', 'limpieza'),
    new Producto('Pastilla Para Inodoro Marina Ola Aromatic 40 G', 5.5, 'https://www.fidalga.com/cdn/shop/products/7775000004671_360x.jpg?v=1657381561', 'limpieza'),
    new Producto('Escoba Dolly Multiuso Scotch Brite', 38.6, 'https://www.fidalga.com/cdn/shop/products/7750373006682_360x.jpg?v=1656733203', 'limpieza'),
    new Producto('Trapeador Algodon Novica Con Palo X12', 41.5, 'https://www.fidalga.com/cdn/shop/products/7896001019522_360x.jpg?v=1656733243', 'limpieza'),
    new Producto('Paño Bianco Doble Para Piso', 4.5, 'https://www.fidalga.com/cdn/shop/products/7891187287635_360x.png?v=1657319877', 'limpieza'),
    new Producto('Franela Naranja Chupa Todo 37x40 Cm', 5, 'https://www.fidalga.com/cdn/shop/products/779800013555_360x.jpg?v=1656732913', 'limpieza'),
    new Producto('Franela Naranja 35x40 Todo Brillo', 6.6, 'https://www.fidalga.com/cdn/shop/products/7774904284332_360x.png?v=1657319911', 'limpieza'),
    new Producto('Paño Absorbente De Cocina Scotch Brite De 3 Unidades', 25.1, 'https://www.fidalga.com/cdn/shop/products/7890000543211_360x.jpg?v=1656732560', 'limpieza'),
    //Categoria Productos De Limpieza
    new Producto('Antigrasa Ola Maximus De 890 Ml', 23.5, 'https://www.fidalga.com/cdn/shop/products/7775000006217_360x.jpg?v=1656732862', 'producto'),
    new Producto('Antigrasa Ola Maximus De 890 Ml', 19.5, 'https://www.fidalga.com/cdn/shop/products/7775000006224_360x.jpg?v=1656732318', 'producto'),
    new Producto('Saca Grasa Aroma Limon Todo Brillo De 900 Ml', 13.9, 'https://www.fidalga.com/cdn/shop/products/7774904400046_360x.jpg?v=1656732639', 'producto'),
    new Producto('Antigrasa Ultra Rapido Biodegradable Cif De 450 Ml', 12.9, 'https://www.fidalga.com/cdn/shop/products/7791290789883_360x.jpg?v=1656733104', 'producto'),
    new Producto('Saca Grasa Sapolio De 500 Ml', 8.7, 'https://www.fidalga.com/cdn/shop/products/7751851003971_360x.jpg?v=1656732842', 'producto'),
    new Producto('Saca Grasa Sapolio De 500 Ml', 7.3, 'https://www.fidalga.com/cdn/shop/products/7751851010672_360x.jpg?v=1656732741', 'producto'),
    new Producto('Lustra Muebles Flores Ola 3 En 1 850 Ml', 25, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/OLA-LUSTRA-MUEBLES-FLORES-3EN1-850ML_360x.png?v=1653344460', 'producto'),
    new Producto('Lustra Mueble Todo Brillo De 900 Ml', 14.2, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7774904400053_360x.jpg?v=1656732953', 'producto'),
    new Producto('Limpia Baños Ola Maximus De 890 Ml', 23.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7775000006132_360x.jpg?v=1656732966', 'producto'),
    new Producto('Limpia Baños Ola Maximus 3D Limon 830 Ml', 19.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/OLA-MAXIMUS-LIMPIA-BANOS-3D-LIMON-830ML_360x.png?v=1653344462', 'producto'),
    new Producto('Limpiador Cremoso Limon Con Microparticulas Cif De 750 Gr', 17, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7791290008458_360x.jpg?v=1656733200', 'producto'),
    new Producto('Limpiador De Baño Bio Active Cif De 500 Ml', 16.8, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7791290792418_360x.jpg?v=1656732781', 'producto'),
    new Producto('Antisarro Ola Maximus De 550 Ml', 19.6, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7775000002509_360x.jpg?v=1656732177', 'producto'),
    new Producto('Limpia Vidrios Ola Maximus Limón 900 G', 17.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/OLA-LIMPIEZA-3D-LIMPIA-VIDRIOS-MAXIMUS-LIMON-900ML_360x.png?v=1653344457', 'producto'),
    new Producto('Limpia Vidrios Multiuso Sapolio De 500 Ml', 7, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7751851003964_360x.jpg?v=1656732550', 'producto'),
    //Categoria Detergentes, Suavizantes & Jabones
    new Producto('Detergente De Ropa Delicada Ola Futuro 5000 Ml', 98.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/OLA-FUTURO-DETERGENTE-DE-ROPA-PARA-BEBE-PIEL-DELICADA-5L_360x.png?v=1653344449', 'detersuavijab'),
    new Producto('Detergente Ola Futuro 5L', 97, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/OLA-FUTURO-DETERGENTE-FUTURO-5L_360x.png?v=1653344450', 'detersuavijab'),
    new Producto('Detergente Esencia Suavizante Skip 3,8 Kg', 89, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/SKIP-DETERGENTE-ESECNCIA-SUAVIZANTE-3_8KG_360x.png?v=1653344846', 'detersuavijab'),
    new Producto('Detergente Omo Limon 3,8 Kg', 82, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/67339553-500x500_360x.jpg?v=1653343899', 'detersuavijab'),
    new Producto('Detergente Cavallaro Clásico Bidon 4L', 71, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/SUAV.-CLASICO---BIDON-4L_360x.png?v=1653343894', 'detersuavijab'),
    new Producto('Detergente Cavallaro Suave Intenso Bidon 4L', 71, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/SUAV.-INTENSO---BIDON-4L_360x.png?v=1653343896', 'detersuavijab'),
    new Producto('Detergente En Polvo Perfecto Resultados Skip De 2000 Gr', 55, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7779970675534_360x.jpg?v=1656732823', 'detersuavijab'),
    new Producto('Detergente En Polvo Facil Enjuague Omo De 2000 Gr', 48.8, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7779970674872_360x.jpg?v=1656732742', 'detersuavijab'),
    new Producto('Detergente En Polvo Piel Sensible Omo De 2000 Gr', 48.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7779970674841_360x.jpg?v=1656732584', 'detersuavijab'),
    new Producto('Detergente En Polvo Perfect White Skip De 2000 Gr', 46.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7779970672632_360x.jpg?v=1656733056', 'detersuavijab'),
    new Producto('Detergente Para Ropa De Bebé Ola 1700 Ml', 45, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/OLA-DETERGENTE-ROPA-BEBE-PIEL-DELICADA-1_7L_360x.png?v=1653344440', 'detersuavijab'),
    new Producto('Suavizante Y Acondicionador De Ropa Tentaciones Ola Suavecito 1700 Ml', 35.5, 'https://www.fidalga.com/cdn/shop/products/OLA-DETERGENTE-SUAVECITO-TENTACIONES-1_7L_360x.png?v=1653344447', 'detersuavijab'),
    new Producto('Suavizante Y Acondicionador De Ropa Delicada Ola Suavecito 1700 G', 35.5, 'https://www.fidalga.com/cdn/shop/products/OLA-DETERGENTE-SUAVECITO-BEBE-ROPA-DELICADA-1_7L_360x.png?v=1653344442', 'detersuavijab'),
    new Producto('Suavizante Y Acondicionador De Ropa Sensaciones Ola Suavecito 1700 Ml', 35.5, 'https://www.fidalga.com/cdn/shop/products/OLA-DETERGENTE-SUAVECITO-SENSACIONES-1_7L_360x.png?v=1653344445', 'detersuavijab'),
    new Producto('Suavizante Y Acondicionador De Ropa Libre Enjuague Ola Suavecito 1700 Ml', 35.5, 'https://www.fidalga.com/cdn/shop/products/OLA-DETERGENTE-SUAVECITO-LIBRE-ENJUAGUE-1_7L_360x.png?v=1653344444', 'detersuavijab'),
    new Producto('Suavizante De Ropa Brisa De Campo Borita De 900 Ml', 11.2, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7792389000414_360x.jpg?v=1656732828', 'detersuavijab'),
    new Producto('Jabón Líquido Tentacion Cremosa Liz 1000 Ml', 27.9, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/LIZ-JABON-LIQUIDO-TENTACION-CREMOSA-1LT_360x.png?v=1653344281', 'detersuavijab'),
    new Producto('Jabón Con Glicerina Rosas Francesas Lux 3x125 G', 17, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/LUX-JABON-ROSAS-FRANCESAS-3X125G_360x.png?v=1653344294', 'detersuavijab'),
    new Producto('Jabón Con Glicerina Lirio Azul Lux 3x125 G', 14.6, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/LUX-JABON-LIRIO-AZUL-3X125G_360x.png?v=1653344293', 'detersuavijab'),
    new Producto('Jabon Liquido Petalos De Rosa Classic De 370 Gr', 13.5, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7775005010219_360x.jpg?v=1656733097', 'detersuavijab'),
    new Producto('Jabon Antibacterial Aloe Rexona De 125 Gr', 12.5, 'https://www.fidalga.com/cdn/shop/products/7791293037097_360x.jpg?v=1656732407', 'detersuavijab'),
    new Producto('Jabon Con Crema Hidratante Heno De Pravia De 150 Gr', 12, 'https://www.fidalga.com/cdn/shop/products/8410225005568_360x.jpg?v=1656732387', 'detersuavijab'),
    new Producto('Jabon Con Glicerina Y Limon Guaira Deluxe De 25 Gr', 7.3, 'https://www.fidalga.com/cdn/shop/products/7840118215025_360x.jpg?v=1656733106', 'detersuavijab'),
    //Categoria Lavandina & Desinfectantes
    new Producto('Lavandina Hipoclorito Cimbol De 4000 Ml', 30.00, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7775501000240_360x.png?v=1657319994', 'lavandina'),
    new Producto('Lavandina Desinfectante Blanqueador Ola Clorito De 2000 Ml', 23.50, 'https://www.fidalga.com/cdn/shop/products/7891150078680_360x.png?v=1657320025', 'lavandina'),
    new Producto('Cloro Gel Lavanda Igenix 900 Ml', 21.50, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/a43f4058-9ea6-48ac-8d9f-ad9b8726c899_aa19b2ac-e3be-41f1-a246-3052d62f984c_360x.png?v=1653345353', 'lavandina'),
    new Producto('Lavandina Mr Cloro De 2000 Ml', 19.30, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7779970700052_360x.jpg?v=1656732217', 'lavandina'),
    new Producto('Lavandina X5 De 2000 Ml', 17.50, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7792389001510_360x.jpg?v=1656732575', 'lavandina'),
    new Producto('Lavandina Cimbol De 2000 Ml', 15.60, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7775501000134_360x.png?v=1657319887', 'lavandina'),
    new Producto('Alcohol En Gel Antibacterial Rexona 263 G', 14.90, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/REXONA-ALCOHOL-EN-GEL-ANTIBACTERIAL-300ML_360x.png?v=1653344683', 'lavandina'),
    new Producto('Desinfectante De Ambiente Floral Lysoform De 360 Ml', 24.00, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7790520014207_360x.jpg?v=1656733140', 'lavandina'),
    new Producto('Desinfectante Floral Ola Aromatic De 1800 Ml', 23.50, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7779970677163_360x.jpg?v=1656733059', 'lavandina'),
    new Producto('Desinfectante De Bebe Todo Brillo De 360 Ml', 14.50, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7774904287944_360x.png?v=1657319930', 'lavandina'),
    new Producto('Desinfectante Original Todo Brillo De 360 Ml', 14.50, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7774904287906_360x.jpg?v=1656732287', 'lavandina'),
    new Producto('Desinfectante En Aerosol Lysoform Original 360 Cc', 13.00, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/15deed2f-ab59-497a-b893-aaf2a0a331c5_d1158e61-a0c6-4340-b982-0747dbc08983_360x.png?v=1653345348', 'lavandina'),
    //Categoria Aromatizantes
    new Producto('Aromatizante De Ambientes Anti Tabaco Ola Aromatic 252 G', 13.80, 'https://www.fidalga.com/cdn/shop/products/OLA-AROMATIZANTE-DE-AMBIENTES-ANTI-TABACO-300ML_360x.png?v=1653344435', 'aromatizantes'),
    new Producto('Aromatizante De Ambientes Lavanda Ola Aromatic 252 G', 13.80, 'https://www.fidalga.com/cdn/shop/products/OLA-AROMATIZANTE-DE-AMBIENTES-LAVANDA-300ML_360x.png?v=1653344437', 'aromatizantes'),
    new Producto('Aromatizante De Ambientes Bouquet De Rosas Ola Aromatic', 13.80, 'https://www.fidalga.com/cdn/shop/products/OLA-AROMATIZANTE-BOUQUET-DE-ROSAS-300ML_360x.png?v=1653344434', 'aromatizantes'),
    new Producto('Ambientador Sapolio Brisa Marina 360 Ml', 13.50, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/SOPOLIO-AMBIENTADOR-BRIS-MARINA_360x.png?v=1653343425', 'aromatizantes'),
    new Producto('Aromatizante De Ambientes Anti Tabaco Ola Aromatic 252 G', 13.50, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/SOPOLIO-AMBIENTADOR-ORGULLOS-DE-BEBE_360x.png?v=1653343427', 'aromatizantes'),
    //Categoria Insecticidas & Repelentes
    new Producto('Insecticida Mata Todo Tyson De 500 Ml', 18.50, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7774904360449_360x.jpg?v=1656733009', 'insecticidas'),
    new Producto('Insecticida Mata Mosca Tyson De 500 Ml', 18.50, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7774904360470_360x.jpg?v=1656733227', 'insecticidas'),
    new Producto('Mata Cucarachas Y Hormigas Sapolio De 360 Ml', 18.00, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7751851589451_360x.jpg?v=1656733141', 'insecticidas'),
    new Producto('Mata Moscas Y Zancudos Sapolio De 360 Ml', 18.00, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7751851589475_360x.jpg?v=1656733196', 'insecticidas'),
    new Producto('Insectisida Cucarachicida X5 De 400 Ml', 17.50, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7792389079410_360x.jpg?v=1656733234', 'insecticidas'),
    new Producto('Insecticida Mata Mosca Y Mosquitos Raid 2 En 1 De 360 Ml', 17.50, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7790520997548_360x.jpg?v=1656733044', 'insecticidas'),
    new Producto('Sapolio Matatodo De 414 Ml', 13.00, 'https://cdn.shopify.com/s/files/1/0480/9424/9119/products/7751851020152_360x.jpg?v=1656733034', 'insecticidas'),
    new Producto('Insecticida Doble Accion,X5 360 Cc', 13.00, 'https://www.fidalga.com/cdn/shop/products/78f6c71d-9617-4608-b7d1-a3c432f0903e_0aa6c2aa-7542-47ac-8154-7b87baef0c0e_360x.png?v=1653345360', 'insecticidas'),
    new Producto('Insecticida Baygon Ultra Verde', 12.00, 'https://www.fidalga.com/cdn/shop/products/7840784000017_360x.jpg?v=1656732363', 'insecticidas'),
    new Producto('Insecticida Mata Moscas Y Mosquitos Baygon Azul De 300 Ml', 12.00, 'https://www.fidalga.com/cdn/shop/products/7790520023995_360x.jpg?v=1656732420', 'insecticidas'),
    new Producto('Tableta Para Mosquitos Rapida Accion Raid De 12 Unidades', 11.00, 'https://www.fidalga.com/cdn/shop/products/7790520995377_360x.jpg?v=1656732783', 'insecticidas'),
    new Producto('Tabletas Para Mosquitos Tyson De 12 Unidades', 7.00, 'https://www.fidalga.com/cdn/shop/products/7774904288774_360x.jpg?v=1656732907', 'insecticidas'),
    //Categoria Servilletas & Papel Toalla
    new Producto('Papel Perla Multiusos 2 Rollos', 12.00, 'https://www.fidalga.com/cdn/shop/products/TOALLAS-PERLA-FULL-ABSORB-2ROLLOS_376ebf6c-ccc9-49e6-9fd0-390ee763dd40_360x.png?v=1653344816', 'papelToalla'),
    new Producto('Servilleta De Papel Perlita 500 Unidades', 11.00, 'https://www.fidalga.com/cdn/shop/products/SERVILLETA-PERLITA-50UNIDADES_360x.png?v=1653344783', 'papelToalla'),
    new Producto('Servilleta De Papel Scott 50 Unidades', 3.00, 'https://www.fidalga.com/cdn/shop/products/7776501002005_360x.jpg?v=1656732167', 'papelToalla'),
    new Producto('Paño Reutilizable Scott Duramax 3 Unidades', 62.50, 'https://www.fidalga.com/cdn/shop/products/PANO-SCOTT-DURAMAX-3ROLLOS_360x.png?v=1653344800', 'papelToalla'),
    new Producto('Toalla Reutilizable Duramax Scott 2 Unidades', 46.50, 'https://www.fidalga.com/cdn/shop/products/7702425679214_360x.jpg?v=1656732655', 'papelToalla'),
    new Producto('Toalla Reutilizable Antibacterial Duramax Scott 1 Unidad', 26.50, 'https://www.fidalga.com/cdn/shop/products/7702425810976_360x.jpg?v=1656733228', 'papelToalla'),
    new Producto('Toalla De Cocina Scott Duramax 116 Paños', 45.50, 'https://www.fidalga.com/cdn/shop/products/4f0f40fd-e3f2-4c92-aa10-868b967e69dd_56ed3249-de2b-407a-a482-bb53fb13392e_360x.png?v=1653345368', 'papelToalla'),
    new Producto('Paño Duramax Scott 1 Unidad', 26.50, 'https://www.fidalga.com/cdn/shop/products/73e76ba2-a094-447c-9721-e9835db6fb32_4103dd7b-bf5b-4861-91c0-dfa872abbbb1_360x.png?v=1653345346', 'papelToalla'),
    new Producto('Pañuelo Facial Elite Premium 36X60', 11.90, 'https://www.fidalga.com/cdn/shop/products/7806500168102_360x.jpg?v=1656732380', 'papelToalla'),
    new Producto('Pañuelo Mentolado Triple Hoja Elite De 6 Unidades', 8.90, 'https://www.fidalga.com/cdn/shop/products/7806500174202_360x.jpg?v=1656732481', 'papelToalla'),
    new Producto('Servilleta De Papel Elite De 100 Unidades', 11.50, 'https://www.fidalga.com/cdn/shop/products/7759185000390_360x.jpg?v=1656732531', 'papelToalla'),
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