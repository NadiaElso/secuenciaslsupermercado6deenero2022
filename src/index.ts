console.log("Supermercado Madariaga");
console.log("productos disponibles");
console.log(
  "Leche,azucar,yogurt, manteca, queso, fideos, salsa de tomate,aceite, crema de leche, dulce de leche, galletitas"
);
console.log("stock de los productos disponibles");
console.log(
  "4 packs de leche, 1 pack de azucar, 5 yogures, 4 mantecas, 4 quesos, 10 fideos, 10 salsa de tomates, 4 crema de leches, 6 paquetes de galletitas"
);

let nombreDesupermercado: string;
let productosDisponibles: string;
let stockLeche: number;
let stockAzucar: number;
let stockYogurt: number;
let stockManteca: number;
let stockQueso: number;
let stockFideos: number;
let stockSalsaDeTomate: number;
let StockAceite: number;
let StockCremaDeLeche: number;
let stockDulceDeLeche: number;
let stockGalletitas: number;

nombreDesupermercado = "Madariaga";
productosDisponibles =
  "Leche,Azucar, Yogurt, manteca, queso, fideos, salsa de tomate, aceite, crema de leche, dulce de leche, galletitas";
stockLeche = 4;
stockAzucar = 1;
stockYogurt = 5;
stockManteca = 4;
stockQueso = 4;
stockFideos = 10;
stockSalsaDeTomate = 10;
StockAceite = 0;
StockCremaDeLeche = 4;
stockDulceDeLeche = 0;
stockGalletitas = 6;

console.log(nombreDesupermercado);
console.log(productosDisponibles);
console.log("Stock de leche:" + stockLeche);
console.log("Stock de Azucar" + stockAzucar);
console.log("Stock de Manteca" + stockManteca);
console.log("Stock de Queso" + stockQueso);
console.log("Stock de Fideos" + stockFideos);
console.log("Stock de Salsa de Tomates" + stockSalsaDeTomate);
console.log("Stock de Crema de Leche" + StockCremaDeLeche);
console.log("Stock de Dulce de Leche" + stockDulceDeLeche);
console.log("Stock de Galletitas" + stockGalletitas);

let precioLeche: number;
let precioAzucar: number;
let precioYogurt: number;
let precioManteca: number;
let precioQueso: number;
let precioFideos: number;
let preciosalsaDeTomates: number;
let precioCremaDeLeche: number;
let precioDulceDeLeche: number;
let precioGalletitas: number;

precioLeche = 50;
precioAzucar = 60;
precioYogurt = 60;
precioManteca = 45;
precioQueso = 140;
precioFideos = 70;
preciosalsaDeTomates = 90;
precioGalletitas = 50;

console.log("El precio unitario de la Leche es:" + precioLeche);
console.log("El  precio unitario de la Azucar es:" + precioAzucar);
console.log("El precio unitario del Yogurt es:" + precioYogurt);
console.log("EL precio unitario de la Manteca es:" + precioManteca);
console.log("El precio unitario del Queso  es" + precioQueso);
console.log("El precio unitario del fideo es:" + precioFideos);
console.log(
  "El precio unitario de la Salsa de Tomate es:" + preciosalsaDeTomates
);
console.log("El precion unitario de las Galletitas es:" + precioGalletitas);

const comprarleche = document.getElementById("cantidaddeleche");
const comprarazucar = document.getElementById("cantidaddeazucar");
const compraryogurt = document.getElementById("cantidaddeyogurt");
const elementoboton = document.getElementById("botoncomprar");

function compratotal() {
  let cantidadcompraleche: number = Number(comprarleche.value);
  let totalleche = cantidadcompraleche * precioLeche;
  let cantidadcompraazucar: number = Number(comprarazucar.value);
  let totalazucar = cantidadcompraazucar * precioAzucar;
  let cantidadcomprayogurt: number = Number(compraryogurt.value);
  let totalyogurt = cantidadcomprayogurt * precioYogurt;
  let totaldetotales: number = totalleche + totalazucar + totalyogurt;
  console.log("El total de la compra es:" + totaldetotales);
}

elementoboton?.addEventListener("click", compratotal);
