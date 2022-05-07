
/** *
 Problema: El usuario puede agregar al carrito uno o varios artículos, y se debe mostrar
 el total de todos los artículos
 * */ 

const IVA = 16;
let articulos = [];
let total = 0;

function Articulo(id, sku, nombre, precio, impuestos, descripcion){
    this.id = id;
    this.sku = sku;
    this.nombre = nombre;
    this.precio = precio;
    this.impuestos = impuestos;
    this.descripcion = descripcion;
}

function Carrito(articulos, tieneDescuento, descuento) {
    this.articulos = articulos;
    this.tieneDescuento = tieneDescuento;
    this.descuento = descuento;
}

let articulo_1 = new Articulo(123, "P00JHDGNB132", "Alebrije de león", 100, IVA, "Alebrije de Oaxaca hecho a mano, tallado en madera  y pintado con finos detalles.")
let articulo_2 = new Articulo(487, "AP826MSNDGN2", "Alebrije de toro", 320, IVA, "Alebrije hecho a mano, tallado en madera  y pintado con colores brillantes.")

articulos.push(articulo_1, articulo_2);

const carrito1 = new Carrito(articulos, true, 5);

console.log(carrito1);

for(let item=0; item<articulos.length; item++){
    total += articulos[item].precio;
}

console.log(total);